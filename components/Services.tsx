
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onViewAll: () => void;
  onServiceSelect: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewAll, onServiceSelect }) => {
  // Homepage only shows first 3
  const coreServices = SERVICES.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#2E1CFF] font-bold uppercase tracking-[0.4em] text-sm mb-4">Strategic Core</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              High-Performance Architectures
            </h3>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="text-slate-500 max-w-md text-lg leading-relaxed">
              Our core disciplines focused on shifting the needle for the world's most data-intensive organizations.
            </p>
            <button 
              onClick={onViewAll}
              className="text-[#2E1CFF] font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 group hover:gap-4 transition-all"
            >
              View Full Capabilities
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-12 rounded-3xl border border-slate-100 hover:border-[#2E1CFF] hover:shadow-2xl hover:shadow-[#2E1CFF]/5 transition-all duration-500 cursor-pointer"
              onClick={() => onServiceSelect(service.id)}
            >
              <div className="mb-8 p-5 bg-slate-50 inline-block rounded-2xl group-hover:bg-blue-50 transition-colors">
                <img src={service.icon} alt={service.title} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all brightness-75 group-hover:brightness-100" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2E1CFF] transition-colors">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm font-medium">
                {service.description}
              </p>
              <div className="inline-flex items-center gap-2 text-[#2E1CFF] font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Detailed Briefing
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
