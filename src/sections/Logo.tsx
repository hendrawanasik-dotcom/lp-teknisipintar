import logoTeknisiPintar from '../assets/logo-teknisipintar.png'

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#beranda" className="flex items-center gap-2.5 shrink-0" aria-label="TeknisiPintar - Beranda">
      <img
        src={logoTeknisiPintar}
        alt="TeknisiPintar"
        className={compact ? 'h-9 w-auto' : 'h-11 w-auto sm:h-12'}
      />
      {!compact && (
        <span className="hidden sm:block text-[9px] font-bold leading-[1.15] tracking-[0.14em] text-[#0a1140] border-l-2 border-[#0b46c8]/30 pl-2.5">
          KOMUNITAS
          <br />
          TEKNISI INDONESIA
        </span>
      )}
    </a>
  )
}
