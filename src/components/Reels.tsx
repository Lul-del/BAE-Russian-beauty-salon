import { useState } from 'react';
import { X, Play } from 'lucide-react';
import { InstagramIcon } from '../icons';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';

const reels = [
  { id: 'DUTGquGjVrT', label: 'Extensions de Cils' },
  { id: 'DO8yysujPOz', label: 'Volume Russe' },
  { id: 'DMK2sKqJZWy', label: 'Nail Art' },
  { id: 'DPyqigPgCWQ', label: 'Coiffure' },
  { id: 'DKzabBHPjgD', label: 'Lash Lift' },
];

export default function Reels() {
  const { ref, inView } = useInView();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          sub="Instagram Reels"
          title="Nos Vidéos"
          desc="Découvrez nos créations en vidéo directement depuis Instagram."
        />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {reels.map((reel, i) => (
            <div
              key={reel.id}
              className={`group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Thumbnail background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#FF61EF]/80 to-[#ED5389]/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <InstagramIcon className="w-8 h-8 text-white/70" />
                <span className="text-white font-semibold text-sm text-center">{reel.label}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(reel.id)}
                  className="px-5 py-2 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] text-white text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  Voir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            {/* Instagram embed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white" style={{ aspectRatio: '9/16' }}>
              <iframe
                src={`https://www.instagram.com/reel/${activeId}/embed/`}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title={`Instagram Reel ${activeId}`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
