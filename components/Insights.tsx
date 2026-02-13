
import React from 'react';
import { INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Latest Thinking</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Perspectives on Innovation</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-900 font-bold text-sm uppercase border-b-2 border-indigo-600 pb-1 hover:text-indigo-600 transition-all">
            View All Insights
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {INSIGHTS.map((insight, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-indigo-600 px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                  {insight.category}
                </div>
              </div>
              <p className="text-slate-400 text-sm font-semibold mb-2">{insight.date}</p>
              <h4 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                {insight.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
