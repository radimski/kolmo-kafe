import Link from "next/link";
import { kolmoConfig } from "@/config/site";
import { OpenStatus } from "@/components/OpenStatus";

export function HoursBar() {
  return (
    <div className="kolmo-hours-bar border-b border-[#f2ece3]/8 bg-[#1a1d21]">
      <div className="mx-auto flex max-w-6xl items-center gap-2.5 overflow-hidden px-6 py-2 text-xs">
        <OpenStatus
          schedule={kolmoConfig.openingSchedule}
          className="open-status open-status-kolmo shrink-0"
          showDetail={false}
        />
        <span className="shrink-0 text-[#f2ece3]/20" aria-hidden>
          ·
        </span>
        <span className="min-w-0 truncate font-medium text-[#f2ece3]/85">
          <span className="sm:hidden">{kolmoConfig.hoursShort}</span>
          <span className="hidden sm:inline">{kolmoConfig.hoursTypical}</span>
        </span>
        <Link
          href="/menu"
          className="ml-auto hidden shrink-0 font-medium text-[#7fa8b5] transition hover:text-[#f2ece3] sm:inline"
        >
          Menu →
        </Link>
        <a
          href={kolmoConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-medium text-[#c8a27a] transition hover:text-[#f2ece3] sm:ml-3"
        >
          Facebook →
        </a>
      </div>
    </div>
  );
}
