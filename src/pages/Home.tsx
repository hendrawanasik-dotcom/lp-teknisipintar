import { useCallback, useState } from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Values from '../sections/Values'
import CtaSection from '../sections/CtaSection'
import Footer from '../sections/Footer'
import JoinDialog, { type DialogState } from '../sections/JoinDialog'

export default function Home() {
  const [dialog, setDialog] = useState<DialogState>(null)
  const openJoin = useCallback(() => setDialog({ kind: 'join' }), [])
  const close = useCallback(() => setDialog(null), [])
  const openLegal = useCallback((kind: 'privasi' | 'syarat') => setDialog({ kind }), [])

  return (
    <div className="font-brand min-h-dvh bg-white text-[#0a1140]">
      <Navbar onJoin={openJoin} />
      <main>
        <Hero onJoin={openJoin} />
        <About />
        <Values />
        <CtaSection onJoin={openJoin} />
      </main>
      <Footer onLegal={openLegal} />
      <JoinDialog state={dialog} onClose={close} />
    </div>
  )
}
