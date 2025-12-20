import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="relative min-h-screen flex flex-col text-zinc-100">
    
            <NavBar />

            <main className="relative z-10 flex-1">
                <Outlet />
            </main>

            <Footer />
            
        </div>
    )
}
