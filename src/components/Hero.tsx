import { Star, ChevronDown, Crown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&h=1080&fit=crop"
          alt="Salon de beauté"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/90 via-rose-950/80 to-gray-900/90 dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-950/95" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl float-animation [animation-delay:3s]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8 fade-in">
          <Crown className="w-4 h-4 text-amber-400" />
          Salon de Beauté Premium
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 slide-up">
          BAE
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6 slide-up [animation-delay:0.2s]">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-rose-400 dark:to-yellow-400" />
          <span className="text-rose-300 dark:text-yellow-300 font-display text-xl italic">Beauty & Elegance</span>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-rose-400 dark:to-yellow-400" />
        </div>

        <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto mb-4 slide-up font-light [animation-delay:0.4s]">
          Cils · Cheveux · Ongles
        </p>
        <p className="text-base text-white/50 max-w-xl mx-auto mb-10 slide-up [animation-delay:0.5s]">
          L'excellence de la beauté russe au service de votre élégance. Des prestations haut de gamme dans un cadre raffiné.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up [animation-delay:0.6s]">
          <a href="#contact"
            className="px-8 py-4 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#EDB009] dark:to-[#EDCD64] text-white font-semibold text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 dark:shadow-yellow-500/30 dark:hover:shadow-yellow-500/50 transition-all hover:scale-105 flex items-center gap-2">
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

      <a href="#services" aria-label="Scroll vers les services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
