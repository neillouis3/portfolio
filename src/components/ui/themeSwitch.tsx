"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import { VisuallyHidden, useSwitch } from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

const ThemeSwitch: React.FC<{ isSelected: boolean }> = (props) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const { setTheme } = useTheme();

  const handleChange = () => {
    setTheme(isSelected ? "light" : "dark");
  };

  return (
    <div className="text-black">
      <Component {...getBaseProps()} onClick={handleChange}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? (
            <HugeiconsIcon
              icon={Moon02Icon}
              size={20}
              strokeWidth={1.5}
              className="text-foreground"
            />
          ) : (
            <HugeiconsIcon
              icon={Sun03Icon}
              size={20}
              strokeWidth={1.5}
              className="text-black"
            />
          )}
        </div>
      </Component>
    </div>
  );
};

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-black">
      <ThemeSwitch isSelected={theme === "dark"} />
    </div>
  );
}
