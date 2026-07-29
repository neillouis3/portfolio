"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Popover, PopoverContent } from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Mail01Icon,
  Clock01Icon,
  SpotifyIcon,
} from "@hugeicons/core-free-icons";

const LocationGlobe = dynamic(() => import("./locationGlobeGL"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex items-center justify-center" style={{ height: 220 }}>
      <div className="h-40 w-40 rounded-full bg-default-100 animate-pulse" />
    </div>
  ),
});

type Song = {
  title: string;
  artist: string;
  url: string;
};

const SONGS: Song[] = [
  {
    title: "Best Part",
    artist: "Daniel Caesar (feat. H.E.R.)",
    url: "https://open.spotify.com/track/6PSma9xvYhGabJZ7AmnJjI",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    url: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8",
  },
  {
    title: "Bad Habit",
    artist: "Steve Lacy",
    url: "https://open.spotify.com/track/4k6Uh1HXdhtusDW5y8Gbvy",
  },
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    url: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
  },
  {
    title: "Chamber of Reflection",
    artist: "Mac DeMarco",
    url: "https://open.spotify.com/track/4qDpLaFGf5ampf2DXD2TMA",
  },
  {
    title: "Sunflower",
    artist: "Rex Orange County",
    url: "https://open.spotify.com/track/3D5dV3NQ5Bd1QYUFTOyVOj",
  },
  {
    title: "SLOW DANCING IN THE DARK",
    artist: "Joji",
    url: "https://open.spotify.com/track/6tDDoYIxWvMLTdKpjFkc1B",
  },
  {
    title: "Gravity",
    artist: "John Mayer",
    url: "https://open.spotify.com/track/4qu63nuBmaSitWxnUgkPdq",
  },
];

const EMAIL = "neil03.castillon@gmail.com";

function AnalogClock({ size = 200 }: { size?: number }) {
  const [parts, setParts] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/St_Johns",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });
      const tz = fmt.formatToParts(new Date());
      const get = (t: string) => parseInt(tz.find((p) => p.type === t)?.value ?? "0", 10);
      setParts({ h: get("hour"), m: get("minute"), s: get("second") });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const secAngle = parts.s * 6;
  const minAngle = parts.m * 6 + parts.s * 0.1;
  const hourAngle = (parts.h % 12) * 30 + parts.m * 0.5;
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="text-foreground"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        className="stroke-default-300"
        strokeWidth="0.8"
      />
      {ticks.map((i) => {
        const angle = i * 6;
        const isHour = i % 5 === 0;
        const inner = isHour ? 41 : 44;
        const outer = 46;
        const rad = ((angle - 90) * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * inner;
        const y1 = 50 + Math.sin(rad) * inner;
        const x2 = 50 + Math.cos(rad) * outer;
        const y2 = 50 + Math.sin(rad) * outer;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className={isHour ? "stroke-default-600" : "stroke-default-300"}
            strokeWidth={isHour ? 1.2 : 0.6}
            strokeLinecap="round"
          />
        );
      })}
      <g transform={`rotate(${hourAngle} 50 50)`}>
        <line
          x1="50"
          y1="55"
          x2="50"
          y2="28"
          className="stroke-foreground"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <g transform={`rotate(${minAngle} 50 50)`}>
        <line
          x1="50"
          y1="56"
          x2="50"
          y2="18"
          className="stroke-foreground"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>
      <g transform={`rotate(${secAngle} 50 50)`}>
        <line
          x1="50"
          y1="58"
          x2="50"
          y2="14"
          className="stroke-primary"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="50" cy="14" r="1.2" className="fill-primary" />
      </g>
      <circle cx="50" cy="50" r="2" className="fill-foreground" />
      <circle cx="50" cy="50" r="0.8" className="fill-background" />
    </svg>
  );
}

function useStJohnsTime() {
  const [time, setTime] = useState<string>("");
  const [offset, setOffset] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/St_Johns",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/St_Johns",
        timeZoneName: "shortOffset",
      }).formatToParts(now);
      const tzPart = parts.find((p) => p.type === "timeZoneName")?.value ?? "";

      setTime(formatted);
      setOffset(tzPart.replace("GMT", "UTC"));
    };

    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return { time, offset };
}

