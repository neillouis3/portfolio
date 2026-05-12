"use client";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  Popover,
  PopoverContent,
  Link,
  Chip,
} from "@heroui/react";
import { motion } from "framer-motion";

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
  album: string;
  year: number;
  url: string;
  duration: number;
  cover: { from: string; to: string };
};

const SONGS: Song[] = [
  {
    title: "Best Part",
    artist: "Daniel Caesar (feat. H.E.R.)",
    album: "Freudian",
    year: 2017,
    url: "https://open.spotify.com/track/6PSma9xvYhGabJZ7AmnJjI",
    duration: 218,
    cover: { from: "#d97757", to: "#5b2a17" },
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    album: "Blonde",
    year: 2016,
    url: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8",
    duration: 184,
    cover: { from: "#f8c8d0", to: "#f5e6c8" },
  },
  {
    title: "Bad Habit",
    artist: "Steve Lacy",
    album: "Gemini Rights",
    year: 2022,
    url: "https://open.spotify.com/track/4k6Uh1HXdhtusDW5y8Gbvy",
    duration: 232,
    cover: { from: "#7a1f2b", to: "#1a0202" },
  },
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Currents",
    year: 2015,
    url: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
    duration: 216,
    cover: { from: "#ff6b3d", to: "#ffd93d" },
  },
  {
    title: "Chamber of Reflection",
    artist: "Mac DeMarco",
    album: "Salad Days",
    year: 2014,
    url: "https://open.spotify.com/track/4qDpLaFGf5ampf2DXD2TMA",
    duration: 248,
    cover: { from: "#fae0d0", to: "#b8d8a8" },
  },
  {
    title: "Sunflower",
    artist: "Rex Orange County",
    album: "Apricot Princess",
    year: 2017,
    url: "https://open.spotify.com/track/3D5dV3NQ5Bd1QYUFTOyVOj",
    duration: 165,
    cover: { from: "#ffd93d", to: "#ff7a3d" },
  },
  {
    title: "SLOW DANCING IN THE DARK",
    artist: "Joji",
    album: "BALLADS 1",
    year: 2018,
    url: "https://open.spotify.com/track/6tDDoYIxWvMLTdKpjFkc1B",
    duration: 209,
    cover: { from: "#2a1d4f", to: "#6b1f3a" },
  },
  {
    title: "Gravity",
    artist: "John Mayer",
    album: "Continuum",
    year: 2006,
    url: "https://open.spotify.com/track/4qu63nuBmaSitWxnUgkPdq",
    duration: 246,
    cover: { from: "#1e3a8a", to: "#0f172a" },
  },
];

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function SpinningCD({ size = 18 }: { size?: number }) {
  const id = useId().replace(/[:]/g, "");
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" width={size} height={size}>
        <defs>
          <radialGradient id={`cd-sheen-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="35%" stopColor="#0f0f0f" />
            <stop offset="55%" stopColor="#5a5a5a" />
            <stop offset="75%" stopColor="#101010" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </radialGradient>
          <linearGradient
            id={`cd-shine-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill={`url(#cd-sheen-${id})`} />
        <circle cx="20" cy="20" r="19" fill={`url(#cd-shine-${id})`} />
        <circle
          cx="20"
          cy="20"
          r="15"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.4"
        />
        <circle
          cx="20"
          cy="20"
          r="12"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.4"
        />
        <circle
          cx="20"
          cy="20"
          r="8"
          className="fill-primary"
        />
        <circle
          cx="20"
          cy="20"
          r="2.4"
          className="fill-background"
        />
      </svg>
    </motion.div>
  );
}

