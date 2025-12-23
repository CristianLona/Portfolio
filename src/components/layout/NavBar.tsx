import { useEffect, useState } from "react"
import Container from "./Container"

const linkBase =
    "shrink-0 rounded-full border border-zinc-800/80 bg-zinc-950/40 px-4 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-900/60 hover:text-zinc-100 hover:border-zinc-600"

const cta =
    "shrink-0 inline-flex items-center rounded-full border border-zinc-700/70 bg-zinc-950/55 px-4 py-1.5 text-xs text-zinc-100 transition hover:bg-zinc-900/70 hover:border-zinc-600"

const activeLink =
    "border-zinc-600/90 bg-zinc-900/50 text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState<"#about" | "#projects" | "#contact" | "#hero">("#hero")

    const go = (hash: "#about" | "#projects" | "#contact" | "#hero") => {
        setOpen(false)
        const el = document.querySelector(hash)
        el?.scrollIntoView({ behavior: "smooth", block: "start" })
        setActive(hash)
    }

    // ✅ marca sección activa con IntersectionObserver (se siente pro)
    useEffect(() => {
        const ids: Array<"#hero" | "#about" | "#projects" | "#contact"> = [
            "#hero",
            "#about",
            "#projects",
            "#contact",
        ]

        const elements = ids
            .map((id) => document.querySelector(id))
            .filter(Boolean) as Element[]

        if (!elements.length) return

        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

                if (!visible) return
                setActive(`#${(visible.target as HTMLElement).id}` as any)
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: [0.05, 0.1, 0.2] }
        )

        elements.forEach((el) => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <header className="sticky top-0 z-50 pt-5">
            <Container>
                <div className="relative rounded-3xl border border-zinc-800/70 bg-zinc-950/45 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {/* ✅ glow sutil al hover del navbar */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition hover:opacity-100">
                        <div className="absolute -top-10 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="h-14 flex items-center gap-3 px-3 sm:px-4">
                        {/* Brand */}
                        <button onClick={() => go("#hero")} className="shrink-0 flex items-center gap-3 group">
                            {/* LOGO */}
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-zinc-800/70 bg-zinc-950/40 flex items-center justify-center overflow-hidden transition group-hover:border-zinc-600/80">
                                <img
                                    src="/src/assets/IsotipoN.png"
                                    alt="Logo de Cristian Lona"
                                    className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>

                            <span className="text-sm sm:text-base font-semibold tracking-tight text-zinc-100 transition group-hover:text-zinc-200">
                                Cristian Lona
                            </span>
                        </button>

                        {/* Nav desktop */}
                        <nav className="hidden md:flex items-center gap-6 flex-2 grow justify-end">
                            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                <button
                                    className={`${linkBase} ${active === "#about" ? activeLink : ""}`}
                                    onClick={() => go("#about")}
                                >
                                    About
                                </button>

                                <button
                                    className={`${linkBase} ${active === "#contact" ? activeLink : ""}`}
                                    onClick={() => go("#contact")}
                                >
                                    Contact
                                </button>

                                <button
                                    className={`${cta} ${active === "#projects" ? activeLink : ""}`}
                                    onClick={() => go("#projects")}
                                >
                                    View Projects →
                                </button>
                            </div>
                        </nav>

                    </div>
                </div>
            </Container>
        </header>
    )
}
