"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  if (!mounted) {
    return (
      <button className={`${className} opacity-0`} aria-hidden="true" disabled>
        <Moon size={20} strokeWidth={1.5} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${className} transition-colors duration-fast ease-analog`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
    </button>
  );
}
