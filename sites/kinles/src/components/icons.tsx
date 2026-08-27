import type { ReactElement } from "react";

/** Ikony služeb — obrysové, barvu řídí CSS (stroke: var(--brass)). */
export const serviceIcons: Record<string, ReactElement> = {
  key: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4" strokeWidth="1.6" />
      <path
        d="M11 11L20 20M20 20V16M20 20H16"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  door: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="12" height="18" rx="1" strokeWidth="1.6" />
      <circle cx="14.5" cy="12" r="1.1" />
    </svg>
  ),
  shield: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  safe: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1.5" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
      <path
        d="M12 9V7M12 17v-2M9 12H7M17 12h-2"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  alarm: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v3M12 17v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4 12h3M17 12h3M4.9 19.1L7 17M17 7l2.1-2.1"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.2" strokeWidth="1.6" />
    </svg>
  ),
  lock: (
    <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="9" width="14" height="12" rx="1" strokeWidth="1.6" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" strokeWidth="1.6" />
      <circle cx="12" cy="14.5" r="1.3" />
    </svg>
  ),
};

export function KinlesMark() {
  return (
    <svg className="mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="1.5" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeWidth="1.6" />
      <circle cx="12" cy="15.5" r="1.3" />
    </svg>
  );
}

export function LockAnimation() {
  return (
    <svg
      className="lock-anim"
      viewBox="-20 0 280 220"
      fill="none"
      role="img"
      aria-label="Ilustrace klíče a zámku"
    >
      <rect
        x="60"
        y="70"
        width="140"
        height="120"
        rx="4"
        fill="none"
        stroke="#465866"
        strokeWidth="2"
      />
      <path
        d="M85 70V50a45 45 0 0 1 90 0v20"
        stroke="#465866"
        strokeWidth="2"
        fill="none"
      />
      <circle
        className="tumbler"
        cx="130"
        cy="120"
        r="14"
        fill="none"
        stroke="#5C7181"
        strokeWidth="2"
      />
      <rect
        className="tumbler"
        x="126"
        y="128"
        width="8"
        height="20"
        fill="#5C7181"
      />
      <g className="key">
        <circle
          cx="60"
          cy="130"
          r="16"
          fill="none"
          stroke="#D9A64E"
          strokeWidth="4"
        />
        <rect x="74" y="126" width="58" height="8" fill="#D9A64E" />
        <g className="key-tip">
          <rect x="108" y="134" width="8" height="12" fill="#D9A64E" />
          <rect x="122" y="134" width="8" height="16" fill="#D9A64E" />
        </g>
      </g>
    </svg>
  );
}
