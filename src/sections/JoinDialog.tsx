import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AirVent, CheckCircle2, Refrigerator, WashingMachine, X } from 'lucide-react'

const KEAHLIAN = [
  { id: 'ac', label: 'Teknisi AC', icon: AirVent },
  { id: 'kulkas', label: 'Teknisi Kulkas', icon: Refrigerator },
  { id: 'mesin-cuci', label: 'Teknisi Mesin Cuci', icon: WashingMachine },
]

const LEGAL = {
  privasi: {
    title: 'Kebijakan Privasi',
    body: [
      '#TeknisiPintar menghormati privasi setiap anggota komunitas. Data yang Anda kirimkan melalui formulir pendaftaran (nama, nomor WhatsApp, dan bidang keahlian) hanya digunakan untuk keperluan verifikasi dan komunikasi internal komunitas.',
      'Kami tidak menjual, membagikan, atau mengalihkan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda. Anda dapat meminta penghapusan data kapan saja dengan menghubungi info@teknisipintar.id.',
    ],
  },
  syarat: {
    title: 'Syarat & Ketentuan',
    body: [
      'Dengan bergabung ke komunitas #TeknisiPintar, Anda setuju untuk menjunjung nilai Kompeten, Jujur, Profesional, dan Kolaboratif dalam setiap pelayanan kepada pelanggan.',
      'Anggota wajib menjaga nama baik komunitas, mengikuti standar kerja yang profesional, serta bersikap saling menghormati dan berbagi ilmu dengan sesama teknisi.',
    ],
  },
}

export type DialogState = { kind: 'join' } | { kind: 'privasi' | 'syarat' } | null

export default function JoinDialog({
  state,
  onClose,
}: {
  state: DialogState
  onClose: () => void
}) {
  const [nama, setNama] = useState('')
  const [wa, setWa] = useState('')
  const [keahlian, setKeahlian] = useState<string | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const firstField = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state?.kind === 'join') {
      setDone(false)
      setErrors([])
      setTimeout(() => firstField.current?.focus(), 250)
    }
  }, [state])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (state) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [state, onClose])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: string[] = []
    if (nama.trim().length < 3) errs.push('nama')
    if (!/^(\+?62|0)8\d{7,11}$/.test(wa.replace(/[\s-]/g, ''))) errs.push('wa')
    if (!keahlian) errs.push('keahlian')
    setErrors(errs)
    if (errs.length === 0) setDone(true)
  }

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#060b30]/55 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={state.kind === 'join' ? 'Formulir bergabung' : LEGAL[state.kind].title}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-md overflow-y-auto rounded-[26px] bg-white p-7 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#4a5270] transition-colors hover:bg-[#0b46c8]/8 hover:text-[#0a1140]"
            >
              <X className="h-5 w-5" />
            </button>

            {state.kind !== 'join' ? (
              <>
                <h3 className="text-2xl font-extrabold text-[#0a1140]">{LEGAL[state.kind].title}</h3>
                <span className="mt-3 block h-[3px] w-12 rounded-full bg-gradient-to-r from-[#0b46c8] to-[#03daad]" />
                {LEGAL[state.kind].body.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-5 text-[14.5px] leading-relaxed text-[#4a5270]">
                    {p}
                  </p>
                ))}
              </>
            ) : done ? (
              <div className="py-6 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <CheckCircle2 className="mx-auto h-16 w-16 text-[#03daad]" strokeWidth={1.6} />
                </motion.div>
                <h3 className="mt-5 text-2xl font-extrabold text-[#0a1140]">Pendaftaran Terkirim!</h3>
                <p className="mx-auto mt-3 max-w-xs text-[14.5px] leading-relaxed text-[#4a5270]">
                  Terima kasih, <span className="font-bold text-[#0a1140]">{nama}</span>. Tim kami akan menghubungi
                  Anda melalui WhatsApp untuk proses verifikasi.
                </p>
                <button
                  onClick={onClose}
                  className="btn-grad mt-7 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold text-white"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <p className="text-[11.5px] font-bold tracking-[0.24em] text-[#275cd5]">BERGABUNG DENGAN KAMI</p>
                <h3 className="mt-2 text-2xl font-extrabold text-[#0a1140]">Formulir Pendaftaran</h3>

                <label className="mt-6 block">
                  <span className="text-[13.5px] font-bold text-[#0a1140]">Nama Lengkap</span>
                  <input
                    ref={firstField}
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="cth: Budi Santoso"
                    className={`mt-2 w-full rounded-xl border bg-[#f7faff] px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-[#0b46c8] focus:bg-white ${
                      errors.includes('nama') ? 'border-red-400' : 'border-[#0b46c8]/15'
                    }`}
                  />
                  {errors.includes('nama') && (
                    <span className="mt-1.5 block text-[12.5px] font-medium text-red-500">Mohon isi nama lengkap Anda.</span>
                  )}
                </label>

                <label className="mt-5 block">
                  <span className="text-[13.5px] font-bold text-[#0a1140]">Nomor WhatsApp</span>
                  <input
                    type="tel"
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    placeholder="cth: 0812 3456 7890"
                    className={`mt-2 w-full rounded-xl border bg-[#f7faff] px-4 py-3 text-[14.5px] outline-none transition-colors focus:border-[#0b46c8] focus:bg-white ${
                      errors.includes('wa') ? 'border-red-400' : 'border-[#0b46c8]/15'
                    }`}
                  />
                  {errors.includes('wa') && (
                    <span className="mt-1.5 block text-[12.5px] font-medium text-red-500">
                      Mohon isi nomor WhatsApp yang valid (diawali 08).
                    </span>
                  )}
                </label>

                <fieldset className="mt-5">
                  <legend className="text-[13.5px] font-bold text-[#0a1140]">Bidang Keahlian</legend>
                  <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                    {KEAHLIAN.map((k) => (
                      <button
                        key={k.id}
                        type="button"
                        onClick={() => setKeahlian(k.id)}
                        aria-pressed={keahlian === k.id}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-3.5 text-[12px] font-bold transition-all duration-200 ${
                          keahlian === k.id
                            ? 'border-[#0b46c8] bg-[#0b46c8] text-white shadow-lg shadow-[#0b46c8]/30'
                            : 'border-[#0b46c8]/15 bg-[#f7faff] text-[#4a5270] hover:border-[#0b46c8]/50'
                        }`}
                      >
                        <k.icon className="h-5 w-5" strokeWidth={1.8} />
                        {k.label}
                      </button>
                    ))}
                  </div>
                  {errors.includes('keahlian') && (
                    <span className="mt-1.5 block text-[12.5px] font-medium text-red-500">Pilih salah satu bidang keahlian.</span>
                  )}
                </fieldset>

                <button
                  type="submit"
                  className="btn-grad mt-7 w-full rounded-full py-3.5 text-[15px] font-bold text-white"
                >
                  Kirim Pendaftaran
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
