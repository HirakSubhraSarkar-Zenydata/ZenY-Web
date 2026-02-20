// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Services from "./components/Services";
// import Industries from "./components/Industries";
// import Insights from "./components/Insights";
// import Footer from "./components/Footer";
// import ServicesPage from "./components/ServicesPage";
// import ServiceDetailPage from "./components/ServiceDetailPage";
// import CaseStudies from "./components/CaseStudies";
// import CaseStudyDetailPage from "./components/CaseStudyDetailPage";
// import PartnerPage from "./components/PartnerPage";
// import InsightsHub from "./components/InsightsHub";
// import InsightDetailPage from "./components/InsightDetailPage";
// import AboutPage from "./components/AboutPage";
// import DataLabPage from "./components/DataLabPage";
// import AssociationsPage from "./components/AssociationsPage";

// const DataTicker = () => (
//   <section className="bg-slate-950 text-white py-6 overflow-hidden border-y border-slate-800">
//     <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
//       <div className="flex items-center gap-4">
//         <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
//           Global Ingestion
//         </div>
//         <div className="text-xl font-bold font-mono tracking-tighter">
//           1.2 PB<span className="text-slate-500 ml-1">/day</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em]">
//           Active Pipelines
//         </div>
//         <div className="text-xl font-bold font-mono tracking-tighter">
//           4,820+
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
//           Uptime Metric
//         </div>
//         <div className="text-xl font-bold font-mono tracking-tighter">
//           99.9997%
//         </div>
//       </div>
//       <div className="hidden lg:flex items-center gap-4">
//         <div className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em]">
//           Security Blocked
//         </div>
//         <div className="text-xl font-bold font-mono tracking-tighter">14M+</div>
//       </div>
//     </div>
//   </section>
// );

// export type ViewState =
//   | "home"
//   | "services-hub"
//   | "service-detail"
//   | "case-study-detail"
//   | "partner"
//   | "insights-hub"
//   | "insight-detail"
//   | "about"
//   | "data-lab"
//   | "associations";

// function App() {
//   const [currentView, setCurrentView] = useState<ViewState>("home");
//   const [activeId, setActiveId] = useState<string | undefined>(undefined);

//   const navigateTo = (view: ViewState, id?: string) => {
//     setCurrentView(view);
//     setActiveId(id);
//     window.scrollTo(0, 0);
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case "home":
//         return (
//           <>
//             <Hero navigateTo={navigateTo} />
//             <DataTicker />
//             <Stats />

// <section id="about-us" className="py-24 bg-white overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid lg:grid-cols-2 gap-20 items-center">
//       <div className="relative">
//         <h2 className="text-[#2E1CFF] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
//           Our Data Thesis
//         </h2>
//         <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8">
//           Where Petabytes Meet{" "}
//           <span className="text-[#2E1CFF]">Strategic Clarity</span>
//         </h3>
//         <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
//           Data isn't just an asset; it's the nervous system of the
//           modern enterprise. Zenydata Technologies engineers the
//           high-performance pipelines that turn raw chaos into
//           boardroom decisions.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {[
//             "Distributed Ledger Compliance",
//             "Real-time Behavioral Mapping",
//             "Predictive Failure Analysis",
//             "Quantum-Ready Encryption",
//           ].map((feat, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 group cursor-default"
//             >
//               <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#2E1CFF] text-[10px] font-bold group-hover:bg-[#2E1CFF] group-hover:text-white transition-colors border border-blue-100">
//                 ✓
//               </div>
//               <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">
//                 {feat}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="relative">
//         <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-3xl border border-slate-100 group">
//           <img
//             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
//             alt="Data analysis visualization"
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
//           />
//         </div>
//         <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hidden xl:block">
//           <div className="text-3xl font-black text-[#2E1CFF] mb-1">
//             94%
//           </div>
//           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
//             Efficiency Increase
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//             <Services
//               onViewAll={() => navigateTo("services-hub")}
//               onServiceSelect={(id) => navigateTo("service-detail", id)}
//             />

