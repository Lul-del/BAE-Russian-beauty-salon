import { Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Props {
  sub: string;
  title: string;
  desc?: string;
}

export default function SectionTitle({ sub, title, desc }: Props) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <span className="inline-flex items-center gap-2 text-[#ED5389] dark:text-[#EDCD64] font-medium text-sm uppercase tracking-widest mb-3">
        <Sparkles className="w-4 h-4" /> {sub}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      {desc && <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">{desc}</p>}
      <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-linear-to-r from-[#FF61EF] to-[#ED5389] dark:from-[#EDB009] dark:to-[#EDCD64]" />
    </div>
  );
}
