import Container from "./components/layout/Container"
import SocialLinks from "./components/layout/SocialLinks"
import ProjectGrid from "./components/ProjectGrid"
import { projects } from "./data/projects"

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiJavascript,
} from "react-icons/si"

const STACK = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
] as const

const LINKS = {
  github: "https://github.com/CristianLona",
  linkedin: "https://www.linkedin.com/in/cristian-josue-lona-avalos-3411b2218/",
  email: "mailto:cristian.lona.avalos@gmail.com",
} as const

const UI = {
  heroCta:
    "rounded-full border border-zinc-700/70 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900/60",
  heroSecondary:
    "rounded-full border border-zinc-800/70 px-4 py-2 text-sm text-zinc-300 transition hover:text-white hover:border-zinc-600",
} as const

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Container>
        <Hero />
        <Projects />
        <AboutContact />
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <div className="grid md:grid-cols-[3.1fr_1.9fr] md:items-center mb-20">
      <section id="hero" className="py-20 pb-1 h-full">
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
          Computer Engineer & Software Developer
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-zinc-100">
          Cristian Lona
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Software Developer focused on building clean, reliable products. I
          enjoy minimal interfaces backed by solid engineering — from front-end
          UI to practical systems that solve real problems. Open to freelance projects and collaborations.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className={UI.heroCta}>
            View Projects →
          </a>

          <a href={LINKS.email} className={UI.heroSecondary}>
            Contact
          </a>

          <span className="hidden sm:inline text-zinc-700/60">•</span>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">Currently:</span>
            <span className="text-sm text-zinc-300">
              React • TypeScript • Tailwind
            </span>
          </div>
        </div>

        <SocialLinks className="mt-6" show={{ github: true, linkedin: true }} />

        {/* Separador */}
        <div className="mt-6 h-px w-24 bg-zinc-700/40" />
      </section>

      <section id="logo" className="h-full flex justify-center items-center">
        <div className="h-48 w-48 rounded-full border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center">
          {/* Nota: si estás en Vite y esto falla en build, cámbialo a import (te lo paso si lo ocupas) */}
          <img src="/src/assets/logoB.png" alt="Logo de Cristian Lona" />
        </div>
      </section>
    </div>
  )
}

function Projects() {
  console.log("Projects section rendered")

  return (
    <section id="projects">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
        Projects
      </h2>

      <p className="mt-3 text-zinc-400">A selection of things I’ve built.</p>

      <div className="mt-12">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}

function AboutContact() {
  return (
    <section className="flex flex-col-2 pt-15">
      <div className="flex ">
        <About />
        <Contact />
      </div>
    </section>
  )
}

function About() {
  return (
    <div className="p-8">
      <h2
        id="about"
        className="text-3xl font-semibold tracking-tight text-zinc-100"
      >
        About
      </h2>

      <p className="mt-5 max-w-2xl leading-relaxed text-zinc-400">
        I’m a Computer Engineer & Software Developer focused on building clean,
        reliable products. I enjoy minimal interfaces backed by solid
        engineering—shipping UI that feels simple, while keeping the codebase
        maintainable and scalable.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {STACK.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="group flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <Icon className="h-4 w-4 text-zinc-400 transition group-hover:scale-110 group-hover:text-current" />
            {name}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className={UI.heroCta}>
          View Projects →
        </a>

        <a href={LINKS.email} className={UI.heroSecondary}>
          Email →
        </a>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div id="contact" className="p-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
        Contact
      </h2>

      <p className="mt-5 text-sm leading-relaxed text-zinc-400">
        If you want to collaborate or talk about a project, send me a message.
      </p>

      <div className="mt-6 space-y-3">
        <ContactRow href={LINKS.github} label="GitHub" external />
        <ContactRow href={LINKS.linkedin} label="LinkedIn" external />
        <ContactRow href={LINKS.email} label="Email" />
      </div>

      <div className="mt-8 border-t border-zinc-800/60 pt-6">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Location
        </p>
        <p className="mt-2 text-sm text-zinc-300">Guadalajara, MX</p>
      </div>
    </div>
  )
}

function ContactRow({
  href,
  label,
  external = false,
}: {
  href: string
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900/40"
    >
      <span>{label}</span>
      <span className="text-zinc-500 transition group-hover:text-zinc-200">
        →
      </span>
    </a>
  )
}
