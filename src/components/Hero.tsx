import { useState, useEffect } from 'react';
import { Star, ChevronDown, Crown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../images/Hamza hairDresser on Instagram_ _Bye 2022 welcome 2023 _ . . . . . . . . . . . . .jpeg';
import img2 from '../images/Programmin1g coding background.jpeg';
import img3 from '../images/Programming coding background.jpeg';

const slides = [
  { src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&h=1080&fit=crop', alt: 'Salon de beauté BAE' },
  { src: img1, alt: 'BAE Beauty Salon' },
  { src: img2, alt: 'BAE Beauty Salon' },
  { src: img3, alt: 'BAE Beauty Salon' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Carousel background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/90 via-rose-950/80 to-gray-900/90 dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-950/95" />
      </div>

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 dark:bg-[#D4AF37]/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl float-animation [animation-delay:3s]" />

      {/* Carousel arrows */}
      <button type="button" onClick={prev} aria-label="Image précédente"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button type="button" onClick={next} aria-label="Image suivante"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8 fade-in">
          <Crown className="w-4 h-4 text-amber-400" />
          Salon de Beauté Premium
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 slide-up">
          BAE
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6 slide-up [animation-delay:0.2s]">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-rose-400 dark:to-[#D4AF37]" />
          <span className="text-rose-300 dark:text-[#D4AF37] font-display text-xl italic">Beauty & Elegance</span>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-rose-400 dark:to-[#D4AF37]" />
        </div>

        <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto mb-4 slide-up font-light [animation-delay:0.4s]">
          Cils · Cheveux · Ongles
        </p>
        <p className="text-base text-white/50 max-w-xl mx-auto mb-10 slide-up [animation-delay:0.5s]">
          L'excellence de la beauté russe au service de votre élégance. Des prestations haut de gamme dans un cadre raffiné.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up [animation-delay:0.6s]">
          <a href="#contact"
            className="px-8 py-4 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 dark:shadow-yellow-500/30 dark:hover:shadow-yellow-500/50 transition-all hover:scale-105 flex items-center gap-2">
            Prendre Rendez-vous <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2">
            Découvrir nos services
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/60 slide-up [animation-delay:0.8s]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-sm">4.9/5</span>
          </div>
          <div className="w-px h-5 bg-white/20" />
          <span className="text-sm">Plusieurs clients satisfaits</span>
          <div className="w-px h-5 bg-white/20 hidden sm:block" />
          <span className="text-sm hidden sm:block">Business Bay, Dubaï</span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} type="button" onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>

      <a href="#services" aria-label="Scroll vers les services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
