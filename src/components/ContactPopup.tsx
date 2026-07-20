"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GlassCard } from "react-glass-ui";
import { profile, socials } from "@/lib/data";
import SketchButton from "./SketchButton";
import styles from "./ContactPopup.module.css";

const contactDialogId = "contact-popup";

function ContactIcon({ type }: { type: "email" | "linkedin" | "github" }) {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    linkedin: (
      <>
        <path d="M7 9v8" />
        <path d="M7 6.5v.01" />
        <path d="M11 17v-4.5a3.5 3.5 0 0 1 7 0V17" />
        <path d="M11 9v8" />
      </>
    ),
    github: (
      <path d="M15 21v-3.5c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.1-1.76 7.1-7.9A5.5 5.5 0 0 0 19.5 3.2 5.1 5.1 0 0 0 19.36 0S18.18-.38 15 1.46a13.4 13.4 0 0 0-6 0C5.82-.38 4.64 0 4.64 0A5.1 5.1 0 0 0 4.5 3.2 5.5 5.5 0 0 0 3 7c0 6.12 3.5 7.48 7.1 7.9A3.5 3.5 0 0 0 9 17.5V21m0-2.5c-3 .9-3-1.5-4.2-2" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[type]}
    </svg>
  );
}

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const linkedInUrl = socials.find((social) => social.label === "LinkedIn")?.url;
  const githubUrl = socials.find((social) => social.label === "GitHub")?.url;
  const emailHref = `mailto:${profile.email}?subject=Portfolio%20inquiry`;

  useEffect(() => {
    if (!open) return;

    triggerRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <SketchButton
        onClick={() => setOpen(true)}
        ariaHasPopup="dialog"
        ariaExpanded={open}
        ariaControls={contactDialogId}
      >
        Get in touch
      </SketchButton>

      {open &&
        createPortal(
          <div
            className={styles.overlay}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div className={styles.entrance}>
              <GlassCard
                id={`${contactDialogId}-glass`}
                className={styles.glassCard}
                contentClassName={styles.glassContent}
                blur={18}
                distortion={14}
                chromaticAberration={0.3}
                saturation={110}
                brightness={100}
                borderRadius={32}
                borderSize={2}
                borderOpacity={1}
                borderColor="var(--glass-border)"
                backgroundColor="var(--glass-surface)"
                backgroundOpacity={0.72}
                innerLightColor="var(--glass-border)"
                innerLightBlur={24}
                innerLightSpread={2}
                innerLightOpacity={0.42}
                outerLightColor="var(--glass-glow)"
                outerLightBlur={48}
                outerLightSpread={3}
                outerLightOpacity={0.34}
                color="var(--ink)"
              >
                <div
                  id={contactDialogId}
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`${contactDialogId}-title`}
                  aria-describedby={`${contactDialogId}-description`}
                  className={styles.dialog}
                >
                  <div className={styles.ambientGlow} aria-hidden="true" />
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setOpen(false)}
                    aria-label="Close contact dialog"
                  >
                    <span aria-hidden="true">×</span>
                  </button>

                  <div className={styles.status}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    Let&apos;s connect
                  </div>
                  <h2 id={`${contactDialogId}-title`} className={styles.title}>
                    Have something in mind?
                  </h2>
                  <p id={`${contactDialogId}-description`} className={styles.intro}>
                    Whether it&apos;s a role, a project, or a conversation about
                    technology, choose the channel that works best for you.
                  </p>

                  <div className={styles.contactGrid}>
                    <a
                      className={`${styles.contactItem} ${styles.emailItem}`}
                      href={emailHref}
                    >
                      <span className={styles.iconWrap}>
                        <ContactIcon type="email" />
                      </span>
                      <span>
                        <span className={styles.contactLabel}>Email</span>
                        <span
                          className={`${styles.contactValue} ${styles.emailValue}`}
                        >
                          {profile.email}
                        </span>
                      </span>
                    </a>

                    {linkedInUrl && (
                      <a
                        className={styles.contactItem}
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.iconWrap}>
                          <ContactIcon type="linkedin" />
                        </span>
                        <span>
                          <span className={styles.contactLabel}>LinkedIn</span>
                          <span className={styles.contactValue}>Connect with me</span>
                        </span>
                      </a>
                    )}

                    {githubUrl && (
                      <a
                        className={styles.contactItem}
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.iconWrap}>
                          <ContactIcon type="github" />
                        </span>
                        <span>
                          <span className={styles.contactLabel}>GitHub</span>
                          <span className={styles.contactValue}>View my work</span>
                        </span>
                      </a>
                    )}
                  </div>

                  <div className={styles.actions}>
                    <a className={styles.primaryAction} href={emailHref}>
                      Send me an email <span aria-hidden="true">↗</span>
                    </a>
                    {linkedInUrl && (
                      <a
                        className={styles.secondaryAction}
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Message on LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
