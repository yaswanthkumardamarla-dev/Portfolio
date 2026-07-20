import { profile, education } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16">
      <h2 className="mb-8 text-center text-4xl font-bold">
        <span className="sketch-underline">About me</span>
      </h2>

      <div className="sketch-border sketch-card space-y-4 p-8">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className="ink-soft font-sketch text-xl">
          📍 Based in {profile.location}
        </p>
      </div>

      {education.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-bold">Education</h3>
          {education.map((entry) => (
            <div
              key={entry.degree}
              className="sketch-border-alt sketch-card mb-4 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-sketch text-2xl">{entry.degree}</span>
                <span className="ink-soft text-sm">{entry.period}</span>
              </div>
              <p className="ink-soft">{entry.school}</p>
              {entry.detail && <p className="mt-1 text-sm">{entry.detail}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
