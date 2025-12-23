import { Github, Linkedin, Mail } from 'lucide-react'

type Props = {
    className?: string
    size?: number
    show?: {
        github?: boolean
        linkedin?: boolean
        email?: boolean
    }
}


export default function SocialLinks({
    className = '',
    size = 18,
    show = { github: true, linkedin: true, email: true },
}: Props) {
    const pill =
        'rounded-full border border-zinc-700/60 bg-zinc-950/40 p-2 backdrop-blur transition hover:bg-zinc-900/60 hover:text-zinc-100 text-zinc-400 hover:border-zinc-500'

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {show.github && (
                <a
                    href="https://github.com/CristianLona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pill}
                    aria-label="GitHub"
                >
                    <Github size={size} />
                </a>
            )}

            {show.linkedin && (
                <a
                    href="https://www.linkedin.com/in/cristian-josue-lona-avalos-3411b2218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pill}
                    aria-label="LinkedIn"
                >
                    <Linkedin size={size} />
                </a>
            )}

            {show.email && (
                <a
                    href="mailto:cristian.lona.avalos@gmail.com"
                    className={pill}
                    aria-label="Email"
                >
                    <Mail size={size} />
                </a>
            )}
        </div>
    )
}
