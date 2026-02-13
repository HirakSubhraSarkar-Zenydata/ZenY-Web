import React, { useEffect } from "react";
import { SERVICES } from "../constants";
import { ServiceCard } from "../types";

/* ===============================
   Calendly Type Declaration
================================ */
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface ServiceDetailPageProps {
  serviceId: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const service = SERVICES.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  /* ===============================
     Load Calendly Script Once
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

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-400">
            Service Not Found
          </h2>
          <p className="text-slate-500 mt-2">
            The requested engineering practice could not be located.
          </p>
        </div>
      </div>
    );

    

   /* ===============================
     Calendly Popup Handler
  ================================ */
  const openCalendlyPopup = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/zenydata-sales/30min",
      });
    } else {
      console.warn("Calendly widget not ready yet.");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Immersive Dynamic Header */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10 animate-in slide-in-from-left-4">
            <div className="inline-flex items-center gap-4">
              <span className="w-16 h-[1px] bg-[#2E1CFF]"></span>
              <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px]">
                Strategic Engineering Practice
              </span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter">
              {service.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === service.title.split(" ").length - 1
                      ? "text-slate-400 block lg:inline"
                      : "block lg:inline mr-4"
                  }
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
              {service.longDescription || service.description}
            </p>
            <div className="flex flex-wrap gap-6 pt-6">
              <button className="bg-[#2E1CFF] text-white px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-3xl shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
                Brief Our Strategy Team
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-900 px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95">
                Practice Framework
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative group animate-in slide-in-from-bottom-8">
            <div className="aspect-[5/4] rounded-[4rem] overflow-hidden shadow-4xl shadow-slate-200/50">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
            {/* Contextual Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-slate-950 p-10 rounded-[2.5rem] shadow-3xl border border-white/5 hidden lg:block hover:scale-105 transition-transform">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.4503-.321l-9 6a1 1 0 00.402 1.768h7.459L8.41 17.447a1 1 0 001.453.321l9-6a1 1 0 00-.402-1.768h-7.459l1.393-4.447z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-blue-400 font-black text-4xl leading-none">
                    99.9%
                  </div>
                  <div className="text-white text-[9px] font-bold uppercase tracking-[0.3em] mt-2 opacity-50">
                    Enterprise Reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Features Carousel / Grid */}
      <section className="bg-slate-50 py-32 mb-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-6">
                Execution Pillars
              </h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
                Architecting for{" "}
                <span className="text-slate-400 italic">
                  Unmatched Velocity
                </span>
                .
              </h3>
            </div>
            <div className="text-slate-500 font-medium text-lg max-w-sm">
              Our multidisciplinary teams apply rigorous engineering principles
              to every stage of the lifecycle.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features?.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2E1CFF] transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-[#2E1CFF] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-4 tracking-tight leading-tight">
                  {feature}
                </h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Engineered to meet the highest global standards for
                  throughput, security, and scalability in{" "}
                  {service.title.toLowerCase()} environments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - High End Visuals */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#2E1CFF] mb-6">
                Our Delivery Philosophy
              </h2>
              <h3 className="text-5xl font-extrabold text-slate-950 leading-[1.1]">
                The Roadmap to <br /> Operational{" "}
                <span className="text-slate-400">Zen</span>.
              </h3>
            </div>
            <div className="space-y-12">
              {service.methodology?.map((m, i) => (
                <div key={i} className="flex gap-10 group cursor-default">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500">
                      0{i + 1}
                    </div>
                    <div className="w-[2px] flex-grow bg-slate-50 mt-4"></div>
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-[#2E1CFF] transition-colors">
                      {m.step}
                    </h5>
                    <p className="text-slate-500 font-medium leading-relaxed text-lg">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#2E1CFF] p-16 lg:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-4xl shadow-blue-600/30 group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full transition-all group-hover:bg-white/20"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-900/40 blur-[100px] rounded-full"></div>

              <div className="relative z-10 space-y-12">
                <svg
                  className="w-16 h-16 text-blue-300 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v8l-4 4v-12h4zm16 0v8l-4 4v-12h4z"></path>
                </svg>
                <h4 className="text-3xl lg:text-4xl font-extrabold italic leading-tight tracking-tight">
                  "Zenydata's {service.title} approach didn't just solve our
                  immediate issues; it fundamentally changed how our leadership
                  perceives technology."
                </h4>
                <div className="flex items-center gap-6 pt-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center font-black text-xl">
                    VP
                  </div>
                  <div>
                    <div className="font-black text-sm uppercase tracking-[0.2em]">
                      VP of Engineering
                    </div>
                    <div className="text-[10px] text-blue-200 uppercase font-black tracking-[0.4em] mt-1">
                      Global Logistics Leader
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="max-w-auto mx-auto px-6 text-center bg-slate-50">
        <div className="py-24 border-y border-slate-100 space-y-10">
          <h3 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Ready to evolve your <br />
            <span className="text-[#2E1CFF]">
              {service.title.toLowerCase()}
            </span>{" "}
            ecosystems?
          </h3>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Our specialized {service.title.toLowerCase()} experts are ready to
            audit your current architecture and deliver a strategic growth plan.
          </p>
          <div className="flex justify-center gap-6 pt-6">
            <button 
            onClick={openCalendlyPopup}
            className="bg-slate-950 text-white px-14 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#2E1CFF] transition-all shadow-4xl active:scale-95">
              Consult with Domain Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
