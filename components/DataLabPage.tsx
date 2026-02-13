import React from "react";

const DataLabPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#020617] text-white">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="max-w-4xl space-y-10">
          <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] block">
            R&D / Open Source
          </span>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
            The Zenydata <br />
            <span className="text-slate-600">Cognitive Lab</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            Where we break the current paradigms of data science. Our lab
            engineers are focused on the next 10 years of human-AI
            collaboration.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-px bg-slate-900 border border-slate-900 rounded-[4rem] overflow-hidden">
        <div className="p-16 lg:p-24 bg-[#020617] hover:bg-slate-950 transition-colors group">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-blue-500 transition-colors">
            Project: ERP AI Agent
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            Builded an AI agent for ERPs using MCP where it can perform full
            CRUD operation provide intelligence and many more
          </p>
          <button className="text-blue-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
            View on GitHub <span>→</span>
          </button>
        </div>
        <div className="p-16 lg:p-24 bg-[#020617] hover:bg-slate-950 transition-colors group">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-blue-500 transition-colors">
            Project: Data Encryption SDK
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            Lattice-based encryption wrappers for existing AWS/Azure storage
            blobs.
          </p>
          <button className="text-blue-500 font-black uppercase tracking-widest text-[10px] flex items-center gap-3">
            Download SDK <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataLabPage;
