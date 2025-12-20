import Container from './Container'
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
        <footer className="pb-10">
            <Container>
                <div className="mt-16 rounded-3xl border border-zinc-800/70 bg-zinc-950/45 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="flex flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between text-xs text-zinc-400">
                        <span>© {new Date().getFullYear()} Cristian Lona</span>

                        <SocialLinks className="md:justify-end" />

                        <span>Built with React & Tailwind</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
