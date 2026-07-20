import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./SketchButton.module.css";

interface SketchButtonProps {
  href?: string;
  children: React.ReactNode;
  primary?: boolean;
  newTab?: boolean;
  onClick?: () => void;
  ariaHasPopup?: "dialog";
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export default function SketchButton({
  href,
  children,
  primary,
  newTab,
  onClick,
  ariaHasPopup,
  ariaExpanded,
  ariaControls,
}: SketchButtonProps) {
  const className = cn(styles.btn, primary && styles.primary);
  const external = href && (newTab || href.startsWith("http"));

  if (!href) {
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        aria-haspopup={ariaHasPopup}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
