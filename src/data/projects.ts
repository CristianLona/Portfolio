import MapVideo from '../assets/projects/MapVideo.gif'

export type Project = {
    id: number
    title: string
    slug: string
    description: string
    tags: string[]
    image?: string
    links?: {
        github?: string
        demo?: string
    }
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'BergamotaRoutes---TechConnect',
        description: 'BergamotaRoutes is a powerful platform for route optimization and real-time tracking, designed to make logistics smarter and more efficient.',
        tags: ['TypeScript', 'Tailwind', 'Firebase', 'React'],
        slug: 'bergamota-routes',
        image: MapVideo,
        links: {
            github: 'https://github.com/ICaesarI/BergamotaRoutes---TechConnect',
        },

    },
    {
        id: 2,
        title: 'AIMUS',
        description: 'Intelligent assistant for musculoskeletal health management.',
        tags: ['AI', 'React', 'Python'],
        slug: 'aimus',

    },
    {
        id: 3,
        title: 'Horror Game – Isla de las Muñecas',
        description: 'Psychological horror game developed in Unity.',
        tags: ['Unity', 'Game Dev', 'C#'],
        slug: 'isla-munecas',

    },
]
