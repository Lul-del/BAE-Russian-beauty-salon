import { MapPin, Phone, Mail, Clock, Heart, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../icons';
import logoImg from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-10 sm:py-16 text-center border-b border-white/10">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Prête à sublimer votre <span className="text-gradient">beauté</span> ?
          </h3>
          <p className="text-white/60 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Réservez votre rendez-vous dès maintenant et laissez nos expertes prendre soin de vous.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold shadow-2xl hover:scale-105 transition-all text-sm sm:text-base">
            Réserver maintenant <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Footer Content */}
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="BAE Russian Beauty Salon" className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-sm sm:text-base text-white">BAE Russian beauty salon</span>
                <span className="text-xs text-white/60 font-medium">Lashes · Hair · Nails</span>
              </div>
            </div>
            <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed mb-4">
              Salon de beauté spécialisé dans les techniques russes. Extensions de cils, coiffure et manucure haut de gamme.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bae_beautysalon_/?hl=fr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-400 dark:hover:bg-[#D4AF37] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-400 dark:hover:bg-[#D4AF37] transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-400 dark:hover:bg-[#D4AF37] transition-colors">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/50">
              <li><a href="#services" className="hover:text-rose-400 dark:hover:text-[#D4AF37] transition-colors">Extensions de Cils</a></li>
              <li><a href="#services" className="hover:text-rose-400 dark:hover:text-[#D4AF37] transition-colors">Coiffure & Cheveux</a></li>
              <li><a href="#services" className="hover:text-rose-400 dark:hover:text-[#D4AF37] transition-colors">Manucure & Ongles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/50">
              <li>
                <a href="https://www.google.com/maps/place/BAE+Russian+beauty+salon+Lashes+Hair+Nails/@19.0510618,39.4495844,5.46z/data=!4m17!1m10!4m9!1m4!2m2!1d2.392064!2d6.3799296!4e1!1m3!2m2!1d55.2732704!2d25.1772449!3m5!1s0x3e5f69ae921d04f1:0x19ddbcd72e67715f!8m2!3d25.1772449!4d55.2732704!16s%2Fg%2F11vdg6_5b0?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-rose-400 dark:hover:text-[#D4AF37] transition-colors">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> Business Bay, Dubaï, UAE
                </a>
              </li>
              <li className="flex items-center gap-2"><Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> +971 58 531 0080</li>
              <li className="flex items-center gap-2"><Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> baebeautysalon@gmail.com</li>
              <li className="flex items-center gap-2"><Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> Lun-Dim : 10h-21h</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 sm:py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/30">
          <p>&copy; 2025 BAE Salon de Beauté. Tous droits réservés.</p>
          <p className="flex items-center gap-1">Fait avec <Heart className="w-3 h-3 fill-rose-400 text-rose-400" /> à Dubaï</p>
        </div>
      </div>
    </footer>
  );
}
