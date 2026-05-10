import { useInView } from '../hooks/useInView';
import { galleryItems } from '../data';
import SectionTitle from './SectionTitle';

const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];

export default function Gallery() {
  const { ref, inView } = useInView();

  return (
    <section id="galerie" className="py-16 sm:py-24 bg-linear-to-b from-rose-50/50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Galerie"
          title="Nos Réalisations"
          desc="Découvrez quelques-unes de nos créations les plus populaires."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <div key={i}
              className={`group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${delays[i]} ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 text-white">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="font-display text-base sm:text-lg md:text-xl font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{item.label}</span>
                <span className="text-white/70 text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">{item.sublabel}</span>
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
