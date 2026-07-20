import { profile } from "@/lib/data";
import SketchButton from "@/components/SketchButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-2xl scroll-mt-24 px-5 py-16 text-center"
    >
      <h2 className="mb-6 text-4xl font-bold">
        <span className="sketch-underline">Say hello</span>
      </h2>

      <div className="sketch-border sketch-card p-10">
        <p className="mb-2 text-xl">
          Have a project in mind, a role to fill, or just want to chat?
        </p>
        <p className="ink-soft mb-8">
          My inbox is always open — I&apos;ll get back to you as soon as I can.
        </p>
        <SketchButton href={`mailto:${profile.email}`} primary>
          ✉️ {profile.email}
        </SketchButton>
      </div>
    </section>
  );
}
