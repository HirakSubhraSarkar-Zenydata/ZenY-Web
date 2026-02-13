
import React, { useEffect } from 'react';
import { SERVICES } from '../constants';

interface ServicesPageProps {
  onServiceSelect?: (id: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onServiceSelect }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Page Hero - High Impact */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-4 text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
            <span className="w-12 h-[1px] bg-blue-600"></span>
            Full Engineering Hub
          </div>
          <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-950 mb-12 leading-[1] tracking-tight">
            Comprehensive <br/><span className="text-slate-400">Digital Solutions</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Browse our core engineering disciplines. Each practice area is led by world-class specialists dedicated to operational excellence.
          </p>
        </div>
      </section>

      {/* Main Services Grid with Alternating Visuals */}
      <section className="max-w-7xl mx-auto px-6 grid gap-48">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Left/Right Text Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center p-5 shadow-2xl shadow-slate-900/20 group hover:bg-[#2E1CFF] transition-colors duration-500">
                  <img src={service.icon} alt="" className="w-full h-full object-contain brightness-0 invert" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {service.description} We specialize in architecting complex, high-availability environments that prioritize long-term scalability and absolute data security.
                </p>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <button 
                  onClick={() => onServiceSelect?.(service.id)}
                  className="px-10 py-4 bg-[#2E1CFF] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95"
                >
                  View Practice Area
                </button>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="flex-1 w-full relative cursor-pointer" onClick={() => onServiceSelect?.(service.id)}>
              <div className="aspect-[16/11] bg-slate-100 rounded-[3rem] overflow-hidden group shadow-3xl shadow-slate-200">
                 <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                 />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Conversion Section - Final Push */}
      <section className="max-w-7xl mx-auto px-6 mt-48">
        <div className="bg-[#2E1CFF] rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-600/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight">Ready to architect your digital future?</h3>
            <p className="text-blue-100 text-lg mb-12 font-medium opacity-80">
              Join the world's leading organizations in building high-performance, resilient data ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-[#2E1CFF] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