//             {/* <CaseStudies
//               onSelect={(id) => navigateTo("case-study-detail", id)}
//             /> */}

//             <Industries />
//             <Insights
//               onViewAll={() => navigateTo("insights-hub")}
//               onSelect={(id) => navigateTo("insight-detail", id)}
//             />

// <section className="py-24 bg-[#2E1CFF] text-white relative overflow-hidden">
//   <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
//     <blockquote className="text-3xl lg:text-4xl font-extrabold leading-tight mb-8 italic">
//       "Zenydata redefined our entire data lifecycle. What took 4
//       days of manual auditing now takes 8 milliseconds of automated
//       validation."
//     </blockquote>
//     <p className="text-blue-200 font-bold uppercase tracking-[0.4em] text-[10px]">
//       Director of Engineering, Fortune 50 Financial Services
//     </p>
//   </div>
//   <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
// </section>
//           </>
//         );
//       case "services-hub":
//         return (
//           <ServicesPage
//             onServiceSelect={(id) => navigateTo("service-detail", id)}
//           />
//         );
//       case "service-detail":
//         return activeId ? (
//           <ServiceDetailPage serviceId={activeId} />
//         ) : (
//           <ServicesPage
//             onServiceSelect={(id) => navigateTo("service-detail", id)}
//           />
//         );
//       case "case-study-detail":
//         return activeId ? <CaseStudyDetailPage studyId={activeId} /> : null;
//       case "partner":
//         return <PartnerPage />;
//       case "insights-hub":
//         return (
//           <InsightsHub onSelect={(id) => navigateTo("insight-detail", id)} />
//         );
//       case "insight-detail":
//         return activeId ? <InsightDetailPage insightId={activeId} /> : null;
//       case "about":
//         return <AboutPage />;
//       case "data-lab":
//         return <DataLabPage />;
//       case "associations":
//         return <AssociationsPage />;
//       default:
//         return <Hero navigateTo={navigateTo} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col">
//       <Navbar onNavigate={navigateTo} />
//       <main className="flex-grow">{renderContent()}</main>
//       <Footer onNavigate={navigateTo} />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import CaseStudyDetailPage from "./components/CaseStudyDetailPage";
import PartnerPage from "./components/PartnerPage";
import InsightsHub from "./components/InsightsHub";
import InsightDetailPage from "./components/InsightDetailPage";
import AboutPage from "./components/AboutPage";
import DataLabPage from "./components/DataLabPage";
import AssociationsPage from "./components/AssociationsPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";


 

