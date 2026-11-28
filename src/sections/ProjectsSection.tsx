import { projects } from "@/lib/data";
import SketchButton from "@/components/SketchButton";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16"
    >
      <h2 className="mb-8 text-center text-4xl font-bold">
        <span className="sketch-underline">Projects</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`${
              i % 2 === 0 ? "sketch-border" : "sketch-border-alt"
            } sketch-card flex flex-col p-6 ${
              project.featured ? "md:col-span-2 md:p-8" : ""
            }`}
          >
            {project.featured && (
              <p className="ink-soft font-sketch mb-2 text-sm tracking-widest uppercase">
                ★ Featured
              </p>
            )}
            <h3
              className={`mb-1 font-bold ${
                project.featured ? "text-3xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            {project.highlight && (
              <p className="font-sketch mb-3 text-lg" style={{ color: "var(--accent)" }}>
                {project.highlight}
              </p>
            )}
            <p
              className={`ink-soft mb-5 flex-1 ${
                project.featured ? "max-w-3xl" : ""
              }`}
            >
              {project.description}
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="sketch-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <SketchButton href={project.liveUrl} primary newTab>
                  Live ↗
                </SketchButton>
              )}
              {project.repoUrl && (
                <SketchButton href={project.repoUrl} newTab>
                  Code ↗
                </SketchButton>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
