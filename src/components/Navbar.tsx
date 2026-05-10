import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logoImg from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails.jpg';
import { useTheme } from '../hooks/useTheme';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const linkColor = scrolled
    ? 'text-gray-700 dark:text-gray-300'
    : 'text-white/90';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-rose-100/20 dark:shadow-gray-900/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center gap-3">
            <img src={logoImg} alt="BAE Russian Beauty Salon" className="h-12 w-12 object-cover rounded-full" />
            <div className={`hidden sm:flex flex-col leading-tight transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              <span className="font-display font-bold text-base">BAE Russian beauty salon</span>
              <span className="text-xs opacity-70 font-medium">Lashes · Hair · Nails</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF61EF] dark:hover:text-[#D4AF37] ${linkColor}`}>
                {l.label}
              </a>
            ))}
            <button type="button" onClick={toggle} aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 ${scrolled ? 'bg-rose-50 dark:bg-gray-800 text-gray-700 dark:text-[#D4AF37]' : 'bg-white/10 text-white'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact"
              className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white text-sm font-semibold shadow-lg transition-all hover:scale-105">
              Réserver
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button type="button" onClick={toggle} aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${scrolled ? 'bg-rose-50 dark:bg-gray-800 text-gray-700 dark:text-[#D4AF37]' : 'bg-white/10 text-white'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button type="button" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen
                ? <X className={`w-6 h-6 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} />
                : <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/98 dark:bg-gray-900 backdrop-blur-lg border-t border-rose-100 dark:border-gray-700 shadow-xl">
          <div className="px-6 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-[#FF61EF] dark:hover:text-[#D4AF37] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="block text-center mt-3 px-5 py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold">
              Réserver maintenant
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
