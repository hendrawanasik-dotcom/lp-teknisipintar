import { Eye, Target } from 'lucide-react'
import Reveal from './Reveal'
import aboutImg from '../assets/about-technician.jpg'

const MISI = [
  'Meningkatkan keterampilan dan pengetahuan teknisi.',
  'Mendorong pelayanan yang jujur dan transparan.',
  'Membangun standar kerja yang profesional.',
  'Menumbuhkan budaya belajar dan berbagi pengalaman.',
  'Meningkatkan kepercayaan pelanggan terhadap profesi teknisi.',
]

export default function About() {
  return (
    <section id="tentang-kami" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.85fr_1fr] lg:gap-10">
        {/* Left copy */}
        <Reveal>
          <p className="text-[12.5px] font-bold tracking-[0.28em] text-[#275cd5]">TENTANG KAMI</p>
          <h2 className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#0a1140] sm:text-[42px]">
            Mengenal
            <br />
            <span className="text-grad-navy">#TeknisiPintar</span>
          </h2>
          <p className="mt-7 text-[15px] leading-relaxed text-[#4a5270]">
            <span className="font-bold text-[#0a1140]">#TeknisiPintar</span> adalah komunitas yang mewadahi teknisi AC,
            kulkas, dan mesin cuci untuk belajar, berbagi pengalaman, dan berkembang bersama.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-[#4a5270]">
            Kami ingin mendorong teknisi agar lebih kompeten, jujur, dan profesional dalam memberikan pelayanan kepada
            pelanggan.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-[#4a5270]">
            Kami percaya bahwa teknisi yang berkualitas tidak hanya mampu memperbaiki, tetapi juga mampu memberikan
            pelayanan yang baik dan dapat dipercaya.
          </p>
        </Reveal>

        {/* Center photo */}
        <Reveal delay={0.15}>
          <div className="group relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#0b46c8]/12 to-[#03daad]/12 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="relative overflow-hidden rounded-[26px] shadow-[0_30px_60px_-24px_rgba(10,17,64,0.35)]">
              <img
                src={aboutImg}
                alt="Teknisi #TeknisiPintar sedang memperbaiki kulkas"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* Right visi misi */}
        <div className="space-y-10 lg:pl-2">
          <Reveal delay={0.25}>
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ff]">
                <Eye className="h-6 w-6 text-[#0b46c8]" strokeWidth={1.9} />
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1140]">Visi Kami</h3>
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#4a5270]">
              Mewujudkan teknisi Indonesia yang kompeten, profesional, jujur, dan dipercaya masyarakat.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="flex items-center gap-3.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ff]">
                <Target className="h-6 w-6 text-[#0b46c8]" strokeWidth={1.9} />
              </span>
              <h3 className="text-xl font-extrabold text-[#0a1140]">Misi Kami</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {MISI.map((m) => (
                <li key={m} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#4a5270]">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#0b46c8] to-[#03daad]" aria-hidden />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
