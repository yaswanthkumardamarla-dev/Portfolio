import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-16">
      <h2 className="mb-4 text-center text-4xl font-bold">
        <span className="sketch-underline">Skills</span>
      </h2>
      <p className="ink-soft mb-8 text-center text-sm">
        <span className="sketch-tag sketch-tag-core mr-2">highlighted</span>
        = my everyday stack
      </p>

      <div className="sketch-border sketch-card px-6 py-2 sm:px-8">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6 ${
              i > 0 ? "skill-row-divider" : ""
            }`}
          >
            <h3 className="text-xl font-bold sm:pt-0.5">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.core?.map((skill) => (
                <span key={skill} className="sketch-tag sketch-tag-core">
                  {skill}
                </span>
              ))}
              {group.skills.map((skill) => (
                <span key={skill} className="sketch-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
