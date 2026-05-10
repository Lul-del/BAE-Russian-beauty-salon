import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import logoImg from '../images/BAE-Russian-beauty-salon-Lashes-Hair-Nails.jpg';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../i18n/translations';

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
];

const NAV_HREFS = ['#accueil', '#services', '#galerie', '#avis', '#contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLabels = [t.nav.home, t.nav.services, t.nav.gallery, t.nav.reviews, t.nav.contact];
  const linkColor = scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90';
  const currentLang = LANGS.find(l => l.code === lang)!;

  const LangDropdown = ({ mobile }: { mobile?: boolean }) => (
    <div ref={mobile ? undefined : langRef} className="relative">
      <button type="button" onClick={() => setLangOpen(o => !o)}
        className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all ${
          mobile
            ? 'bg-rose-50 dark:bg-gray-800 text-gray-700 dark:text-[#D4AF37]'
            : scrolled
              ? 'bg-rose-50 dark:bg-gray-800 text-gray-700 dark:text-[#D4AF37]'
              : 'bg-white/10 text-white'
        }`}>
        <span>{currentLang.flag}</span>
        <span className="text-xs">{currentLang.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-rose-100 dark:border-gray-700 overflow-hidden z-50">
          {LANGS.map(l => (
            <button key={l.code} type="button"
              onClick={() => { setLang(l.code); setLangOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-rose-50 dark:hover:bg-gray-700 ${
                lang === l.code
                  ? 'text-[#ED5389] dark:text-[#D4AF37] font-semibold bg-rose-50/50 dark:bg-gray-700/50'
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
              <span>{l.flag}</span> {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

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

          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href}
                className={`text-sm font-medium transition-colors hover:text-[#FF61EF] dark:hover:text-[#D4AF37] ${linkColor}`}>
                {navLabels[i]}
              </a>
            ))}
            <LangDropdown />
            <button type="button" onClick={toggle} aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 ${scrolled ? 'bg-rose-50 dark:bg-gray-800 text-gray-700 dark:text-[#D4AF37]' : 'bg-white/10 text-white'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white text-sm font-semibold shadow-lg transition-all hover:scale-105">
              {t.nav.book}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangDropdown mobile />
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
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-[#FF61EF] dark:hover:text-[#D4AF37] transition-colors">
                {navLabels[i]}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}
              className="block text-center mt-3 px-5 py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold">
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
