import postFile from "@/config/latest-post.json";
import { kolmoConfig } from "@/config/site";

export type FacebookPost = {
  id: string;
  message: string;
  createdAt: string;
  permalinkUrl: string;
  imageUrl: string;
  imageAlt?: string;
  source: "facebook" | "manual";
};

type PostFile = {
  post: Omit<FacebookPost, "imageUrl"> & { imageUrl?: string | null } | null;
};

type GraphAttachment = {
  media_type?: string;
  type?: string;
  media?: { image?: { src?: string; height?: number; width?: number } };
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
  if (
    !post?.id ||
    !post.message ||
    !post.createdAt ||
    !post.permalinkUrl ||
    !post.imageUrl
  ) {
    return null;
  }

  return {
    ...post,
    imageUrl: post.imageUrl,
    imageAlt: post.imageAlt ?? post.message.slice(0, 120),
  };
}

function extractImage(post: GraphPost): string | undefined {
  if (post.full_picture) {
    return post.full_picture;
  }

  const queue = [...(post.attachments?.data ?? [])];
  while (queue.length) {
    const attachment = queue.shift();
    if (!attachment) {
      continue;
    }

    if (attachment.media?.image?.src) {
      return attachment.media.image.src;
    }

    if (attachment.subattachments?.data?.length) {
      queue.push(...attachment.subattachments.data);
    }
  }

  return undefined;
}

function mapGraphPost(post: GraphPost): FacebookPost | null {
  const imageUrl = extractImage(post);
  if (!imageUrl) {
    return null;
  }

  const message =
    post.message?.trim() ||
    post.story?.trim() ||
    "Nový příspěvek z kuchyně KOLMO kafe";

  return {
    id: post.id,
    message,
    createdAt: post.created_time,
    permalinkUrl:
      post.permalink_url ??
      `https://www.facebook.com/${post.id.replace("_", "/posts/")}`,
    imageUrl,
    imageAlt: message.slice(0, 120),
    source: "facebook",
  };
}

async function fetchLatestFacebookPost(): Promise<FacebookPost | null> {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID ?? "kolmokafe";

  if (!token) {
    return null;
  }

  const fields =
    "id,message,story,created_time,permalink_url,full_picture,attachments{media_type,type,media{image},subattachments{media_type,type,media{image}}}";

  for (const edge of ["posts", "published_posts"] as const) {
    const url = new URL(`https://graph.facebook.com/v21.0/${pageId}/${edge}`);
    url.searchParams.set("fields", fields);
    url.searchParams.set("limit", "12");
    url.searchParams.set("access_token", token);

    try {
      const response = await fetch(url, {
        next: { revalidate: REVALIDATE_SECONDS },
      });

      if (!response.ok) {
        continue;
      }

      const payload = (await response.json()) as { data?: GraphPost[] };
      for (const item of payload.data ?? []) {
        const mapped = mapGraphPost(item);
        if (mapped) {
          return mapped;
        }
      }
    } catch (error) {
      console.warn(`[kolmokafe/post] Facebook ${edge} fetch failed`, error);
    }
  }

  return null;
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

export function formatPostCaption(message: string, maxLength = 140): string {
  const normalized = message.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  return `${normalized.slice(0, maxLength).trimEnd()}…`;
}

export const facebookPageUrl = kolmoConfig.facebook;
