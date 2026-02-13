
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Domain Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">Built for your Industry</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Deep domain expertise across 14 global industries, delivering specialized insights that drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden">
          {INDUSTRIES.map((industry, idx) => (
            <div 
              key={idx} 
              className="bg-[#0F172A] p-12 hover:bg-slate-800 transition-colors flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <span className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">{industry.icon}</span>
              <h4 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
