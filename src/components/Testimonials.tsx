import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { testimonials } from '../data';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-[400ms]'];

export default function Testimonials() {
  const { ref, inView } = useInView();
  return (
    <section id="avis" className="py-24 bg-linear-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Témoignages"
          title="Ce que disent nos clientes"
          desc="La satisfaction de nos clientes est notre plus belle récompense."
        />
        <div ref={ref} className="flex flex-col divide-y divide-rose-100 dark:divide-gray-700">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`flex gap-5 py-8 transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-[#FF61EF] to-[#ED5389] dark:from-[#D4AF37] dark:to-[#D4AF37] flex items-center justify-center text-white font-bold text-base">
                {t.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1 flex-wrap">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-rose-200 dark:text-yellow-800" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-4">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
