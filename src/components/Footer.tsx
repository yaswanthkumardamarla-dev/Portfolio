import { profile, socials } from "@/lib/data";
import { MadeWithLove } from "./MadeWithLove";

export default function Footer() {
  return (
    <footer className="mt-20 pb-10 text-center">
      <div className="mb-4 flex justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sketch text-xl no-underline transition-transform hover:-rotate-3 hover:scale-110"
            style={{ color: "var(--ink)" }}
          >
            {social.label}
          </a>
        ))}
      </div>
      <div className="mt-6 flex justify-center pb-6">
        <MadeWithLove name={profile.name} />
      </div>
    </footer>
  );
}
