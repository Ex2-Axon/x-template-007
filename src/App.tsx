import { useState } from 'react'
import { SparklesIcon, CursorArrowRaysIcon, CubeTransparentIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import heroImg from './assets/hero.png'

/* ── Gold Particles Effect ── */
function GoldParticles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 10}s`,
    size: `${Math.random() * 3 + 1}px`,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold-primary/40 blur-[1px] animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: '0 0 10px rgba(201, 168, 76, 0.3)',
          }}
        />
      ))}
    </div>
  )
}

/* ── Animated Badge ── */
function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-gold mb-8 animate-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
      <SparklesIcon className="w-4 h-4 text-gold-accent animate-pulse" />
      <span className="text-[10px] tracking-[0.3em] font-bold text-gold-accent uppercase">{text}</span>
    </div>
  )
}

/* ── Luxury Card ── */
function Card({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: string }) {
  return (
    <div 
      className="group relative p-8 glass-card border-gold rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:gold-glow animate-reveal opacity-0 overflow-hidden"
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-gold-primary/10" />
      <Icon className="w-8 h-8 text-gold-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
      <h3 className="text-xl font-heading font-bold text-luxury-text mb-3 tracking-wide">{title}</h3>
      <p className="text-sm text-luxury-text/60 leading-relaxed font-light">{desc}</p>
      <div className="mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        LEARN MORE <span className="text-lg">→</span>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen selection:bg-gold-primary/30">
      <div className="bg-mesh" />
      <div className="noise" />
      <GoldParticles />

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="font-heading font-black text-2xl tracking-tighter text-gold-primary">AXON.</div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] text-luxury-text/50">
          <a href="#" className="hover:text-gold-primary transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-gold-primary transition-colors">CRAFTSMANSHIP</a>
          <a href="#" className="hover:text-gold-primary transition-colors">BOUTIQUE</a>
        </div>
        <button className="p-2 glass-card rounded-lg border-gold hover:gold-glow transition-all">
          <CursorArrowRaysIcon className="w-5 h-5 text-gold-primary" />
        </button>
      </nav>

      {/* ── Main Content ── */}
      <main className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Badge text="PREMIUM EDITION" />
          
          <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-gold-primary/20 blur-[100px] rounded-full scale-150 animate-pulse pointer-events-none" />
            <div className="relative animate-float">
              <img 
                src={heroImg} 
                alt="Luxury Watch" 
                className="w-48 md:w-64 drop-shadow-[0_0_50px_rgba(201,168,76,0.3)] transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="overflow-hidden mb-6">
            <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter animate-reveal leading-none">
              <span className="text-gold-gradient">PRESTIGE</span>
            </h1>
          </div>
          
          <p className="max-w-xl text-lg md:text-xl text-luxury-text/60 font-light tracking-wide mb-12 animate-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            Crafted with precision. Experience the pinnacle of digital luxury where every pixel is refined for the elite.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-32 animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="px-12 py-5 bg-gold-primary text-luxury-bg font-bold tracking-[0.2em] rounded-full hover:bg-gold-accent hover:gold-glow transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              EXPLORE {count > 0 && `(${count})`}
            </button>
            <button className="px-12 py-5 glass-card border-gold text-gold-primary font-bold tracking-[0.2em] rounded-full hover:bg-gold-primary/10 transition-all duration-300">
              VIEW CATALOG
            </button>
          </div>

          {/* ── Features Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            <Card 
              icon={CubeTransparentIcon}
              title="Modern Tech"
              desc="Built with React 19 and Tailwind 4 for unprecedented performance and style."
              delay="0.8s"
            />
            <Card 
              icon={GlobeAltIcon}
              title="Global Reach"
              desc="Deploy your luxury vision worldwide with optimized edge delivery networks."
              delay="1.0s"
            />
            <Card 
              icon={RocketLaunchIcon}
              title="Fast HMR"
              desc="Instant updates during development, ensuring a smooth creative workflow."
              delay="1.2s"
            />
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-gold/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.4em] text-luxury-text/30 uppercase">
            © 2026 AXON DIGITAL LUXURY — ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-gold-primary/60">
            <a href="#" className="hover:text-gold-accent transition-colors">GITHUB</a>
            <a href="#" className="hover:text-gold-accent transition-colors">DISCORD</a>
            <a href="#" className="hover:text-gold-accent transition-colors">X.COM</a>
          </div>
        </div>
      </footer>

      {/* ── Side Labels ── */}
      <div className="hidden lg:block fixed left-10 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-[8px] font-bold tracking-[0.5em] text-gold-primary/20 uppercase pointer-events-none">
        ESTABLISHED MMXV — SYSTEM ONLINE
      </div>
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] text-[8px] font-bold tracking-[0.5em] text-gold-primary/20 uppercase pointer-events-none">
        VERSION 1.7.0 — DARK LUXURY EDITION
      </div>
    </div>
  )
}

export default App
