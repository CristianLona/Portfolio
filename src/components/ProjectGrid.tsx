import type { Project } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(420px,1fr))]">
            {projects.map((project, i) => (
                <div
                    key={project.id}
                    className={i === 0 ? "lg:col-span-2" : ""}
                >
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}
