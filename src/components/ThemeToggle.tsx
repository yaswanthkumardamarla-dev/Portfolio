"use client";

import { useState } from "react";

function getInitialTheme(): "dark" | "light" {
  if (
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "light"
  ) {
    return "light";
  }
  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="sketch-border cursor-pointer px-3 py-1 text-lg leading-none transition-transform hover:rotate-6 hover:scale-110"
      title="Toggle theme"
      suppressHydrationWarning
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
