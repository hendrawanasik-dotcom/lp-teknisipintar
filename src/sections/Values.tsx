import { GraduationCap, Settings, ShieldCheck, Users } from 'lucide-react'
import Reveal from './Reveal'

const VALUES = [
  { icon: GraduationCap, title: 'Kompeten', desc: 'Terus belajar dan meningkatkan kemampuan.' },
  { icon: ShieldCheck, title: 'Jujur', desc: 'Menjelaskan kerusakan dan biaya secara transparan.' },
  { icon: Settings, title: 'Profesional', desc: 'Bekerja sesuai prosedur dan bertanggung jawab.' },
  { icon: Users, title: 'Kolaboratif', desc: 'Saling berbagi ilmu dan berkembang bersama.' },
]

export default function Values() {
  return (
    <section id="nilai-kami" className="relative overflow-hidden bg-[#f3f9ff] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-[320px] w-[320px] rounded-full bg-[#03daad]/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-bold tracking-[0.28em] text-[#275cd5]">NILAI KAMI</p>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#0a1140] sm:text-[40px]">
            Nilai yang Kami Jaga Bersama
          </h2>
          <span className="mx-auto mt-5 block h-[3.5px] w-16 rounded-full bg-gradient-to-r from-[#0b46c8] to-[#03daad]" aria-hidden />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={0.1 + i * 0.1}>
              <div className="card-value group flex h-full flex-col items-center rounded-[26px] bg-white px-7 py-10 text-center shadow-[0_18px_44px_-24px_rgba(10,17,64,0.18)] ring-1 ring-[#0b46c8]/6">
                <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#eaf4ff] ring-8 ring-[#eaf4ff]/40 transition-colors duration-300 group-hover:bg-[#0b46c8]/12">
                  <v.icon className="h-9 w-9 text-[#0b46c8]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-[17.5px] font-extrabold text-[#0a1140]">{v.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#4a5270]">{v.desc}</p>
                <span className="mt-5 block h-[3px] w-11 rounded-full bg-gradient-to-r from-[#0b46c8] to-[#03daad] opacity-80" aria-hidden />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
