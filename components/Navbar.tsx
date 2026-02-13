
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { SERVICES } from '../constants';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState, id?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    onNavigate('service-detail', id);
    setShowServices(false);
  };

  return (
    <nav 
      onMouseLeave={() => setShowServices(false)}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || showServices ? 'bg-white py-3 shadow-xl' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity">
          <Logo light={false} />
        </button>
        
        <div className="hidden lg:flex items-center gap-2">
          {/* SERVICES WITH DROPDOWN */}
          <div 
            className="relative px-4 py-2"
            onMouseEnter={() => setShowServices(true)}
          >
            <button 
              onClick={() => onNavigate('services-hub')}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 ${
                showServices ? 'text-[#2E1CFF]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-3 w-3 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <button 
            onClick={() => onNavigate('associations')}
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors"
          >
            Associations
          </button>
          <button 
            onClick={() => onNavigate('data-lab')}
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors"
          >
            Data Lab
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors"
          >
            About Us
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('insights-hub')} className="hidden md:block text-slate-400 hover:text-slate-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            onClick={() => onNavigate('partner')}
            className="bg-[#2E1CFF] text-white px-8 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Partner with Us
          </button>
        </div>
      </div>

      {/* Services Mega Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-hidden shadow-2xl ${
          showServices ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-12 gap-10">
          <div className="col-span-9 grid grid-cols-3 gap-y-8 gap-x-12">
            {SERVICES.map((item, idx) => (
              <button 
                key={idx} 
                onClick={(e) => handleServiceClick(e, item.id)}
                className="group flex gap-5 text-left transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2E1CFF] transition-all group-hover:bg-[#2E1CFF] group-hover:text-white group-hover:scale-110 duration-300">
                  <img src={item.icon} alt="" className="w-6 h-6 grayscale group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-slate-900 mb-1.5 uppercase tracking-widest group-hover:text-[#2E1CFF]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-medium">
                    {item.description.split('.')[0]}.
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          <div 
            onClick={() => { onNavigate('services-hub'); setShowServices(false); }}
            className="col-span-3 bg-[#020617] rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E1CFF] blur-[100px] opacity-20 transition-opacity group-hover:opacity-40"></div>
            <div className="relative z-10">
              <span className="text-[#2E1CFF] text-[9px] font-bold uppercase tracking-[0.4em]">Strategic Hub</span>
              <h5 className="text-white text-lg font-bold mt-4 mb-3 leading-tight">All Engineering Capabilities</h5>
              <p className="text-slate-400 text-[10px] leading-relaxed">Browse our full methodology and framework library.</p>
            </div>
            <button className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mt-8 flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
              Explore All
              <span className="text-[#2E1CFF]">→</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
