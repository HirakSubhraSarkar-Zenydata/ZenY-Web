// import React, { useEffect } from 'react';
// import { SERVICES } from '../constants';
// import { animate, inView, stagger } from "motion";

// interface ServicesPageProps {
//   onServiceSelect?: (id: string) => void;
// }

// const ServicesPage: React.FC<ServicesPageProps> = ({ onServiceSelect }) => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   /* ===============================
//        Load Calendly Script Once
//     ================================ */
//     useEffect(() => {
//       const scriptId = "calendly-widget-script";

//       if (!document.getElementById(scriptId)) {
//         const script = document.createElement("script");
//         script.id = scriptId;
//         script.src = "https://assets.calendly.com/assets/external/widget.js";
//         script.async = true;
//         document.body.appendChild(script);
//       }
//     }, []);

//      /* ===============================
//      Calendly Popup Handler
//   ================================ */
//   const openCalendlyPopup = () => {
//     if (window.Calendly?.initPopupWidget) {
//       window.Calendly.initPopupWidget({
//         url: "https://calendly.com/zenydata-sales/30min",
//       });
//     } else {
//       console.warn("Calendly widget not ready yet.");
//     }
//   };

//   useEffect(() => {
//   inView("[data-cta]", () => {
//     animate(
//       "[data-cta]",
//       { opacity: [0, 1], y: [24, 0] },
//       { duration: 0.6, easing: "ease-out" }
//     );

//     animate(
//       "[data-cta-eyebrow], [data-cta-title], [data-cta-text]",
//       { opacity: [0, 1], y: [16, 0] },
//       { delay: stagger(0.08), duration: 0.5, easing: "ease-out" }
//     );

//     animate(
//       "[data-cta-actions]",
//       { opacity: [0, 1], y: [12, 0] },
//       { delay: 0.4, duration: 0.4, easing: "ease-out" }
//     );
//   });
// }, []);

//   return (
//     <div className="bg-white min-h-screen pt-32 pb-24">
//       {/* Page Hero - High Impact */}
//       <section className="max-w-7xl mx-auto px-6 mb-40 relative">
//         <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
//         <div className="max-w-4xl">
//           <div className="inline-flex items-center gap-4 text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
//             <span className="w-12 h-[1px] bg-blue-600"></span>
//             Full Engineering Hub
//           </div>
//           <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-950 mb-12 leading-[1] tracking-tight">
//             Comprehensive <br/><span className="text-slate-400">Digital Solutions</span>.
//           </h1>
//           <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
//             Browse our core engineering disciplines. Each practice area is led by world-class specialists dedicated to operational excellence.
//           </p>
//         </div>
//       </section>

//       {/* Main Services Grid with Alternating Visuals */}
//       <section className="max-w-7xl mx-auto px-6 grid gap-48">
//         {SERVICES.map((service, idx) => (
//           <div
//             key={idx}
//             className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
//           >
//             {/* Left/Right Text Content */}
//             <div className="flex-1 space-y-10">
//               <div className="space-y-6">
//                 <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center p-5 shadow-2xl shadow-slate-900/20 group hover:bg-[#2E1CFF] transition-colors duration-500">
//                   <img src={service.icon} alt="" className="w-full h-full object-contain brightness-0 invert" />
//                 </div>
//                 <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
//                   {service.title}
//                 </h3>
//                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
//                   {service.description} We specialize in architecting complex, high-availability environments that prioritize long-term scalability and absolute data security.
//                 </p>
//               </div>

//               <div className="flex items-center gap-6 pt-6">
//                 <button
//                   onClick={() => onServiceSelect?.(service.id)}
//                   className="px-10 py-4 bg-[#2E1CFF] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95"
//                 >
//                   View Practice Area
//                 </button>
//               </div>
//             </div>