function Vinyl({
  size = 200,
  cover,
  initials,
}: {
  size?: number;
  cover: { from: string; to: string };
  initials: string;
}) {
  const id = useId().replace(/[:]/g, "");
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id={`vinyl-body-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="55%" stopColor="#0a0a0a" />
            <stop offset="80%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
          <linearGradient
            id={`vinyl-shine-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="48%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="52%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <radialGradient id={`label-${id}`} cx="35%" cy="35%" r="80%">
            <stop offset="0%" stopColor={cover.from} />
            <stop offset="100%" stopColor={cover.to} />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="49" fill={`url(#vinyl-body-${id})`} />
        <circle cx="50" cy="50" r="49" fill={`url(#vinyl-shine-${id})`} />

        {[44, 41, 38, 35, 32, 29].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.25"
          />
        ))}

        <circle cx="50" cy="50" r="22" fill={`url(#label-${id})`} />
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="none"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="0.4"
        />

        <text
          x="50"
          y="53"
          textAnchor="middle"
          fontSize="9"
          fill="rgba(255,255,255,0.9)"
          style={{ fontFamily: "inherit" }}
        >
          {initials}
        </text>

        <circle cx="50" cy="50" r="2.4" fill="#0a0a0a" />
        <circle cx="50" cy="50" r="0.9" fill="rgba(255,255,255,0.4)" />
      </svg>
    </motion.div>
  );
}

function Tonearm({ size = 200 }: { size?: number }) {
  return (
    <motion.div
      className="absolute top-0 right-0"
      style={{
        width: size * 0.55,
        height: size * 0.7,
        transformOrigin: "85% 15%",
      }}
      initial={{ rotate: -34 }}
      animate={{ rotate: 8 }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 130"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="arm-metal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="50%" stopColor="#e5e5e5" />
            <stop offset="100%" stopColor="#888" />
          </linearGradient>
          <radialGradient id="pivot-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4d4d4" />
            <stop offset="100%" stopColor="#4a4a4a" />
          </radialGradient>
        </defs>

        <circle cx="85" cy="15" r="10" fill="url(#pivot-grad)" />
        <circle cx="85" cy="15" r="5" fill="#1a1a1a" />
        <circle cx="85" cy="15" r="1.5" fill="#888" />

        <rect
          x="74"
          y="15"
          width="14"
          height="6"
          rx="2"
          fill="url(#arm-metal)"
        />

        <rect
          x="79.5"
          y="20"
          width="3"
          height="78"
          fill="url(#arm-metal)"
        />

        <rect
          x="74"
          y="96"
          width="14"
          height="14"
          rx="1.5"
          fill="#1a1a1a"
        />
        <rect
          x="74"
          y="96"
          width="14"
          height="3"
          fill="#3a3a3a"
        />

        <polygon
          points="78,110 84,110 81,116"
          fill="#c9c9c9"
        />
        <circle cx="81" cy="116.5" r="0.8" fill="#1a1a1a" />
      </svg>
    </motion.div>
  );
}

function VinylPlayer({ song, size = 220 }: { song: Song; size?: number }) {
  const initials = song.title
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Vinyl size={size * 0.85} cover={song.cover} initials={initials} />
      </div>
      <Tonearm size={size} />
    </div>
  );
}

function generateWaveform(bars: number) {
  return Array.from({ length: bars }, (_, i) => {
    const v = Math.abs(
      Math.sin(i * 0.42) * 0.55 +
        Math.sin(i * 0.13 + 1.1) * 0.3 +
        Math.sin(i * 0.81 + 0.4) * 0.2,
    );
    return 0.18 + Math.min(1, v) * 0.82;
  });
}

