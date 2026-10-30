import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Logo from './Logo'

const MENU = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Nilai Kami', href: '#nilai-kami' },
  { label: 'Bergabung', href: '#bergabung' },
  { label: 'Kontak', href: '#kontak' },
]

const SOCIALS = [
  { icon: Facebook, label: 'Facebook TeknisiPintar', href: 'https://www.facebook.com' },
  { icon: Instagram, label: 'Instagram TeknisiPintar', href: 'https://www.instagram.com/teknisipintar_ind' },
  { icon: Youtube, label: 'YouTube TeknisiPintar', href: 'https://www.youtube.com' },
  {
    icon: ({ className }: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M16.6 3c.4 2.2 1.8 3.6 4.1 3.9v3c-1.6 0-3-.5-4.1-1.3v5.9c0 3.9-2.7 6.5-6.2 6.5-3.4 0-6.1-2.5-6.1-6s2.6-6 6-6c.3 0 .7 0 1 .1v3.2c-.3-.1-.6-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.7 0 3-1.3 3-3V3h3.3z" />
      </svg>
    ),
    label: 'TikTok TeknisiPintar',
    href: 'https://www.tiktok.com',
  },
]

export default function Footer({ onLegal }: { onLegal: (kind: 'privasi' | 'syarat') => void }) {
  return (
    <footer id="kontak" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-t border-[#0b46c8]/8 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-[#4a5270]">
              Komunitas teknisi AC, kulkas, dan mesin cuci yang berkomitmen meningkatkan kompetensi, profesionalisme,
              dan kualitas pelayanan teknisi Indonesia.
            </p>
            <p className="mt-5 text-[15px] font-extrabold text-[#0a1140]">Teknisi Pintar, Pelanggan Percaya.</p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f5fc] text-[#0a1140] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b46c8] hover:text-white hover:shadow-lg hover:shadow-[#0b46c8]/30"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <nav aria-label="Menu footer">
            <h3 className="text-[15.5px] font-extrabold text-[#0a1140]">Menu</h3>
            <ul className="mt-5 space-y-3.5">
              {MENU.map((m) => (
                <li key={m.href}>
                  <a
                    href={m.href}
                    className="text-[14px] font-medium text-[#4a5270] transition-colors hover:text-[#0b46c8]"
                  >
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="text-[15.5px] font-extrabold text-[#0a1140]">Hubungi Kami</h3>
            <ul className="mt-5 space-y-4 text-[14px] font-medium text-[#4a5270]">
              <li>
                <a href="mailto:info@teknisipintar.id" className="flex items-center gap-3 transition-colors hover:text-[#0b46c8]">
                  <Mail className="h-[18px] w-[18px] shrink-0 text-[#0b46c8]" />
                  info@teknisipintar.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281266002335?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20komunitas%20%23TeknisiPintar." className="flex items-center gap-3 transition-colors hover:text-[#0b46c8]">
                  <Phone className="h-[18px] w-[18px] shrink-0 text-[#0b46c8]" />
                  0812 3456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-[#0b46c8]" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#0b46c8]/8 py-6 text-[13px] text-[#7a819c] sm:flex-row">
          <p>© 2026 #TeknisiPintar. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-3">
            <button onClick={() => onLegal('privasi')} className="font-medium transition-colors hover:text-[#0b46c8]">
              Kebijakan Privasi
            </button>
            <span className="text-[#0b46c8]/30">|</span>
            <button onClick={() => onLegal('syarat')} className="font-medium transition-colors hover:text-[#0b46c8]">
              Syarat &amp; Ketentuan
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
