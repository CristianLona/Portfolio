import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'

function spanClass(colSpan = 1, rowSpan = 1) {
    const col = colSpan === 3 ? 'lg:col-span-3' : colSpan === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
    const row = rowSpan === 2 ? 'lg:row-span-2' : 'lg:row-span-1'
    return `${col} ${row}`
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px] lg:grid-flow-dense"
        >
            {projects.map(p => {
                const colSpan = p.layout?.colSpan ?? 1
                const rowSpan = p.layout?.rowSpan ?? 1

                return (
                    <div key={p.slug} className={spanClass(colSpan, rowSpan)}>
                        <ProjectCard project={p} />
                    </div>
                )
            })}
        </div>
    )
}
