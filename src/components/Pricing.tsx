import { useInView } from '../hooks/useInView';
import { pricing } from '../data';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-150', 'delay-300'];

export default function Pricing() {
  const { ref, inView } = useInView();
  return (
    <section id="tarifs" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Tarifs"
          title="Nos Prix"
          desc="Des tarifs transparents pour des prestations d'exception."
        />
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {pricing.map((cat, i) => (
            <div key={i}
              className={`rounded-3xl overflow-hidden border border-rose-100 dark:border-gray-700 hover-lift transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#B8860B] dark:to-[#FFD700] p-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  {cat.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{cat.cat}</h3>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                {cat.items.map((item, j) => (
                  <div key={j} className={`flex items-center justify-between py-3 ${j < cat.items.length - 1 ? 'border-b border-rose-50 dark:border-gray-700' : ''}`}>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item.name}</span>
                    <span className="font-display font-bold text-gradient text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-8">
          * Les prix peuvent varier selon la longueur, l'épaisseur et les besoins spécifiques. Un devis personnalisé vous sera proposé lors de votre consultation.
        </p>
      </div>
    </section>
  );
}