const DataTicker = () => (
  
  
  <section className="bg-slate-950 text-white py-6 overflow-hidden border-y border-slate-800">
    <motion.div
      className="max-w-7xl mx-auto px-6 flex items-center gap-16 whitespace-nowrap"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 30, // ⬅ slower = more premium
        ease: "linear",
      }}
    >
      {/* ===== DUPLICATED CONTENT FOR SEAMLESS LOOP ===== */}
      {[1, 2].map((_, loopIndex) => (
        <div key={loopIndex} className="flex items-center gap-16 shrink-0">
          <div className="flex items-center gap-4">
            <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Global Ingestion
            </div>
            <div className="text-xl font-bold font-mono tracking-tighter">
              1.2 PB<span className="text-slate-500 ml-1">/day</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Active Pipelines
            </div>
            <div className="text-xl font-bold font-mono tracking-tighter">
              4,820+
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Uptime Metric
            </div>
            <div className="text-xl font-bold font-mono tracking-tighter">
              99.9997%
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Security Blocked
            </div>
            <div className="text-xl font-bold font-mono tracking-tighter">
              14M+
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

const HomePage = () => {
  const navigate = useNavigate();
  /* Calendly script */
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    (window as any).Calendly?.initPopupWidget({
      url: "https://calendly.com/zenydata-sales/30min",
    });
  };

  return (

  
  <>
  
    <Hero />
    <DataTicker />
    <Stats />

    {/* ABOUT SECTION */}
    {/* (unchanged content from your home view) */}
    <section id="about-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <h2 className="text-[#2E1CFF] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
              Our Data Thesis
            </h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Where Petabytes Meet{" "}
              <span className="text-[#2E1CFF]">Strategic Clarity</span>
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
              Data isn't just an asset; it's the nervous system of the modern
              enterprise. Zenydata Technologies engineers the high-performance
              pipelines that turn raw chaos into boardroom decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Distributed Ledger Compliance",
                "Real-time Behavioral Mapping",
                "Predictive Failure Analysis",
                "Quantum-Ready Encryption",
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#2E1CFF] text-[10px] font-bold group-hover:bg-[#2E1CFF] group-hover:text-white transition-colors border border-blue-100">
                    ✓
                  </div>
                  <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-3xl border border-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Data analysis visualization"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hidden xl:block">
              <div className="text-3xl font-black text-[#2E1CFF] mb-1">94%</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Efficiency Increase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services />

    <section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 pb-48"
      >
        <div className="relative group rounded-[4rem] overflow-hidden bg-[#2E1CFF] shadow-3xl shadow-blue-600/20">
          {/* THE VISUAL LAYER: High-End Background Video or GIF */}
          {/* Suggestion: Use a "Black Hole/Warp" or "Liquid Silk" video in blue tones */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out"
            >
              <source
                src="https://vimeo.com/60516236?fl=pl&fe=cm"
                type="video/mp4"
              />
            </video>

            {/* Subtle Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1CFF] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#2E1CFF_100%)] opacity-40" />
          </div>

          {/* THE CONTENT LAYER */}
          <div className="relative z-10 px-8 py-24 lg:py-32 flex flex-col items-center text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-8 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">
                Limited Intake 2026
              </span>
            </motion.div>

            <h3 className="text-5xl lg:text-8xl font-bold mb-12 leading-[0.9] tracking-tight text-white">
              Ready to architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                your data future?
              </span>
            </h3>

            <p className="max-w-2xl text-blue-100/80 text-lg lg:text-xl mb-16 font-light leading-relaxed">
              We don't just help enterprise; we engineer legacy systems. Join
              our exclusive partner list for Q3/Q4.
            </p>

            {/* BUTTON SYSTEM */}
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <button 
              onClick={openCalendlyPopup}
                className="relative overflow-hidden group/btn bg-white text-[#2E1CFF] px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10">
                  Book your free Consultation
                </span>
                {/* Internal slide effect */}
                <div className="absolute inset-0 bg-slate-100 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>

              <button 
              onClick={() => navigate("/insights")}
                className="group/secondary flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/secondary:bg-white group-hover/secondary:text-[#2E1CFF] transition-all duration-500">
                  →
                </div>
                View Case Studies
              </button>
            </div>
          </div>

          {/* DECORATIVE CORNER ELEMENT */}
          <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
      </motion.section>
    </section>

    <Industries />
    <Insights />
    <section className="py-24 bg-[#2E1CFF] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <blockquote className="text-3xl lg:text-4xl font-extrabold leading-tight mb-8 italic">
          "Zenydata redefined our entire data lifecycle. What took 4 days of
          manual auditing now takes 8 milliseconds of automated validation."
        </blockquote>
        <p className="text-blue-200 font-bold uppercase tracking-[0.4em] text-[10px]">
          Director of Engineering, Fortune 50 Financial Services
        </p>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
    </section>

    {/* TESTIMONIAL */}
    {/* unchanged */}
  </>
);
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />

            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />

            <Route path="/partners" element={<PartnerPage />} />

            <Route path="/insights" element={<InsightsHub />} />
            <Route path="/insights/:id" element={<InsightDetailPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/data-lab" element={<DataLabPage />} />
            <Route path="/associations" element={<AssociationsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
