import { profile } from "@/lib/data";
import SketchButton from "@/components/SketchButton";
import ContactPopup from "@/components/ContactPopup";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center"
    >
      <h1
        className="mb-6 text-4xl font-bold sm:text-5xl"
        style={{ fontFamily: "var(--font-name)" }}
      >
        <span className="sketch-underline">{profile.name}</span>
      </h1>
      <h2 className="font-sketch ink-soft mb-6 text-3xl">{profile.role}</h2>
      <p className="ink-soft mb-10 max-w-xl">{profile.tagline}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <SketchButton href="#projects" primary>
          See my work
        </SketchButton>
        <ContactPopup />
        <SketchButton href={profile.resumeUrl} newTab>
          Resume
        </SketchButton>
      </div>
    </section>
  );
}
