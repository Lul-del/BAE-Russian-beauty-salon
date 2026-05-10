import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-[400ms]'];

export default function Testimonials() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  return (
    <section id="avis" className="py-16 sm:py-24 bg-linear-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle sub={t.testimonials.sub} title={t.testimonials.title} desc={t.testimonials.desc} />
        <div ref={ref} className="flex flex-col divide-y divide-rose-100 dark:divide-gray-700">
          {testimonials.map((item, i) => (
            <div key={i}
              className={`flex gap-3 sm:gap-5 py-6 sm:py-8 transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center text-white font-bold text-sm sm:text-base">
                {item.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{item.name}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 dark:text-yellow-800" />
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
