"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

// The theme lives on <html data-theme>, set before first paint by the
// script in layout.tsx. Reading it as an external store keeps hydration
// consistent: the server renders "dark", the client then reads the real one.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "dark");

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the switch still works.
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="sketch-border cursor-pointer px-3 py-1 text-lg leading-none transition-transform hover:rotate-6 hover:scale-110"
      title="Toggle theme"
    >
      {/* CSS picks the icon from data-theme, so it is right from first paint. */}
      <span className="theme-icon-for-dark" aria-hidden="true">☀️</span>
      <span className="theme-icon-for-light" aria-hidden="true">🌙</span>
    </button>
  );
}
