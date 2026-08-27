import { kolmoConfig } from "@/config/site";

export function HoursBar() {
  return (
    <div className="kolmo-hours-bar border-b border-[#f2ece3]/8 bg-[#1a1d21]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2.5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[#9a948c]">
          <span className="font-semibold uppercase tracking-[0.2em] text-[#7fa8b5]">
            Otevírací doba
          </span>
          <span className="mx-2 hidden text-[#f2ece3]/20 sm:inline">·</span>
          <span className="mt-1 block sm:mt-0 sm:inline">
            {kolmoConfig.hoursNote}
          </span>
        </p>
        <a
          href={kolmoConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#c8a27a] transition hover:text-[#f2ece3]"
        >
          Aktuální časy na Facebooku →
        </a>
      </div>
    </div>
  );
}