function Waveform({
  progress,
  bars = 48,
  height = 22,
  barWidth = 2,
  gap = 2,
  flexible = false,
}: {
  progress: number;
  bars?: number;
  height?: number;
  barWidth?: number;
  gap?: number;
  flexible?: boolean;
}) {
  const heights = useMemo(() => generateWaveform(bars), [bars]);
  const headIndex = Math.floor(progress * bars);

  return (
    <div
      className={`flex items-center ${flexible ? "w-full" : ""}`}
      style={{ height, gap }}
      aria-hidden="true"
    >
      {heights.map((h, i) => {
        const isPlayed = i < headIndex;
        const isHead = i === headIndex && progress > 0 && progress < 1;
        return (
          <div
            key={i}
            className={`rounded-full ${flexible ? "flex-1 min-w-0" : ""} ${
              isHead
                ? "bg-primary"
                : isPlayed
                  ? "bg-primary/80"
                  : "bg-default-300/70"
            }`}
            style={{
              width: flexible ? undefined : barWidth,
              height: `${h * 100}%`,
              transform: isHead ? "scaleY(1.15)" : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

function useTrackProgress(durationSec: number) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const secs = ((now - start) / 1000) % durationSec;
      setElapsed(secs);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationSec]);

  return {
    elapsed,
    progress: durationSec > 0 ? elapsed / durationSec : 0,
  };
}

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
}: {
  children: React.ReactNode;
  content: React.ReactNode;
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
        className="inline-flex cursor-pointer"
      >
        {children}
      </div>
      <Popover
        triggerRef={triggerRef as React.RefObject<HTMLElement>}
        isOpen={isOpen}
        onOpenChange={(next) => {
          if (!next) setIsOpen(false);
        }}
        placement="bottom-start"
        showArrow
        radius="lg"
        shadow="md"
      >
        <span hidden />
        <PopoverContent
          onMouseEnter={open}
          onMouseLeave={close}
          className="p-0"
        >
          <div className="px-4 py-3 max-w-sm">{content}</div>
        </PopoverContent>
      </Popover>
    </>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function MusicBanner({ song }: { song: Song }) {
  const { elapsed, progress } = useTrackProgress(song.duration);

  return (
    <HoverPopover
      content={
        <div className="flex flex-col gap-3 text-xs w-[280px]">
          <div className="flex items-center justify-center py-2">
            <VinylPlayer song={song} size={220} />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-[10px] text-default-500">
              Now spinning
            </p>
            <p className="text-sm leading-snug truncate">
              {song.title}
            </p>
            <p className="text-default-600 truncate">{song.artist}</p>
          </div>

          <div className="flex flex-col gap-1">
            <Waveform
              progress={progress}
              bars={44}
              height={28}
              gap={2}
              flexible
            />
            <div className="flex justify-between text-[10px] text-default-500 tabular-nums">
              <span>{formatTime(elapsed)}</span>
              <span>{formatTime(song.duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-default-500 truncate">
              {song.album} · {song.year}
            </p>
            <Link
              href={song.url}
              isExternal
              size="sm"
              underline="always"
              className="text-xs shrink-0"
            >
              Spotify
            </Link>
          </div>
        </div>
      }
    >
      <Chip
        size="md"
        radius="sm"
        variant="flat"
        color="default"
        startContent={<SpinningCD size={16} />}
        endContent={
          <Waveform
            progress={progress}
            bars={22}
            height={14}
            barWidth={1.5}
            gap={1}
          />
        }
        classNames={{
          base: "px-3",
          content: "max-w-[120px] truncate",
        }}
      >
        {song.title}
      </Chip>
    </HoverPopover>
  );
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
    <div className="flex flex-wrap items-center gap-2">
      <HoverPopover
        content={
          <div className="flex flex-col gap-3 text-xs w-[260px]">
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
              <p className="text-default-500">
                Famous for jellybean row houses, Signal Hill, and the freshest
                Atlantic air you&apos;ll ever breathe.
              </p>
            </div>
            <p className="text-default-500">Since 2021</p>
          </div>
        }
      >
        <Chip
          size="md"
          radius="sm"
          variant="flat"
          color="default"
          startContent={<PinIcon />}
          classNames={{
            base: "px-3",
          }}
        >
          St. John&apos;s, NL
        </Chip>
      </HoverPopover>

      <HoverPopover
        content={
          <div className="flex flex-col gap-3 text-xs w-[240px]">
            <div className="flex items-center justify-center py-1">
              <AnalogClock size={200} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm">Newfoundland Time</p>
                <span className="text-xs text-default-500">
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
        <Chip
          size="md"
          radius="sm"
          variant="flat"
          color="default"
          startContent={<ClockIcon />}
          classNames={{
            base: "px-3",
            content: "tabular-nums",
          }}
        >
          {time || "--:--"} NT
        </Chip>
      </HoverPopover>

      <MusicBanner song={song} />
    </div>
  );
}
