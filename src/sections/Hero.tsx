import { motion, useReducedMotion } from 'framer-motion'
import { AirVent, ArrowRight, Refrigerator, WashingMachine } from 'lucide-react'
import heroImg from '../assets/hero-technician.jpg'

const SERVICES = [
  { icon: AirVent, label: 'Teknisi AC' },
  { icon: Refrigerator, label: 'Teknisi Kulkas' },
  { icon: WashingMachine, label: 'Teknisi Mesin Cuci' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero({ onJoin }: { onJoin: () => void }) {
  const reduce = useReducedMotion()

  return (
    <section id="beranda" className="relative overflow-hidden bg-[#f3f9ff] pt-[72px]">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0b46c8]/10 blur-3xl animate-blob" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#03daad]/12 blur-3xl animate-blob" style={{ animationDelay: '-6s' }} aria-hidden />
      {/* dotted pattern */}
      <svg className="pointer-events-none absolute right-[46%] top-24 hidden h-28 w-28 text-[#0b46c8]/25 lg:block" aria-hidden>
        <defs>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
        {/* Left copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.p variants={item} className="text-[12.5px] font-bold tracking-[0.28em] text-[#275cd5]">
            KOMUNITAS TEKNISI INDONESIA
          </motion.p>

          <motion.h1 variants={item} className="mt-5 text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0a1140] sm:text-[52px] xl:text-[62px]">
            Bersama Menjadi
            <br />
            Teknisi yang
            <br />
            <span className="text-grad">Lebih Profesional.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-[15.5px] leading-relaxed text-[#4a5270]">
            Komunitas teknisi AC, kulkas, dan mesin cuci yang berkomitmen meningkatkan keterampilan, kejujuran, dan
            kualitas pelayanan.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <a
              href="https://wa.me/6281266002335?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20komunitas%20%2A%23TeknisiPintar%2A."
              target="_blank"
              rel="noreferrer"
              className="btn-grad group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-bold text-white"
            >
              Bergabung dengan Kami
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          {/* service badges */}
          <motion.div
            variants={item}
            className="mt-14 grid max-w-[360px] grid-cols-3 items-end gap-x-2 gap-y-5 sm:max-w-none sm:flex sm:flex-wrap sm:items-end sm:gap-x-14 sm:gap-y-6"
          >
            {SERVICES.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <div
                  className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-[0_14px_30px_-12px_rgba(11,70,200,0.28)] ring-1 ring-[#0b46c8]/8 animate-float-soft sm:h-[68px] sm:w-[68px]"
                  style={{ animationDelay: `${i * -1.4}s` }}
                >
                  <s.icon className="h-6 w-6 text-[#0b46c8] sm:h-7 sm:w-7" strokeWidth={1.7} />
                </div>
                <span className="text-center text-[11px] font-bold leading-tight text-[#0a1140] sm:text-[13px]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* soft glow behind photo */}
          <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-[#0b46c8]/14 to-[#03daad]/14 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[36px] shadow-[0_40px_80px_-30px_rgba(10,17,64,0.4)] ring-1 ring-white/60">
            <motion.img
              src={heroImg}
              alt="Teknisi #TeknisiPintar sedang memperbaiki AC"
              className="h-full w-full object-cover"
              initial={reduce ? undefined : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* handwritten note */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 10 }}
              animate={{ opacity: 1, rotate: -4, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
              className="absolute right-5 top-[42%] max-w-[190px] text-right sm:right-8"
            >
              <p className="font-hand text-[22px] font-bold leading-[1.15] text-[#0a1140] drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)] sm:text-[26px]">
                Teknisi Profesional untuk Indonesia yang Lebih Baik
              </p>
              <svg viewBox="0 0 160 14" className="ml-auto mt-1 h-3.5 w-[130px] sm:w-[160px]" aria-hidden>
                <path
                  d="M4 9 C 40 3, 80 12, 156 6"
                  fill="none"
                  stroke="#03daad"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ strokeDasharray: 320, animation: 'dash-underline 1.1s ease-out 1.5s both' }}
                />
              </svg>
            </motion.div>
          </div>

          {/* floating accent shapes */}
          <div className="absolute -left-5 top-10 h-10 w-10 rounded-xl bg-[#03daad] shadow-lg shadow-[#03daad]/40 animate-float" aria-hidden />
          <div className="absolute -bottom-4 right-14 h-7 w-7 rounded-full bg-[#0b46c8] shadow-lg shadow-[#0b46c8]/40 animate-float-soft" aria-hidden />
        </motion.div>
      </div>
    </section>
  )
}
