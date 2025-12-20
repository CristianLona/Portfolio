import Container from './components/layout/Container'
import SocialLinks from './components/layout/SocialLinks'
import ProjectGrid from './components/ProjectGrid'
import { projects } from './data/projects'


export default function Home() {
  return (
    
    <div className="min-h-screen text-zinc-100">
      <Container>

        {/* HERO */}
        <section className="py-24">
          <p className="text-sm text-zinc-400">
            Portfolio
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-zinc-100">
            Cristian Lona
          </h1>

          <SocialLinks className="mt-6" />

          <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            Software Developer focused on building clean, meaningful products
            with clarity, performance and real-world impact.
          </p>

          {/* Separador */}
          <div className="mt-10 h-px w-24 bg-zinc-700/40" />
        </section>

        {/* PROJECTS */}
        <section className="pb-24">
          <h2 className="text-3xl font-semibold">
            Projects
          </h2>

          <p className="mt-3 text-[rgb(var(--muted))]">
            A selection of things I’ve built.
          </p>

          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </section>

        {/* ABOUT + CONTACT */}
        <section className="pb-32 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              About
            </h2>

            <p className="mt-6 text-[rgb(var(--muted))] leading-relaxed">
              I’m a developer focused on building clean, reliable applications.
              I enjoy minimal interfaces backed by solid engineering.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Contact
            </h2>

            <div className="mt-6 flex flex-col gap-3 text-[rgb(var(--muted))]">
              <a className="hover:text-[rgb(var(--accent))] transition" href="#">
                GitHub
              </a>
              <a className="hover:text-[rgb(var(--accent))] transition" href="#">
                LinkedIn
              </a>
              <a
                className="hover:text-[rgb(var(--accent))] transition"
                href="mailto:tucorreo@correo.com"
              >
                Email
              </a>
            </div>
          </div>
        </section>

      </Container>
    </div>
  )
}