//             {/* Visual Element */}
//             <div className="flex-1 w-full relative cursor-pointer" onClick={() => onServiceSelect?.(service.id)}>
//               <div className="aspect-[16/11] bg-slate-100 rounded-[3rem] overflow-hidden group shadow-3xl shadow-slate-200">
//                  <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//                  />
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       Conversion Section - Final Push
//       <section className="max-w-7xl mx-auto px-6 mt-48">
//         <div className="bg-[#2E1CFF] rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-600/20">
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30" />
//           <div className="relative z-10 max-w-3xl mx-auto">
//             <h3 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight">Ready to architect your digital future?</h3>
//             <p className="text-blue-100 text-lg mb-12 font-medium opacity-80">
//               Join the world's leading organizations in building high-performance, resilient data ecosystems.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <button className="bg-white text-[#2E1CFF] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
//                 Schedule a Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Conversion Section – Motion Enhanced */}
// <section className="max-w-7xl mx-auto px-6 mt-48">
//   <div
//     data-cta
//     className="bg-[#2E1CFF] rounded-[4rem] px-12 py-20 lg:px-28 lg:py-28 text-center text-white shadow-2xl"
//   >
//     <div className="max-w-3xl mx-auto">

//       <p
//         data-cta-eyebrow
//         className="text-[10px] font-black uppercase tracking-[0.45em] text-white/70 mb-6"
//       >
//         Strategic Consulting
//       </p>

//       <h3
//         data-cta-title
//         className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-8"
//       >
//         Ready to architect your
//         <span className="block text-white/80">digital future?</span>
//       </h3>

//       <p
//         data-cta-text
//         className="text-white/80 text-lg leading-relaxed font-medium mb-12"
//       >
//         Work directly with senior engineers and architects to design secure,
//         scalable, and future-ready technology platforms.
//       </p>

//       <div data-cta-actions className="flex flex-col sm:flex-row justify-center gap-6">
//         <button
//           onClick={openCalendlyPopup}
//           className="bg-white text-[#2E1CFF] px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] hover:bg-blue-50 transition-all active:scale-95"
//         >
//           Schedule a Consultation
//         </button>

//         <button className="border border-white/30 px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] text-white hover:bg-white/10 transition-all active:scale-95">
//           View Case Studies
//         </button>
//       </div>

//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// export default ServicesPage;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { SERVICES } from "../constants";

// /* ===============================
//    Calendly Type Declaration
// ================================ */
// declare global {
//   interface Window {
//     Calendly?: {
//       initPopupWidget: (options: { url: string }) => void;
//     };
//   }
// }

// const ServicesPage: React.FC = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   /* ===============================
//      Load Calendly Script
//   ================================ */
//   useEffect(() => {
//     const scriptId = "calendly-widget-script";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   const openCalendlyPopup = () => {
//     window.Calendly?.initPopupWidget({
//       url: "https://calendly.com/zenydata-sales/30min",
//     });
//   };

//   return (
//     <div className="bg-white min-h-screen pt-32 pb-24">

//       {/* ===============================
//          PAGE HERO
//       ================================ */}
//       <section className="max-w-7xl mx-auto px-6 mb-40 relative">
//         <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>

//         <div className="max-w-4xl">
//           <div className="inline-flex items-center gap-4 text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
//             <span className="w-12 h-[1px] bg-blue-600"></span>
//             Full Engineering Hub
//           </div>

//           <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-950 mb-12 leading-[1] tracking-tight">
//             Comprehensive <br />
//             <span className="text-slate-400">Digital Solutions</span>.
//           </h1>

//           <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
//             Browse our core engineering disciplines. Each practice area is led by
//             world-class specialists dedicated to operational excellence.
//           </p>
//         </div>
//       </section>

