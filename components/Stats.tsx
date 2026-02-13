
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left border-r last:border-0 border-slate-100 px-4">
              <div className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
