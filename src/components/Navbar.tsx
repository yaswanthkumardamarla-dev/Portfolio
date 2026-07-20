"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="no-underline"
          style={{ color: "var(--ink)" }}
        >
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sketch text-xl no-underline transition-transform hover:-rotate-2 hover:scale-110"
              style={{ color: "var(--ink)" }}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="sketch-border-alt cursor-pointer px-3 py-1 font-sketch text-xl"
            style={{ color: "var(--ink)" }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-sketch text-2xl no-underline"
              style={{ color: "var(--ink)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
