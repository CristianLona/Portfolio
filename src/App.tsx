import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './Home'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col text-zinc-100">
      {/* BACKGROUND GLOBAL */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-[#07080a]" />

        {/* gradient lateral izquierdo */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.10),rgba(0,0,0,0)_70%)]" />

        {/* gradient lateral derecho */}
        <div className="absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.10),rgba(0,0,0,0)_70%)]" />


        {/* WATERMARK (encima de glows) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <span className="select-none font-black tracking-tight text-[12rem] md:text-[22rem] text-sky-200/10
 leading-none flex flex-col items-center">
            <span>C</span>
            <span>O</span>
            <span>D</span>
            <span>E</span>
          </span>
        </div>

        {/* vignette (encima de todo) */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_60%,rgba(0,0,0,0.70)_100%)]" />
      </div>


      <NavBar />
      <main className="relative z-10 flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
