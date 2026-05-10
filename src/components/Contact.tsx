import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, QrCode } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageContext';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../icons';
import SectionTitle from './SectionTitle';

const WHATSAPP_NUMBER = '971585310080';
const BOOKING_URL = 'https://bookbeauty.ae/wp-admin/admin-post.php?action=bbxb_go_whatsapp&post=6049&clinic=BAE Russian beauty salon Lashes Hair Nails';
const qrSrc = (dark: boolean) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=${dark ? '000000' : 'ED5389'}&bgcolor=fff&data=${encodeURIComponent(BOOKING_URL)}`;

const schedule = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

interface FormState { firstname: string; lastname: string; phone: string; email: string; service: string; message: string; }
const emptyForm: FormState = { firstname: '', lastname: '', phone: '', email: '', service: '', message: '' };

export default function Contact() {
  const { ref, inView } = useInView();
  const { dark } = useTheme();
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [tab, setTab] = useState<'qr' | 'form'>('qr');

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      t.contact.waIntro,
      `${t.contact.waName} : ${form.firstname} ${form.lastname}`,
      `${t.contact.waPhone} : ${form.phone}`,
      `${t.contact.waEmail} : ${form.email}`,
      `${t.contact.waService} : ${form.service}`,
    ];
    if (form.message) lines.push(`💬 ${form.message}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    setForm(emptyForm);
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, title: t.contact.addressLabel, text: t.contact.addressText, href: 'https://www.google.com/maps/place/BAE+Russian+beauty+salon+Lashes+Hair+Nails/@19.0510618,39.4495844,5.46z/data=!4m17!1m10!4m9!1m4!2m2!1d2.392064!2d6.3799296!4e1!1m3!2m2!1d55.2732704!2d25.1772449!3m5!1s0x3e5f69ae921d04f1:0x19ddbcd72e67715f!8m2!3d25.1772449!4d55.2732704!16s%2Fg%2F11vdg6_5b0?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D' },
    { icon: <Phone className="w-5 h-5" />, title: t.contact.phoneLabel, text: '+971 58 531 0080', href: undefined },
    { icon: <Mail className="w-5 h-5" />, title: t.contact.emailLabel, text: 'baebeautysalon@gmail.com', href: undefined },
    { icon: <Clock className="w-5 h-5" />, title: t.contact.hoursLabel, text: t.contact.hoursText, href: undefined },
  ];

  const socials = [
    { icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', href: 'https://www.instagram.com/bae_beautysalon_/?hl=fr' },
    { icon: <FacebookIcon className="w-5 h-5" />, label: 'Facebook', href: '#' },
    { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok', href: '#' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle sub={t.contact.sub} title={t.contact.title} desc={t.contact.desc} />
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((item, i) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-linear-to-br from-rose-100 to-pink-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-[#ED5389] dark:text-[#D4AF37] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{item.text}</p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 sm:gap-4 hover:opacity-80 transition-opacity">{inner}</a>
                ) : (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">{inner}</div>
                );
              })}
            </div>

            <div className="mb-6 sm:mb-8 rounded-2xl border border-rose-100 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37]">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">{t.contact.openingHours}</span>
              </div>
              <div className="divide-y divide-rose-50 dark:divide-gray-700 dark:bg-gray-800">
                {schedule.map(day => (
                  <div key={day} className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5">
                    <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">{day}</span>
                    <span className="text-[#ED5389] dark:text-[#D4AF37] text-xs sm:text-sm font-semibold">10:00 - 21:00</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{t.contact.follow}</span>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-rose-50 dark:bg-gray-700 flex items-center justify-center text-[#ED5389] dark:text-[#D4AF37] hover:bg-linear-to-br hover:from-[#FF61EF] hover:to-[#ED5389] dark:hover:from-[#D4AF37] dark:hover:to-[#D4AF37] hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden border border-rose-100 dark:border-gray-700 h-48">
              <iframe title="BAE Russian Beauty Salon" src="https://maps.google.com/maps?q=25.1772449,55.2732704&z=16&output=embed"
                width="100%" height="100%" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex rounded-2xl bg-rose-50 dark:bg-gray-800 p-1 mb-6 gap-1">
              <button type="button" onClick={() => setTab('qr')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${tab === 'qr' ? 'bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t.contact.scanTab}
              </button>
              <button type="button" onClick={() => setTab('form')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${tab === 'form' ? 'bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t.contact.formTab}
              </button>
            </div>

            {tab === 'qr' && (
              <div className="bg-linear-to-br from-rose-50/50 to-pink-50/50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-rose-100/50 dark:border-gray-700 flex flex-col items-center text-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center shadow-lg">
                  <QrCode className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.contact.qrTitle}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">{t.contact.qrDesc}</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md border border-rose-100 dark:border-gray-600">
                  <img src={qrSrc(dark)} alt="QR code WhatsApp BAE Salon" width={200} height={200} className="rounded-xl sm:w-[220px] sm:h-[220px]" />
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold shadow-lg hover:scale-105 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> {t.contact.openWA}
                </a>
              </div>
            )}

            {tab === 'form' && (
              <form onSubmit={handleSubmit} className="bg-linear-to-br from-rose-50/50 to-pink-50/50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-rose-100/50 dark:border-gray-700">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.contact.formTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{t.contact.formDesc}</p>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.firstname}</label>
                      <input type="text" required value={form.firstname} onChange={set('firstname')} placeholder={t.contact.firstnamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.lastname}</label>
                      <input type="text" required value={form.lastname} onChange={set('lastname')} placeholder={t.contact.lastnamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.phoneField}</label>
                    <input type="tel" required value={form.phone} onChange={set('phone')} placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.emailField}</label>
                    <input type="email" required value={form.email} onChange={set('email')} placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.serviceField}</label>
                    <select required aria-label={t.contact.serviceField} value={form.service} onChange={set('service')}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm">
                      <option value="">{t.contact.chooseService}</option>
                      <optgroup label={t.contact.lashesGroup}>
                        <option>{t.contact.opt_russianVolume}</option>
                        <option>{t.contact.opt_3dVolume}</option>
                        <option>{t.contact.opt_megaVolume}</option>
                        <option>{t.contact.opt_lashLift}</option>
                      </optgroup>
                      <optgroup label={t.contact.hairGroup}>
                        <option>{t.contact.opt_cutBlowout}</option>
                        <option>{t.contact.opt_coloring}</option>
                        <option>{t.contact.opt_balayage}</option>
                        <option>{t.contact.opt_keratin}</option>
                      </optgroup>
                      <optgroup label={t.contact.nailsGroup}>
                        <option>{t.contact.opt_russianManicure}</option>
                        <option>{t.contact.opt_gel}</option>
                        <option>{t.contact.opt_nailArt}</option>
                        <option>{t.contact.opt_pedicure}</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.contact.messageField}</label>
                    <textarea rows={3} value={form.message} onChange={set('message')} placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED5389]/40 dark:focus:ring-[#D4AF37]/40 transition-all text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full py-3 sm:py-4 rounded-xl bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold text-base sm:text-lg shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" /> {t.contact.send}
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