//       {/* ===============================
//          SERVICES – ALTERNATING LAYOUT
//       ================================ */}
//       <section className="max-w-7xl mx-auto px-6 grid gap-48">
//         {SERVICES.map((service, idx) => (
//           <div
//             key={service.id}
//             className={`flex flex-col lg:flex-row items-center gap-20 ${
//               idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             {/* TEXT */}
//             <div className="flex-1 space-y-10">
//               <div className="space-y-6">
//                 <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center p-5 shadow-2xl shadow-slate-900/20 hover:bg-[#2E1CFF] transition-colors duration-500">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-full h-full object-contain brightness-0 invert"
//                   />
//                 </div>

//                 <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
//                   {service.title}
//                 </h3>

//                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
//                   {service.description} We specialize in architecting complex,
//                   high-availability environments that prioritize long-term
//                   scalability and absolute data security.
//                 </p>
//               </div>

//               <div className="flex items-center gap-6 pt-6">
//                 <button
//                   onClick={() => navigate(`/services/${service.id}`)}
//                   className="px-10 py-4 bg-[#2E1CFF] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95"
//                 >
//                   View Practice Area
//                 </button>
//               </div>
//             </div>

//             {/* IMAGE */}
//             <div
//               className="flex-1 w-full relative cursor-pointer"
//               onClick={() => navigate(`/services/${service.id}`)}
//             >
//               <div className="aspect-[16/11] bg-slate-100 rounded-[3rem] overflow-hidden group shadow-3xl shadow-slate-200">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* ===============================
//          CTA – MOTION READY
//       ================================ */}
//       <section className="max-w-7xl mx-auto px-6 mt-48">
//         <div className="bg-[#2E1CFF] rounded-[4rem] px-12 py-20 lg:px-28 lg:py-28 text-center text-white shadow-2xl relative overflow-hidden">
//           <div className="max-w-3xl mx-auto relative z-10">

//             <p className="text-[10px] font-black uppercase tracking-[0.45em] text-white/70 mb-6">
//               Strategic Consulting
//             </p>

//             <h3 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-8">
//               Ready to architect your
//               <span className="block text-white/80">digital future?</span>
//             </h3>

//             <p className="text-white/80 text-lg leading-relaxed font-medium mb-12">
//               Work directly with senior engineers and architects to design
//               secure, scalable, and future-ready technology platforms.
//             </p>

//             <div className="flex flex-col sm:flex-row justify-center gap-6">
//               <button
//                 onClick={openCalendlyPopup}
//                 className="bg-white text-[#2E1CFF] px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] hover:bg-blue-50 transition-all active:scale-95"
//               >
//                 Schedule a Consultation
//               </button>

//               <button className="border border-white/30 px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] text-white hover:bg-white/10 transition-all active:scale-95">
//                 View Case Studies
//               </button>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;

// ---------------------------------------------------------------------------------------------------
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { SERVICES } from "../constants";
// import { motion } from "framer-motion";

// /* ===============================
//    Motion Variants (Premium)
// ================================ */
// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const fadeSide = (dir: "left" | "right") => ({
//   hidden: { opacity: 0, x: dir === "left" ? -80 : 80 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
//   },
// });

// const hoverLift = {
//   whileHover: {
//     y: -8,
//     scale: 1.02,
//     transition: { type: "spring", stiffness: 280, damping: 22 },
//   },
// };

// const ServicesPage: React.FC = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">
//       {/* ===============================
//          HERO SECTION
//       ================================ */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={container}
//         className="max-w-7xl mx-auto px-6 mb-40 relative"
//       >
//         <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] opacity-60" />

//         <motion.div variants={fadeUp} className="max-w-4xl">
//           <div className="inline-flex items-center gap-4 text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px] mb-8">
//             <span className="w-12 h-[1px] bg-[#2E1CFF]" />
//             Full Engineering Hub
//           </div>

//           <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-950 mb-12 leading-[1] tracking-tight">
//             <motion.span variants={fadeUp} className="block">
//               Comprehensive
//             </motion.span>
//             <motion.span variants={fadeUp} className="block text-slate-400">
//               Digital Solutions.
//             </motion.span>
//           </h1>

