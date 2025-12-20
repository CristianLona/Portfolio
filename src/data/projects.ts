import MapVideo from '../assets/projects/MapVideo.gif'

export type Project = {
    title: string
    slug: string
    description: string
    tags: string[]
    image?: string
    links?: {
        github?: string
        demo?: string
    }
    layout?: {
        colSpan?: 1 | 2 | 3
        rowSpan?: 1 | 2
    }
}

export const projects: Project[] = [
    {
        title: 'BergamotaRoutes---TechConnect',
        description: 'BergamotaRoutes is a powerful platform for route optimization and real-time tracking, designed to make logistics smarter and more efficient.',
        tags: ['TypeScript', 'Tailwind', 'Firebase', 'React'],
        slug: 'bergamota-routes',
        image: MapVideo,
        links: {
            github: 'https://github.com/ICaesarI/BergamotaRoutes---TechConnect',
        },
        layout: { colSpan: 2, rowSpan: 2 }, // 👈 destacado

    },
    {
        title: 'AIMUS',
        description: 'Intelligent assistant for musculoskeletal health management.',
        tags: ['AI', 'React', 'Python'],
        slug: 'aimus',
        layout: { colSpan: 2, rowSpan: 1 }, // 👈 destacado

    },
    {
        title: 'Horror Game – Isla de las Muñecas',
        description: 'Psychological horror game developed in Unity.',
        tags: ['Unity', 'Game Dev', 'C#'],
        slug: 'isla-munecas',
        layout: { colSpan: 2, rowSpan: 1 }, // 👈 destacado

    },
]
