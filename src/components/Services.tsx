import { Eye, Scissors, Hand } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-150', 'delay-300'];
const icons = [<Eye className="w-7 h-7 sm:w-8 sm:h-8" />, <Scissors className="w-7 h-7 sm:w-8 sm:h-8" />, <Hand className="w-7 h-7 sm:w-8 sm:h-8" />];
const colors = ['from-pink-500 to-rose-400', 'from-amber-500 to-yellow-400', 'from-purple-500 to-violet-400'];
const keys = ['lashes', 'hair', 'nails'] as const;

export default function Services() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const services = keys.map((k, i) => ({ icon: icons[i], color: colors[i], ...t.services[k] }));

  return (
    <section id="services" className="py-16 sm:py-24 bg-linear-to-b from-white to-rose-50/50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle sub={t.services.sub} title={t.services.title} desc={t.services.desc} />
        <div ref={ref} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i}
              className={`group rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border border-rose-100/50 dark:border-gray-700 hover-lift transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${s.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ED5389] dark:text-[#D4AF37] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-1 mt-5 sm:mt-6 text-[#ED5389] dark:text-[#D4AF37] font-medium text-sm hover:gap-2 transition-all">
                {t.services.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