//           <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
//             Browse our core engineering disciplines. Each practice area is led by
//             world-class specialists dedicated to operational excellence.
//           </p>
//         </motion.div>
//       </motion.section>

//       {/* ===============================
//          SERVICES LIST
//       ================================ */}
//       <section className="max-w-7xl mx-auto px-6 grid gap-48">
//         {SERVICES.map((service, idx) => (
//           <motion.div
//             key={service.id}
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-120px" }}
//             className={`flex flex-col lg:flex-row items-center gap-20 ${
//               idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//           >
//             {/* TEXT */}
//             <motion.div
//               variants={fadeSide(idx % 2 !== 0 ? "right" : "left")}
//               className="flex-1 space-y-10"
//             >
//               <div className="space-y-6">
//                 <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center p-5 shadow-2xl shadow-slate-900/20 hover:bg-[#2E1CFF] transition-colors duration-500">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-full h-full object-contain brightness-0 invert"
//                   />
//                 </div>

//                 <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
//                   {service.title}
//                 </h3>

//                 <p className="text-lg text-slate-600 leading-relaxed font-medium">
//                   {service.description} We specialize in architecting complex,
//                   high-availability environments that prioritize long-term
//                   scalability and absolute data security.
//                 </p>
//               </div>

//               <motion.button
//                 {...hoverLift}
//                 onClick={() => navigate(`/services/${service.id}`)}
//                 className="px-10 py-4 bg-[#2E1CFF] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95"
//               >
//                 View Practice Area
//               </motion.button>
//             </motion.div>

//             {/* IMAGE */}
//             <motion.div
//               variants={fadeSide(idx % 2 !== 0 ? "left" : "right")}
//               {...hoverLift}
//               className="flex-1 w-full relative cursor-pointer"
//               onClick={() => navigate(`/services/${service.id}`)}
//             >
//               <div className="aspect-[16/11] bg-slate-100 rounded-[3rem] overflow-hidden shadow-3xl shadow-slate-200 group">
//                 <motion.img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover grayscale"
//                   whileHover={{
//                     scale: 1.08,
//                     filter: "grayscale(0%)",
//                   }}
//                   transition={{ duration: 1, ease: "easeOut" }}
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </section>

//       {/* ===============================
//          CTA SECTION
//       ================================ */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.96 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//         className="max-w-7xl mx-auto px-6 mt-48"
//       >
//         <div className="bg-[#2E1CFF] rounded-[4rem] px-12 py-20 lg:px-28 lg:py-28 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-600/30">
//           <motion.div
//             className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/15 to-transparent"
//             animate={{ opacity: [0.4, 0.7, 0.4] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />

//           <div className="relative z-10 max-w-3xl mx-auto">
//             <p className="text-[10px] font-black uppercase tracking-[0.45em] text-white/70 mb-6">
//               Strategic Consulting
//             </p>

//             <h3 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight">
//               Ready to architect your
//               <span className="block text-white/80">
//                 digital future?
//               </span>
//             </h3>

//             <p className="text-blue-100 text-lg mb-12 font-medium opacity-80">
//               Work directly with senior engineers and architects to design
//               secure, scalable, and future-ready platforms.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.06 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-[#2E1CFF] px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px]"
//               >
//                 Schedule a Consultation
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border border-white/30 px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] text-white hover:bg-white/10 transition-all"
//               >
//                 View Case Studies
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default ServicesPage;
// -------------------------------------------------------------------------------------------------------

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../constants";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

/* ===============================
   PREMIUM MOTION SYSTEM
================================ */
const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

const fadeSide = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -120 : 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease },
  },
});



/* ===============================
   MAGNETIC BUTTON
================================ */
const Magnetic: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

