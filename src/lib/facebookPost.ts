import postFile from "@/config/latest-post.json";
import { kolmoConfig } from "@/config/site";

export type FacebookPost = {
  id: string;
  message: string;
  createdAt: string;
  permalinkUrl: string;
  imageUrl?: string | null;
  source: "facebook" | "manual";
};

type PostFile = {
  post: FacebookPost | null;
};

type GraphAttachment = {
  media_type?: string;
  media?: { image?: { src?: string } };
  subattachments?: { data?: GraphAttachment[] };
};

type GraphPost = {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
  attachments?: { data?: GraphAttachment[] };
};

const REVALIDATE_SECONDS = 1800;

function parseManualPost(): FacebookPost | null {
  const post = (postFile as PostFile).post;
  if (!post?.id || !post.message || !post.createdAt || !post.permalinkUrl) {
    return null;
  }
  return post;
}

function extractImage(post: GraphPost): string | undefined {
  if (post.full_picture) {
    return post.full_picture;
  }

  const attachment = post.attachments?.data?.[0];
  if (!attachment) {
    return undefined;
  }

  if (attachment.media?.image?.src) {
    return attachment.media.image.src;
  }

  const nested = attachment.subattachments?.data?.[0];
  return nested?.media?.image?.src;
}

function mapGraphPost(post: GraphPost): FacebookPost | null {
  const message = post.message?.trim() || post.story?.trim();
  if (!message) {
    return null;
  }

  return {
    id: post.id,
    message,
    createdAt: post.created_time,
    permalinkUrl:
      post.permalink_url ??
      `https://www.facebook.com/${post.id.replace("_", "/posts/")}`,
    imageUrl: extractImage(post),
    source: "facebook",
  };
}

async function fetchLatestFacebookPost(): Promise<FacebookPost | null> {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID ?? "kolmokafe";

  if (!token) {
    return null;
  }

  const url = new URL(`https://graph.facebook.com/v21.0/${pageId}/posts`);
  url.searchParams.set(
    "fields",
    "id,message,story,created_time,permalink_url,full_picture,attachments{media_type,media,subattachments}",
  );
  url.searchParams.set("limit", "5");
  url.searchParams.set("access_token", token);

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.warn("[kolmokafe/post] Facebook API returned", response.status);
      return null;
    }

    const payload = (await response.json()) as { data?: GraphPost[] };
    for (const item of payload.data ?? []) {
      const mapped = mapGraphPost(item);
      if (mapped) {
        return mapped;
      }
    }

    return null;
  } catch (error) {
    console.warn("[kolmokafe/post] Facebook API fetch failed", error);
    return null;
  }
}

export async function getLatestFacebookPost(): Promise<{
  post: FacebookPost | null;
  source: "facebook" | "manual" | "none";
}> {
  const fromFacebook = await fetchLatestFacebookPost();
  if (fromFacebook) {
    return { post: fromFacebook, source: "facebook" };
  }

  const manual = parseManualPost();
  if (manual) {
    return { post: manual, source: "manual" };
  }

  return { post: null, source: "none" };
}

const postDateFormatter = new Intl.DateTimeFormat("cs-CZ", {
  timeZone: "Europe/Prague",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatPostDate(iso: string): string {
  return postDateFormatter.format(new Date(iso));
}

export function formatPostExcerpt(message: string, maxLength = 320): string {
  const normalized = message.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, maxLength).trimEnd()}…`;
}

export const facebookPageUrl = kolmoConfig.facebook;
