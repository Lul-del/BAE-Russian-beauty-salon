import { Star, Eye, Scissors, Hand, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative mx-6 sm:mx-8">
              <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/30 dark:shadow-gray-900/50">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=1000&fit=crop" alt="BAE Salon" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border border-rose-50 dark:border-gray-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center">
                    <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">😊</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{t.about.clients}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-rose-50 dark:border-gray-700">
                <div className="flex items-center gap-1 sm:gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 ml-0.5 sm:ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-flex items-center gap-2 text-[#ED5389] dark:text-[#D4AF37] font-medium text-xs sm:text-sm uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t.about.sub}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {t.about.title} <span className="text-gradient">{t.about.highlight}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{t.about.p1}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />, label: t.about.lashes, color: 'from-pink-500 to-rose-400' },
                { icon: <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />, label: t.about.hair, color: 'from-amber-500 to-yellow-400' },
                { icon: <Hand className="w-5 h-5 sm:w-6 sm:h-6" />, label: t.about.nails, color: 'from-purple-500 to-violet-400' },
              ].map((item, i) => (
                <div key={i} className="text-center p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/50 dark:bg-gray-800 group hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 mx-auto rounded-lg sm:rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {[
                { num: '5+', label: t.about.exp },
                { num: '✨', label: t.about.clients },
                { num: '15+', label: t.about.servicesCount },
                { num: '100%', label: t.about.products },
              ].map((s, i) => (
                <div key={i} className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/50 dark:bg-gray-800">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.num}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] text-white font-semibold shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
              {t.about.cta} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