function HoverPopover({
  children,
  content,
  placement = "bottom-start",
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: "bottom-start" | "bottom" | "bottom-end" | "top-start" | "top" | "top-end";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };
  const close = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={open}
        onMouseLeave={close}
        className="inline-flex items-center cursor-pointer max-w-full text-sm leading-none font-normal"
      >
        {children}
      </div>
      <Popover
        triggerRef={triggerRef as React.RefObject<HTMLElement>}
        isOpen={isOpen}
        onOpenChange={(next) => {
          if (!next) setIsOpen(false);
        }}
        placement={placement}
        showArrow
        radius="lg"
        shadow="md"
      >
        <span hidden />
        <PopoverContent onMouseEnter={open} onMouseLeave={close} className="p-0">
          <div className="px-4 py-3 max-w-sm">{content}</div>
        </PopoverContent>
      </Popover>
    </>
  );
}

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <span className="text-xs uppercase tracking-widest text-default-500 leading-none">
        {label}
      </span>
      {children}
    </div>
  );
}

function MetaValue({
  icon,
  children,
  href,
  className = "",
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center gap-1.5 min-w-0 font-normal text-foreground no-underline hover:opacity-70 transition-opacity ${className}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="inline-flex shrink-0 items-center justify-center w-3 h-3 translate-y-[0.5px] [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
      >
        {icon}
      </span>
      <span className="min-w-0 truncate text-sm leading-none font-normal">
        {children}
      </span>
    </>
  );

  if (href) {
    return <a href={href} className={classes}>{content}</a>;
  }

  return <span className={classes}>{content}</span>;
}

export default function AboutBanners() {
  const { time, offset } = useStJohnsTime();

  const [song, setSong] = useState<Song>(SONGS[0]);
  useEffect(() => {
    setSong(SONGS[Math.floor(Math.random() * SONGS.length)]);
  }, []);

  const dayHint = useMemo(() => {
    if (!time) return "";
    const [hStr] = time.split(":");
    const h = parseInt(hStr, 10);
    if (h < 5) return "Probably asleep";
    if (h < 12) return "Likely sipping coffee";
    if (h < 17) return "Heads-down building";
    if (h < 21) return "Winding down";
    return "Late-night coding";
  }, [time]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-start gap-x-10 gap-y-5 sm:gap-x-12">
        <MetaItem label="Location">
          <HoverPopover
            content={
              <div className="flex flex-col gap-3 text-sm w-[260px]">
                <LocationGlobe />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇨🇦</span>
                    <p className="text-sm">St. John&apos;s, NL</p>
                  </div>
                  <p className="text-default-600">
                    Easternmost city in North America, perched on the Avalon
                    Peninsula of Newfoundland and Labrador, Canada.
                  </p>
                  <p className="text-default-500 text-sm">
                    Famous for jellybean row houses, Signal Hill, and the freshest
                    Atlantic air you&apos;ll ever breathe.
                  </p>
                </div>
                <p className="text-default-500 text-sm">Since 2021</p>
              </div>
            }
          >
            <MetaValue
              icon={
                <HugeiconsIcon icon={Location01Icon} size={12} strokeWidth={1.75} />
              }
            >
              St. John&apos;s, NL
            </MetaValue>
          </HoverPopover>
        </MetaItem>

        <MetaItem label="Email">
          <MetaValue
            icon={<HugeiconsIcon icon={Mail01Icon} size={12} strokeWidth={1.75} />}
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </MetaValue>
        </MetaItem>

        <MetaItem label="Local Time">
          <HoverPopover
            content={
              <div className="flex flex-col gap-3 text-sm w-[240px]">
                <div className="flex items-center justify-center py-1">
                  <AnalogClock size={200} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm">Newfoundland Time</p>
                    <span className="text-sm text-default-500">
                      {offset || "UTC-03:30"}
                    </span>
                  </div>
                  <p className="text-default-600 tabular-nums">
                    {time || "--:--"} local
                  </p>
                </div>
                <p className="text-default-500">
                  {dayHint || "On the half-hour offset — yes, really."}
                </p>
              </div>
            }
          >
            <MetaValue
              icon={
                <HugeiconsIcon icon={Clock01Icon} size={12} strokeWidth={1.75} />
              }
              className="tabular-nums"
            >
              {time || "--:--"} NT
            </MetaValue>
          </HoverPopover>
        </MetaItem>
      </div>

      <div className="flex items-center gap-1.5 text-sm text-default-600 min-w-0 leading-none">
        <span className="inline-flex items-center justify-center shrink-0 size-3.5 [&_svg]:block text-[#1DB954]">
          <HugeiconsIcon icon={SpotifyIcon} size={14} />
        </span>
        <span className="shrink-0 leading-none">Now Playing —</span>
        <a
          href={song.url}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate leading-none underline underline-offset-[3px] decoration-default-300 hover:text-foreground hover:decoration-default-500 transition-colors"
        >
          {song.title} · {song.artist}
        </a>
      </div>
    </div>
  );
}

