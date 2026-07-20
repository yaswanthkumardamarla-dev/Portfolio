import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16"
    >
      <h2 className="mb-8 text-center text-4xl font-bold">
        <span className="sketch-underline">Experience</span>
      </h2>

      <div className="space-y-8">
        {experiences.map((job, i) => (
          <div
            key={`${job.company}-${job.period}`}
            className={`${
              i % 2 === 0 ? "sketch-border" : "sketch-border-alt"
            } sketch-card p-6`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-bold">{job.role}</h3>
              <span className="ink-soft font-sketch text-lg">{job.period}</span>
            </div>
            <p className="font-sketch mb-3 text-xl" style={{ color: "var(--accent)" }}>
              {job.company} · <span className="ink-soft">{job.location}</span>
            </p>
            <ul className="ml-5 list-disc space-y-1">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
