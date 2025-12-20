import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Container from './Container'

const linkBase =
    'rounded-full border border-zinc-800/80 bg-zinc-950/40 px-4 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-900/60 hover:text-white'

export default function NavBar() {
    const [open, setOpen] = useState(false)


    const go = (hash: string) => {
        setOpen(false)
        const el = document.querySelector(hash)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <header className="top-0 z-50 pt-5">
            <Container>
                <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/45 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="h-14 flex items-center justify-between gap-3 px-4">
                        {/* Logo */}
                        <button
                            className="font-semibold tracking-tight text-white"
                            onClick={() => go('#top')}
                        >
                            Cristian Lona
                        </button>

                        {/* Botones con Links */}
                        <nav className="hidden md:flex items-center gap-6">

                            <button className={linkBase} onClick={() => go('#about')}>
                                About
                            </button>
                            <button className={linkBase} onClick={() => go('#contact')}>
                                Contact
                            </button>
                            <button className="ml-2 inline-flex items-center rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-white hover:border-zinc-500 transition" onClick={() => go('#projects')}>
                                View Projects
                            </button>
                        </nav>
                    </div>
                </div>
            </Container>
        </header >
    )
}