import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article
            className="h-full rounded-2xl border border-zinc-800/70 bg-zinc-950/45  backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] p-6 hover:bg-zinc-900/60 transition flex flex-col"
        >
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="mb-5 h-40 w-full rounded-xl border border-zinc-600/70 object-cover"
                    loading="lazy"
                />
            ) : null}

            <h3 className="text-lg font-semibold text-zinc-100">
                {project.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {project.description}
            </p>

            {project.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {project.tags.slice(0, 6).map(t => (
                        <span
                            key={t}
                            className="rounded-full border border-zinc-600/60 bg-transparent px-3 py-1 text-zinc-400"
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
                            className="text-zinc-400 hover:text-zinc-100 transition"
                        >
                            GitHub →
                        </a>
                    )}

                    {project.links?.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-400 transition hover:text-zinc-100"
                        >
                            Live Demo →
                        </a>
                    )}
                </div>
            )}
        </article>
    )
}
