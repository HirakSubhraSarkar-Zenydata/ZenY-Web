import React from "react";
import Logo from "./Logo";
import { ViewState } from "../App";

interface FooterProps {
  onNavigate: (view: ViewState, id?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#020617] text-white pt-32 pb-12 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Pre-Footer Call to Action */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 border-b border-white/5 pb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Ready to engineer your{" "}
              <span className="text-[#2E1CFF]">competitive edge</span>?
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Partner with Zenydata to build high-performance, resilient data
              ecosystems that drive global impact.
            </p>
          </div>
          <div className="flex shrink-0">
            <button
              onClick={() => onNavigate("partner")}
              className="bg-[#2E1CFF] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-3xl shadow-blue-900/40 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-10">
            <button
              onClick={() => onNavigate("home")}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo light={true} />
            </button>
            <p className="text-slate-400 leading-relaxed text-base font-medium max-w-sm">
              Architecting tomorrow's cognitive enterprises. We combine deep
              domain expertise with cutting-edge engineering to solve the
              world's most complex data challenges.
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                },
                {
                  name: "X",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  name: "YouTube",
                  icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-[#2E1CFF] transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-2 space-y-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Solutions
            </h5>
            <ul className="space-y-4">
              {[
                { label: "Data Engineering", id: "data-product" },
                { label: "AI & ML Ops", id: "ai-ml-ops" },
                { label: "Cloud Strategy", id: "cloud-data-platform" },
                { label: "Digital Integration", id: "digital-integration" },
                { label: "App Development", id: "software-development" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate("service-detail", item.id)}
                    className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights & Lab */}
          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Intelligence
            </h5>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onNavigate("insights-hub")}
                  className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                >
                  Insights & Whitepapers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("data-lab")}
                  className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                >
                  The Data Lab (R&D)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("associations")}
                  className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                >
                  Global Associations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("partner")}
                  className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                >
                  Partner Program
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3 space-y-8">
            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
              Global Hub
            </h5>
            <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => onNavigate("about")}
                    className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] hover:translate-x-1 transition-all duration-300"
                  >
                    About Zenydata
                  </button>
                </li>
                <li>
                  <button className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] transition-all">
                    Leadership
                  </button>
                </li>
                <li>
                  <button className="text-slate-400 font-bold text-sm hover:text-[#2E1CFF] transition-all">
                    Careers
                  </button>
                </li>
              </ul>
              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  Global Headquarters
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  Unit 706, 7th Floor OM Tower, 32 Chowringhee Road, Park St,
                  <br />
                  Kolkata, 700071
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">
              © 2025 ZENYDATA TECHNOLOGIES PVT. LTD. ALL RIGHTS RESERVED.
            </p>
            <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">
              Empowering the world's leading organizations with cognitive
              resilience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Cookie Strategy
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Ethics & AI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
