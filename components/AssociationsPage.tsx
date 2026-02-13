
import React from 'react';

const AssociationsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="max-w-4xl space-y-8">
           <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">Global Ecosystem</span>
           <h1 className="text-6xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter">
              Strategic <br/><span className="text-slate-400">Alliances</span>.
           </h1>
           <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              We align with the world's most innovative technology providers and academic institutions to ensure our frameworks are always at the leading edge.
           </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-20">
         {[
            "AWS Global", "Azure Elite", "GCP Premier", "Snowflake Lab",
            "Neo4j Cert", "MIT AI Lab", "Databricks", "Teradata"
         ].map((p, i) => (
            <div key={i} className="aspect-video bg-slate-50 rounded-3xl flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-default border border-transparent hover:border-slate-200">
               <span className="font-black text-slate-400 text-lg uppercase tracking-tighter">{p}</span>
            </div>
         ))}
      </section>
    </div>
  );
};

export default AssociationsPage;
