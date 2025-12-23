import { SiGithub } from 'react-icons/si'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article
            className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-950/35 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-950/50"
        >

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
            </div>

            {/* contenido */}
            <div className="relative z-10 p-6 flex flex-col gap-4">
                {/* header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                            {project.description}
                        </p>
                    </div>

                    {/* acciones */}
                    <div className="hidden md:flex flex-col gap-2 opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0">
                        {project.links?.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group/github flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-950/60 px-3 py-1.5 text-xs text-zinc-300 transition hover:text-white hover:border-zinc-500 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.6)]"
                            >
                                <SiGithub className="h-3.5 w-3.5 text-zinc-400 group-hover/github:text-white transition" />
                                GitHub
                            </a>


                        )}
                        {project.links?.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-zinc-700 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-950 hover:bg-white transition"
                            >
                                Live →
                            </a>
                        )}
                    </div>
                </div>

                {/* tags */}
                {project.tags?.length ? (
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 6).map((t) => (
                            <span
                                key={t}
                                className=" rounded-full border border-zinc-800/80 bg-zinc-950/30 px-3 py-1 text-[11px] text-zinc-400"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}

                {/* preview */}
                {project.image ? (
                    <div className="relative mt-2 overflow-hidden rounded-2xl border border-zinc-800/70 bg-black/30">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="h-44 w-full object-cover opacity-70 transition group-hover:opacity-95 group-hover:scale-[1.02]"
                        />


                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 to-transparent" />
                    </div>
                ) : null}
            </div>
        </article>
    )
}
