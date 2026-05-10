import { Star, Eye, Scissors, Hand, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, inView } = useInView();
  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/30 dark:shadow-gray-900/50">
                <img
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=1000&fit=crop"
                  alt="Salon de beauté BAE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-xl shadow-rose-100/50 dark:shadow-gray-900/50 border border-rose-50 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">😊</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Clients satisfaits</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl shadow-rose-100/50 dark:shadow-gray-900/50 border border-rose-50 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-[#ED5389] dark:text-[#D4AF37] font-medium text-sm uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" /> À propos de nous
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              L'Excellence de la <span className="text-gradient">Beauté Russe</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              <strong>BAE Salon de Beauté Russe</strong>, niché au cœur de Business Bay, à Dubaï, offre une gamme
              exquise de services de beauté sur mesure pour améliorer votre allure naturelle. Avec une équipe de
              professionnels qualifiés, nous garantissons que chaque cliente se sente rajeunie et confiante.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Spécialisée dans les cils, les cheveux et les ongles, notre clinique esthétique se distingue par son
              souci méticuleux des détails et son engagement à utiliser des produits de haute qualité. Découvrez
              le mélange de luxe et d'expertise qui fait de BAE le choix de premier choix à Dubaï.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Eye className="w-6 h-6" />, label: 'Cils', color: 'from-pink-500 to-rose-400' },
                { icon: <Scissors className="w-6 h-6" />, label: 'Cheveux', color: 'from-amber-500 to-yellow-400' },
                { icon: <Hand className="w-6 h-6" />, label: 'Ongles', color: 'from-purple-500 to-violet-400' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-rose-50/50 dark:bg-gray-800 group hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { num: '5+', label: "Années d'expérience" },
                { num: '✨', label: 'Clients satisfaits' },
                { num: '15+', label: 'Services proposés' },
                { num: '100%', label: 'Produits premium' },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-rose-50/50 dark:bg-gray-800">
                  <p className="font-display text-3xl font-bold text-gradient">{s.num}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold shadow-lg transition-all hover:scale-105">
              Nous contacter <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
