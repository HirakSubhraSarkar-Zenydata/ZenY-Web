import React from "react";
import { ADVISORS, LEADERSHIP } from "../constants";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">
              Global Engineering Firm
            </span>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter">
              Engineering <br />
              <span className="text-slate-400">Human Potential</span>.
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Founded in 2023, Zenydata Technologies was built on a singular
              premise: the delta between data and wisdom is high-performance
              engineering.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-100 rounded-[4rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale"
                alt="Team"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2.5rem] shadow-3xl border border-slate-50 text-center">
              <div className="text-4xl font-black text-slate-900">14</div>
              <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">
                Global Research Hubs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Nityananda Nath */}
      <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/3 shrink-0">
              <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-4xl group">
                <img
                  src={LEADERSHIP[0].image}
                  alt={LEADERSHIP[0].name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
            <div className="lg:w-2/3 space-y-10">
              <div className="space-y-4">
                <span className="text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px] block">
                  Director's Vision
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none">
                  {LEADERSHIP[0].name}
                </h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  {LEADERSHIP[0].role}
                </p>
              </div>

              <div className="relative">
                <svg
                  className="absolute -top-10 -left-10 w-24 h-24 text-blue-200/50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v8l-4 4v-12h4zm16 0v8l-4 4v-12h4z"></path>
                </svg>
                <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 leading-relaxed italic relative z-10">
                  {LEADERSHIP[0].quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section - Avishek Mitra */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] block mb-6">
              Strategic Governance
            </span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              Our Advisory Board
            </h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 group hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="shrink-0 w-48 h-48 lg:w-64 lg:h-64 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 group-hover:border-blue-500/30 transition-all">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white">
                      {advisor.name}
                    </h3>
                    <p className="text-[#2E1CFF] font-black uppercase tracking-[0.3em] text-[11px] mt-2">
                      {advisor.role}
                    </p>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
                    "{advisor.bio}"
                  </p>
                  <div className="pt-4 flex justify-center md:justify-start">
                    <button className="text-white font-black uppercase tracking-widest text-[9px] flex items-center gap-3 hover:text-blue-400 transition-colors">
                      Full Executive Profile <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight uppercase">
                Integrity
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We operate with radical transparency, ensuring that our
                architectural decisions prioritize your enterprise's long-term
                health over short-term gains.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight uppercase">
                Velocity
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Our agile frameworks are designed to bypass corporate inertia
                and deliver production-grade systems in record cycles.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight uppercase">
                Precision
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We don't believe in 'good enough'. Our engineering practice is
                rooted in sub-millisecond optimization and SOC2 compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
