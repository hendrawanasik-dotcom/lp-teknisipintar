import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import teamImg from '../assets/cta-team.jpg'

export default function CtaSection({ onJoin }: { onJoin: () => void }) {
  const reduce = useReducedMotion()
  return (
    <section id="bergabung" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* teal geometric shapes, like the mockup */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-16 top-0 h-40 w-[420px] -skew-x-[28deg] rounded-2xl bg-gradient-to-r from-[#03daad] to-[#00b8d9] lg:h-48 lg:w-[560px]"
        aria-hidden
      />
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -left-24 bottom-10 h-32 w-[380px] -skew-x-[28deg] rounded-2xl bg-[#eaf4ff]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <p className="text-[12.5px] font-bold tracking-[0.28em] text-[#275cd5]">BERGABUNG DENGAN KAMI</p>
          <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#0a1140] sm:text-[46px] xl:text-[54px]">
            Teknisi Pintar,
            <br />
            <span className="text-grad-navy">Pelanggan Percaya.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#4a5270]">
            Jadilah bagian dari komunitas yang ingin membawa perubahan positif bagi profesi teknisi Indonesia.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#4a5270]">
            Bersama <span className="font-bold text-[#0a1140]">#TeknisiPintar</span>, mari tingkatkan kemampuan, bangun
            kepercayaan, dan berikan pelayanan terbaik kepada pelanggan.
          </p>
          <a
            href="https://wa.me/6281266002335?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20komunitas%20%2A%23TeknisiPintar%2A."
            target="_blank"
            rel="noreferrer"
            className="btn-grad group mt-9 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-bold text-white"
          >
            Bergabung dengan #TeknisiPintar
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 -skew-x-6 rounded-[36px] bg-gradient-to-br from-[#03daad]/18 to-[#0b46c8]/10 blur-md" aria-hidden />
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_36px_70px_-28px_rgba(10,17,64,0.4)]" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%)' }}>
              <img
                src={teamImg}
                alt="Tim teknisi #TeknisiPintar"
                className="aspect-[5/4] w-full object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
