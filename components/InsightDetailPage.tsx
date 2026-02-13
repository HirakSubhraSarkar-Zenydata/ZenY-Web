
import React, { useEffect } from 'react';
import { INSIGHTS } from '../constants';

interface InsightDetailPageProps {
  insightId: string;
}

const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ insightId }) => {
  const insight = INSIGHTS.find(i => i.id === insightId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [insightId]);

  if (!insight) return null;

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <article className="max-w-4xl mx-auto px-6">
        <div className="space-y-8 mb-16 text-center">
          <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">{insight.category}</span>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
            {insight.title}
          </h1>
          <div className="flex items-center justify-center gap-8 border-y border-slate-100 py-8">
            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Author</div>
              <div className="text-slate-950 font-bold text-sm">{insight.author}</div>
            </div>
            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Published</div>
              <div className="text-slate-950 font-bold text-sm">{insight.date}</div>
            </div>
            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Reading Time</div>
              <div className="text-slate-950 font-bold text-sm">{insight.readTime}</div>
            </div>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
          <img src={insight.image} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-slate prose-xl max-w-none space-y-8">
          <p className="text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#2E1CFF] pl-8 py-4 bg-slate-50/50">
            {insight.content}
          </p>
          
          <div className="text-lg text-slate-700 leading-[1.8] space-y-8 font-medium">
            <p>
              In the rapidly evolving landscape of distributed systems, the ability to manage complexity at scale determines the delta between success and catastrophic failure. Our current exploration into {insight.title.toLowerCase()} has revealed foundational insights that challenge traditional architectural assumptions.
            </p>
            <h3 className="text-2xl font-bold text-slate-950 pt-8 uppercase tracking-tight">I. Foundations of Resilience</h3>
            <p>
              Architectural decisions must prioritize long-term adaptability. We are seeing a massive shift towards event-driven fabrics that allow for asynchronous scaling without the overhead of synchronous bottleneck propagation.
            </p>
            <p>
              By leveraging modern vector stores and graph-based metadata engines, organizations can finally unify their disparate data silos into a singular, high-performance cognitive engine.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-slate-100">
           <div className="bg-slate-950 p-12 lg:p-16 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-4">
                 <h4 className="text-3xl font-bold tracking-tight">Join the Strategic Conversation</h4>
                 <p className="text-slate-400 font-medium">Subscribe to our quarterly research briefing for decision makers.</p>
              </div>
              <div className="flex w-full lg:w-auto gap-4">
                 <input className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full lg:w-64" placeholder="Email address" />
                 <button className="bg-[#2E1CFF] text-white font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-xl hover:bg-blue-700 transition-all">Join</button>
              </div>
           </div>
        </div>
      </article>
    </div>
  );
};

export default InsightDetailPage;
