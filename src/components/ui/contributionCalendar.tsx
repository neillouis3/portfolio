"use client";

import React, { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const WEEKS = 53;
const BLOCK_MARGIN = 3;
const FONT_SIZE = 12;

function yearRangeLabel() {
  const end = new Date().getFullYear();
  const start = end - 1;
  return `${start}–${String(end).slice(2)}`;
}

/** Fit ~53 weeks into the container without CSS-stretching the SVG (keeps labels sharp). */
function blockSizeForWidth(width: number) {
  const size = Math.floor((width + BLOCK_MARGIN) / WEEKS - BLOCK_MARGIN);
  return Math.max(6, Math.min(size, 16));
}

export default function ContributionCalendar() {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(8);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = (width: number) => {
      if (width <= 0) return;
      setBlockSize(blockSizeForWidth(width));
    };

    update(el.clientWidth);

    const ro = new ResizeObserver((entries) => {
      update(entries[0]?.contentRect.width ?? 0);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const range = yearRangeLabel();
  const isDark = resolvedTheme === "dark";

  const theme = {
    light: ["#f0f0f0", "#d4d4d4", "#a8a8a8", "#737373", "#525252"],
    dark: ["#1a1a1a", "#333333", "#555555", "#8a8a8a", "#d4d4d4"],
  };

  return (
    <div
      ref={containerRef}
      className="contribution-calendar w-full overflow-x-auto no-scrollbar"
    >
      {mounted ? (
        <GitHubCalendar
          username="neillouis3"
          year="last"
          colorScheme={isDark ? "dark" : "light"}
          theme={theme}
          blockSize={blockSize}
          blockMargin={BLOCK_MARGIN}
          blockRadius={0}
          fontSize={FONT_SIZE}
          labels={{
            totalCount: `{{count}} Contributions · ${range}`,
            legend: {
              less: "Less",
              more: "More",
            },
          }}
          style={{
            width: "100%",
            color: "#71717a",
            fontSize: `${FONT_SIZE}px`,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        />
      ) : (
        <div
          className="animate-pulse rounded-sm bg-default-100 w-full"
          style={{ height: 90 }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
