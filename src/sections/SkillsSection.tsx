import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-16">
      <h2 className="mb-8 text-center text-4xl font-bold">
        <span className="sketch-underline">Skills</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`${
              i % 2 === 0 ? "sketch-border" : "sketch-border-alt"
            } sketch-card p-6`}
          >
            <h3 className="mb-3 text-2xl font-bold">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
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
