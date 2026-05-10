import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { services } from '../data';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-150', 'delay-300'];

export default function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="services" className="py-24 bg-linear-to-b from-white to-rose-50/50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Nos Services"
          title="L'Art de la Beauté"
          desc="Des prestations complètes pour sublimer votre beauté naturelle avec des techniques russes reconnues mondialement."
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i}
              className={`group rounded-3xl p-8 bg-white dark:bg-gray-800 border border-rose-100/50 dark:border-gray-700 hover-lift transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${s.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ED5389] dark:text-[#D4AF37] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#tarifs" className="inline-flex items-center gap-1 mt-6 text-[#ED5389] dark:text-[#D4AF37] font-medium text-sm hover:gap-2 transition-all">
                Voir les tarifs <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
