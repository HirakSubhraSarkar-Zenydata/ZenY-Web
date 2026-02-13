// import React, { useState, useEffect } from 'react';
// import { HERO_SLIDES } from '../constants';
// import { ViewState } from '../App';

// interface HeroProps {
//   navigateTo: (view: ViewState, id?: string) => void;
// }

// const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const totalDuration = 7500;

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, totalDuration);
//     return () => clearInterval(timer);
//   }, []);

//   const dataFocusContent = [
//     {
//       title: "Petabyte-Scale Engineering for Global Leaders",
//       subtitle: "Architecting high-performance data ecosystems that turn raw information into predictive intelligence."
//     },
//     {
//       title: "The Architecture of Decision Science",
//       subtitle: "Custom ML frameworks designed to drive autonomous operations and boardroom clarity."
//     },
//     {
//       title: "Cognitive Enterprise Data Fabrics",
//       subtitle: "Secure, governed, and infinitely scalable cloud infrastructures for the post-digital age."
//     }
//   ];

//   const currentSlide = HERO_SLIDES[activeIndex];
//   const currentText = dataFocusContent[activeIndex];

//   return (
//     <section className="relative h-[65vh] min-h-[500px] flex items-center bg-[#020617] overflow-hidden pt-16">
//       <div className="absolute inset-0 z-0">
//         {HERO_SLIDES.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//               index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent z-10" />
//             {slide.type === 'video' ? (
//               <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
//                 <source src={slide.url} type="video/mp4" />
//               </video>
//             ) : (
//               <img src={slide.url} alt={slide.title} className="w-full h-full object-cover opacity-70" />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
//         <div className="max-w-2xl">
//           <div
//             key={`badge-${activeIndex}`}
//             className="inline-flex items-center gap-3 text-blue-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-4 animate-in slide-in-from-left-4"
//           >
//             <span className="w-8 h-[2px] bg-blue-600"></span>
//             {currentSlide.badge}
//           </div>

//           <h1
//             key={`title-${activeIndex}`}
//             className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-in slide-in-from-bottom-4 duration-700"
//           >
//             {currentText.title}
//           </h1>

//           <p
//             key={`subtitle-${activeIndex}`}
//             className="text-base lg:text-lg text-slate-300 max-w-lg leading-relaxed mb-8 animate-in slide-in-from-bottom-2 delay-200"
//           >
//             {currentText.subtitle}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in delay-500">
//             <button
//               onClick={() => navigateTo('services-hub')}
//               className="px-8 py-3.5 bg-[#2E1CFF] text-white font-bold rounded text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/40 transform active:scale-95"
//             >
//               Explore Solutions
//             </button>
//             <button
//               onClick={() => navigateTo('insights-hub')}
//               className="px-8 py-3.5 bg-white/10 text-white font-bold rounded border border-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all"
//             >
//               Research Hub
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 right-12 flex flex-col gap-4 z-40 items-end">
//         {HERO_SLIDES.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActiveIndex(i)}
//             className="group flex items-center gap-4 transition-all"
//           >
//             <span className={`text-[9px] font-bold tracking-[0.2em] transition-all ${i === activeIndex ? 'text-white translate-x-0' : 'text-slate-600 translate-x-1'}`}>
//               0{i + 1}
//             </span>
//             <div className={`h-[2px] transition-all duration-700 ${i === activeIndex ? 'w-12 bg-blue-500' : 'w-4 bg-slate-800 group-hover:bg-slate-700'}`} />
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { HERO_SLIDES } from "../constants";

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDuration = 7500;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, totalDuration);

    return () => clearInterval(timer);
  }, []);

  const dataFocusContent = [
    {
      title: "Petabyte-Scale Engineering for Global Leaders",
      subtitle:
        "Architecting high-performance data ecosystems that turn raw information into predictive intelligence.",
    },
    {
      title: "The Architecture of Decision Science",
      subtitle:
        "Custom ML frameworks designed to drive autonomous operations and boardroom clarity.",
    },
    {
      title: "Cognitive Enterprise Data Fabrics",
      subtitle:
        "Secure, governed, and infinitely scalable cloud infrastructures for the post-digital age.",
    },
  ];

  const currentSlide = HERO_SLIDES[activeIndex];
  const currentText = dataFocusContent[activeIndex];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center bg-[#020617] overflow-hidden pt-16">
      {/* ===== Background Media (Single Active Slide Only) ===== */}
      <div className="absolute inset-0 z-0">
        <div
          key={currentSlide.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent z-10" />

          {currentSlide.type === "video" && !isMobile ? (
            <video
              key={currentSlide.url}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={currentSlide.url} type="video/mp4" />
            </video>
          ) : (
            <img
              src={currentSlide.url}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* ===== Foreground Content ===== */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            key={`badge-${activeIndex}`}
            className="inline-flex items-center gap-3 text-blue-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-4 animate-in slide-in-from-left-4"
          >
            <span className="w-8 h-[2px] bg-blue-600" />
            {currentSlide.badge}
          </div>

          {/* Title */}
          <h1
            key={`title-${activeIndex}`}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-in slide-in-from-bottom-4 duration-700"
          >
            {currentText.title}
          </h1>

          {/* Subtitle */}
          <p
            key={`subtitle-${activeIndex}`}
            className="text-base lg:text-lg text-slate-300 max-w-lg leading-relaxed mb-8 animate-in slide-in-from-bottom-2 delay-200"
          >
            {currentText.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in delay-500">
            <button className="px-8 py-3.5 bg-[#2E1CFF] text-white font-bold rounded text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/40 active:scale-95">
              Explore Solutions
            </button>
            <button className="px-8 py-3.5 bg-white/10 text-white font-bold rounded border border-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
              Research
            </button>
          </div>
        </div>
      </div>

      {/* ===== Slide Indicators ===== */}
      <div className="absolute bottom-8 right-12 flex flex-col gap-4 z-40 items-end">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group flex items-center gap-4"
          >
            <span
              className={`text-[9px] font-bold tracking-[0.2em] transition-all ${
                i === activeIndex
                  ? "text-white translate-x-0"
                  : "text-slate-600 translate-x-1"
              }`}
            >
              0{i + 1}
            </span>
            <div
              className={`h-[2px] transition-all duration-700 ${
                i === activeIndex
                  ? "w-12 bg-blue-500"
                  : "w-4 bg-slate-800 group-hover:bg-slate-700"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