/* ===============================
   PAGE
================================ */
const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => window.scrollTo(0, 0), []);
  /* ===============================
     Load Calendly Once
  ================================ */
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  /* ===============================
     Calendly Handler
  ================================ */
  const openCalendlyPopup = () => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/zenydata-sales/30min",
    });
  };

  /* Scroll-driven hero parallax */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* ===============================
         HERO
      ================================ */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-48 max-w-7xl mx-auto px-6"
      >
        {/* Brand glow */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-[#2E1CFF]/20 rounded-full blur-[160px]"
        />

        <motion.div style={{ y: heroY }} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-4 text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px] mb-8">
              <span className="w-12 h-[1px] bg-[#2E1CFF]" />
              Full Engineering Hub
            </div>

            <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-950 mb-12 leading-[1] tracking-tight">
              <span className="block">Comprehensive</span>
              <span className="block text-slate-400">Digital Solutions.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              Browse our core engineering disciplines. Each practice area is led
              by world-class specialists dedicated to operational excellence.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ===============================
         SERVICES
      ================================ */}
      <section className="max-w-7xl mx-auto px-6 grid gap-56 pb-64">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-180px" }}
            className={`flex flex-col lg:flex-row items-center gap-24 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              variants={fadeSide(idx % 2 !== 0 ? "right" : "left")}
              className="flex-1 space-y-10"
            >
              <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center p-5 shadow-2xl shadow-slate-900/20">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>

              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
                {service.title}
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                {service.description} We specialize in architecting complex,
                high-availability environments that prioritize long-term
                scalability and absolute data security.
              </p>

              {/* <Magnetic
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="px-12 py-4 bg-[#2E1CFF] text-white rounded-xl text-[11px] font-bold uppercase tracking-[0.25em] shadow-xl shadow-blue-600/30">
                  View Practice Area
                </div>
              </Magnetic> */}

              <button
                onClick={() => navigate(`/services/${service.id}`)}
                className="
    bg-[#2E1CFF]
    text-white
    px-12
    py-4
    rounded-2xl
    font-black
    uppercase
    tracking-[0.25em]
    text-[11px]
    transition-all
    duration-300 ease-out
    hover:bg-blue-600
    hover:-translate-y-1
    active:scale-95
    shadow-3xl
    shadow-blue-900/40
  "
              >
                Read More
              </button>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              variants={fadeSide(idx % 2 !== 0 ? "left" : "right")}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.2, ease }}
              className="flex-1 w-full relative cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="absolute inset-0 rounded-[3rem] bg-[#2E1CFF]/10 blur-3xl" />

              <div className="relative aspect-[16/11] rounded-[3rem] overflow-hidden shadow-3xl shadow-slate-200">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale"
                  whileHover={{
                    scale: 1.1,
                    filter: "grayscale(0%)",
                  }}
                  transition={{ duration: 1.4, ease }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* ===============================
         CTA
      ================================ */}
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
        className="max-w-7xl mx-auto px-6 pb-48"
      >
        <div className="bg-[#2E1CFF] rounded-[4rem] px-16 py-24 text-center text-white relative overflow-hidden shadow-3xl shadow-blue-600/40">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.45em] text-white/70 mb-6">
              Strategic Consulting
            </p>

            <h3 className="text-4xl lg:text-6xl font-extrabold mb-10 leading-tight">
              Ready to architect your
              <span className="block text-white/80">digital future?</span>
            </h3>

            <p className="text-blue-100 text-lg mb-14 font-medium opacity-80">
              Work directly with senior engineers and architects to design
              secure, scalable, and future-ready platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Magnetic
                onClick={openCalendlyPopup}
                >
                <div 
                   
                  className="bg-white text-[#2E1CFF] px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px]">
                  Schedule a Consultation
                </div>
              </Magnetic>

              <Magnetic
              onClick={() => navigate("/insights")}
                >
                <div className="border border-white/30 px-14 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] text-white hover:bg-white/10 transition-all">
                  View Case Studies
                </div>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
