import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article
            className="h-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 transition hover:bg-[rgb(var(--surface2))]"
        >
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="mb-5 h-40 w-full rounded-xl border border-[rgb(var(--border))] object-cover"
                    loading="lazy"
                />
            ) : null}

            <h3 className="text-lg font-semibold">
                {project.title}
            </h3>

            <p className="mt-2 text-sm text-[rgb(var(--muted))] leading-relaxed">
                {project.description}
            </p>

            {project.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {project.tags.slice(0, 6).map(t => (
                        <span
                            key={t}
                            className="rounded-full border border-[rgb(var(--border))] bg-transparent px-3 py-1 text-[rgb(var(--muted))]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            ) : null}

            {(project.links?.github || project.links?.demo) && (
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition"
                        >
                            GitHub →
                        </a>
                    )}

                    {project.links?.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition"
                        >
                            Live Demo →
                        </a>
                    )}
                </div>
            )}
        </article>
    )
}
