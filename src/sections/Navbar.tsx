import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Nilai Kami', href: '#nilai-kami' },
  { label: 'Bergabung', href: '#bergabung' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar({ onJoin }: { onJoin: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#beranda')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-[0_8px_30px_-16px_rgba(10,17,64,0.25)] backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link text-[14.5px] font-medium text-[#3d4560] ${active === l.href ? 'active' : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281266002335?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20komunitas%20%2A%23TeknisiPintar%2A."
            target="_blank"
            rel="noreferrer"
            className="btn-grad group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-bold text-white sm:inline-flex"
          >
            Bergabung dengan Kami
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#0a1140] transition-colors hover:bg-[#0b46c8]/8 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#0b46c8]/8 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      active === l.href ? 'bg-[#0b46c8]/8 text-[#0b46c8]' : 'text-[#3d4560] hover:bg-[#0b46c8]/5'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://wa.me/6281266002335?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20komunitas%20%2A%23TeknisiPintar%2A."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-grad flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                >
                  Bergabung dengan Kami
                  <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
