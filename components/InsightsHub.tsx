
import React from 'react';
import { INSIGHTS } from '../constants';

interface InsightsHubProps {
  onSelect: (id: string) => void;
}

const InsightsHub: React.FC<InsightsHubProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-4xl space-y-8">
          <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">Research & Intelligence</span>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter">
            The Digital <br/><span className="text-slate-400">Thesis Library</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Our specialized intelligence units publish deep-dives into architectural innovation and the future of enterprise engineering.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {INSIGHTS.map((insight) => (
          <div 
            key={insight.id} 
            className="group cursor-pointer space-y-8"
            onClick={() => onSelect(insight.id)}
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50">
              <img src={insight.image} alt={insight.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                 <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">
                    {insight.category}
                 </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span>{insight.date}</span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                <span>{insight.readTime} Read</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-950 group-hover:text-[#2E1CFF] transition-colors leading-tight">
                {insight.title}
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">
                {insight.content}
              </p>
              <button className="text-[#2E1CFF] font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all pt-4">
                Full Thesis
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InsightsHub;
