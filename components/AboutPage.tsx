import React, { useEffect } from "react";
import { ADVISORS, LEADERSHIP } from "../constants";
import { useParams } from "react-router-dom";

const AboutPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen pt-40 pb-32 bg-white">
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

      {/* Leadership Section */}
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

      {/* Advisory Board Section */}
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

      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#2E1CFF]/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-6">
              Our Edge
            </span>
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter">
              What Makes Zenydata Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Engineering-First DNA",
                desc: "Every decision starts and ends with code quality, performance, and maintainability.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
              },
              {
                title: "Radical Speed",
                desc: "Production-grade systems delivered in weeks — without chaos.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Ownership Culture",
                desc: "Engineers own outcomes end-to-end, from architecture to production.",
                img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
              },
              {
                title: "Zero Legacy Debt",
                desc: "Every line of code is written with 5–10 year horizons in mind.",
                img: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Radical Transparency",
                desc: "Real-time dashboards and open architecture reviews.",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
              },
              {
                title: "Human-Centric Excellence",
                desc: "Exceptional engineering starts with exceptional people.",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[420px] lg:h-[460px]
                rounded-[2.75rem] overflow-hidden bg-slate-950
                border border-slate-800/40
                shadow-[0_40px_120px_-40px_rgba(46,28,255,0.35)]
                transition-all duration-[900ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:shadow-[0_70px_180px_-40px_rgba(46,28,255,0.6)]
                hover:border-[#2E1CFF]/40"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover
                  scale-105 group-hover:scale-110
                  transition-transform duration-[1200ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-[#2E1CFF]/35 via-transparent
                  transition-opacity duration-[900ms]"
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end px-10 pb-12">
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <div
                    className="mt-4 h-px w-12 bg-[#2E1CFF]/70
                    scale-x-75 group-hover:scale-x-100
                    origin-left transition-transform duration-700"
                  />

                  <p
                    className="mt-6 text-white/90 text-lg leading-relaxed
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-700 delay-150"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-3xl lg:text-4xl font-black italic text-white/90 max-w-5xl mx-auto">
              We are not another consulting firm.
              <br />
              We are the engineering partner you wish you had met earlier.
            </p>
          </div>
        </div>
      </section>

      {/* Our Culture Section – smaller cards */}
      <section className="py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block mb-5">
              How We Live & Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-950">
              Our Culture
            </h2>
            <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are builders, thinkers, and relentless learners — driven by
              curiosity, ownership, and the belief that exceptional engineering
              begins with exceptional people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Growth Mindset",
                desc: "We embrace challenges, persist in the face of setbacks, and find lessons in the success of others.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Work-Life Balance",
                desc: "We believe in taking time to recharge so that we can bring our best selves to work.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Continuous Learning",
                desc: "We invest in professional development and encourage exploration of new skills and technologies.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                title: "Community Impact",
                desc: "We dedicate time and resources to giving back to the communities where we live and work.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM6 5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Recognition",
                desc: "We celebrate achievements both big and small, acknowledging the contributions of every team member.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
              },
              {
                title: "Creative Expression",
                desc: "We foster an environment where creative thinking is encouraged and new ideas are welcomed.",
                svg: (
                  <svg
                    className="w-10 h-10 text-[#2E1CFF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7H9"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:border-[#2E1CFF]/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {item.svg}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm lg:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-20 text-center">
            <p className="text-2xl lg:text-3xl font-medium italic text-slate-700 max-w-4xl mx-auto leading-relaxed">
              "We don’t just build technology. We build trust, capability, and
              long-term advantage — together."
            </p>
            <p className="mt-6 text-slate-500 font-medium">
              — The Zenydata Collective
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
