
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Proven Impact</h2>
            <h3 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Engineering <span className="text-slate-500">Unfair Advantages</span>.
            </h3>
          </div>
          <button className="text-white font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 border-b-2 border-blue-600 pb-2 hover:text-blue-400 transition-all">
            Browse All Case Studies
            <span className="text-blue-500">→</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[11/14] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating Metric Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="text-blue-400 font-black text-2xl mb-1">{study.metric}</div>
                  <div className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-none">Global Performance Target Met</div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-blue-500 font-black uppercase tracking-[0.3em] text-[9px]">Client: {study.client}</div>
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {study.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {study.description}
                </p>
                <div className="pt-4">
                  <button className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Full Architecture Briefing
                    <span className="text-blue-600">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
