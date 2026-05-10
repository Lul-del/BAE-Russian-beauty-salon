import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, QrCode } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../hooks/useTheme';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../icons';
import SectionTitle from './SectionTitle';

/* ── Config ── */
const WHATSAPP_NUMBER = '971585310080';
const BOOKING_URL = 'https://bookbeauty.ae/wp-admin/admin-post.php?action=bbxb_go_whatsapp&post=6049&clinic=BAE Russian beauty salon Lashes Hair Nails';
const qrSrc = (dark: boolean) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=${dark ? '000000' : 'ED5389'}&bgcolor=fff&data=${encodeURIComponent(BOOKING_URL)}`;

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, title: 'Adresse', text: 'Business Bay, Dubaï, UAE', href: 'https://www.google.com/maps/place/BAE+Russian+beauty+salon+Lashes+Hair+Nails/@19.0510618,39.4495844,5.46z/data=!4m17!1m10!4m9!1m4!2m2!1d2.392064!2d6.3799296!4e1!1m3!2m2!1d55.2732704!2d25.1772449!3m5!1s0x3e5f69ae921d04f1:0x19ddbcd72e67715f!8m2!3d25.1772449!4d55.2732704!16s%2Fg%2F11vdg6_5b0?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D' },
  { icon: <Phone className="w-5 h-5" />, title: 'Téléphone', text: '+971 58 531 0080', href: undefined },
  { icon: <Mail className="w-5 h-5" />, title: 'Email', text: 'baebeautysalon@gmail.com', href: undefined },
  { icon: <Clock className="w-5 h-5" />, title: 'Horaires', text: 'Lun-Dim : 10h00 - 21h00', href: undefined },
];

const schedule = [
  { day: 'Monday',    hours: '10:00 - 21:00' },
  { day: 'Tuesday',   hours: '10:00 - 21:00' },
  { day: 'Wednesday', hours: '10:00 - 21:00' },
  { day: 'Thursday',  hours: '10:00 - 21:00' },
  { day: 'Friday',    hours: '10:00 - 21:00' },
  { day: 'Saturday',  hours: '10:00 - 21:00' },
  { day: 'Sunday',    hours: '10:00 - 21:00' },
];

const socials = [
  { icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/bae_beautysalon_/?hl=fr' },
  { icon: <FacebookIcon className="w-5 h-5" />, label: 'Facebook', href: '#' },
  { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok', href: '#' },
];

interface FormState {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const emptyForm: FormState = { firstname: '', lastname: '', phone: '', email: '', service: '', message: '' };

export default function Contact() {
  const { ref, inView } = useInView();
  const { dark } = useTheme();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [tab, setTab] = useState<'qr' | 'form'>('qr');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Bonjour BAE Salon! 🌸',
      'Je souhaite prendre rendez-vous.',
      '',
      `👤 Nom : ${form.firstname} ${form.lastname}`,
      `📞 Téléphone : ${form.phone}`,
      `📧 Email : ${form.email}`,
      `💆 Service : ${form.service}`,
    ];
    if (form.message) lines.push(`💬 ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setForm(emptyForm);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Contact"
          title="Prenez Rendez-vous"
          desc="Scannez le QR code ou remplissez le formulaire — votre message s'envoie directement sur WhatsApp."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">

          {/* ── Left : info + horaires + socials + map ── */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, i) => {
                const inner = (
                  <>
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-rose-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-[#ED5389] dark:text-[#D4AF37] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.text}</p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  <div key={i} className="flex items-start gap-4">{inner}</div>
                );
              })}
            </div>

            {/* Opening Hours */}
            <div className="mb-8 rounded-2xl border border-rose-100 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37]">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">Opening Hours</span>
              </div>
              <div className="divide-y divide-rose-50 dark:divide-gray-700 dark:bg-gray-800">
                {schedule.map((s) => (
                  <div key={s.day} className="flex items-center justify-between px-5 py-2.5">
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{s.day}</span>
                    <span className="text-[#ED5389] dark:text-[#D4AF37] text-sm font-semibold">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Suivez-nous :</span>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-full bg-rose-50 dark:bg-gray-700 flex items-center justify-center text-[#ED5389] dark:text-[#D4AF37] hover:bg-linear-to-br hover:from-[#FF61EF] hover:to-[#ED5389] dark:hover:from-[#B8860B] dark:hover:to-[#FFD700] hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-rose-100 dark:border-gray-700 h-48">
              <iframe
                title="BAE Russian Beauty Salon"
                src="https://maps.google.com/maps?q=25.1772449,55.2732704&z=16&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right : tabs QR / Formulaire ── */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Tab switcher */}
            <div className="flex rounded-2xl bg-rose-50 dark:bg-gray-800 p-1 mb-6 gap-1">
              <button type="button" onClick={() => setTab('qr')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${tab === 'qr' ? 'bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <QrCode className="w-4 h-4" /> Scanner le QR code
              </button>
              <button type="button" onClick={() => setTab('form')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${tab === 'form' ? 'bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <MessageCircle className="w-4 h-4" /> Remplir le formulaire
              </button>
            </div>

            {/* QR Code panel */}
            {tab === 'qr' && (
              <div className="bg-linear-to-br from-rose-50/50 to-pink-50/50 dark:bg-gray-800 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 border border-rose-100/50 dark:border-gray-700 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center shadow-lg">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Réserver via WhatsApp</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">Scannez ce QR code avec votre téléphone pour ouvrir directement la conversation WhatsApp avec le salon.</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md border border-rose-100 dark:border-gray-600">
                  <img
                    src={qrSrc(dark)}
                    alt="QR code WhatsApp BAE Salon"
                    width={220}
                    height={220}
                    className="rounded-xl"
                  />
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold shadow-lg hover:scale-105 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> Ouvrir WhatsApp directement
                </a>
              </div>
            )}

            {/* Form panel */}
            {tab === 'form' && (
              <form onSubmit={handleSubmit} className="bg-linear-to-br from-rose-50/50 to-pink-50/50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 border border-rose-100/50 dark:border-gray-700">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Votre demande</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Remplissez le formulaire — en cliquant sur Envoyer, WhatsApp s'ouvre avec votre message prêt à envoyer.</p>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                      <input type="text" required value={form.firstname} onChange={set('firstname')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                      <input type="text" required value={form.lastname} onChange={set('lastname')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                    <input type="tel" required value={form.phone} onChange={set('phone')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm" placeholder="+971 58 531 0080" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input type="email" required value={form.email} onChange={set('email')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm" placeholder="votre@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service souhaité</label>
                    <select required aria-label="Service souhaité" value={form.service} onChange={set('service')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm">
                      <option value="">Choisir un service</option>
                      <optgroup label="Cils">
                        <option>Volume Russe</option>
                        <option>Volume 3D</option>
                        <option>Mega Volume</option>
                        <option>Lash Lift</option>
                      </optgroup>
                      <optgroup label="Cheveux">
                        <option>Coupe & Brushing</option>
                        <option>Coloration</option>
                        <option>Balayage</option>
                        <option>Soin Kératine</option>
                      </optgroup>
                      <optgroup label="Ongles">
                        <option>Manucure Russe</option>
                        <option>Gel / Semi-permanent</option>
                        <option>Nail Art</option>
                        <option>Pédicure Spa</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message (optionnel)</label>
                    <textarea rows={3} value={form.message} onChange={set('message')} className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#FFD700]/40 transition-all text-sm resize-none" placeholder="Précisez vos besoins..." />
                  </div>

                  <button type="submit"
                    className="w-full py-4 rounded-xl bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Envoyer sur WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
