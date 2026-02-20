// import React, { useEffect } from 'react';
// import { INSIGHTS } from '../constants';

// interface InsightDetailPageProps {
//   insightId: string;
// }

// const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ insightId }) => {
//   const insight = INSIGHTS.find(i => i.id === insightId);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [insightId]);

//   if (!insight) return null;

//   return (
//     <div className="min-h-screen pt-40 pb-24 bg-white">
//       <article className="max-w-4xl mx-auto px-6">
//         <div className="space-y-8 mb-16 text-center">
//           <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">{insight.category}</span>
//           <h1 className="text-4xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
//             {insight.title}
//           </h1>
//           <div className="flex items-center justify-center gap-8 border-y border-slate-100 py-8">
//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Author</div>
//               <div className="text-slate-950 font-bold text-sm">{insight.author}</div>
//             </div>
//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Published</div>
//               <div className="text-slate-950 font-bold text-sm">{insight.date}</div>
//             </div>
//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">Reading Time</div>
//               <div className="text-slate-950 font-bold text-sm">{insight.readTime}</div>
//             </div>
//           </div>
//         </div>

//         <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
//           <img src={insight.image} alt="" className="w-full h-full object-cover" />
//         </div>

//         <div className="prose prose-slate prose-xl max-w-none space-y-8">
//           <p className="text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#2E1CFF] pl-8 py-4 bg-slate-50/50">
//             {insight.content}
//           </p>

//           <div className="text-lg text-slate-700 leading-[1.8] space-y-8 font-medium">
//             <p>
//               In the rapidly evolving landscape of distributed systems, the ability to manage complexity at scale determines the delta between success and catastrophic failure. Our current exploration into {insight.title.toLowerCase()} has revealed foundational insights that challenge traditional architectural assumptions.
//             </p>
//             <h3 className="text-2xl font-bold text-slate-950 pt-8 uppercase tracking-tight">I. Foundations of Resilience</h3>
//             <p>
//               Architectural decisions must prioritize long-term adaptability. We are seeing a massive shift towards event-driven fabrics that allow for asynchronous scaling without the overhead of synchronous bottleneck propagation.
//             </p>
//             <p>
//               By leveraging modern vector stores and graph-based metadata engines, organizations can finally unify their disparate data silos into a singular, high-performance cognitive engine.
//             </p>
//           </div>
//         </div>

//         <div className="mt-24 pt-16 border-t border-slate-100">
//            <div className="bg-slate-950 p-12 lg:p-16 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">
//               <div className="space-y-4">
//                  <h4 className="text-3xl font-bold tracking-tight">Join the Strategic Conversation</h4>
//                  <p className="text-slate-400 font-medium">Subscribe to our quarterly research briefing for decision makers.</p>
//               </div>
//               <div className="flex w-full lg:w-auto gap-4">
//                  <input className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full lg:w-64" placeholder="Email address" />
//                  <button className="bg-[#2E1CFF] text-white font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-xl hover:bg-blue-700 transition-all">Join</button>
//               </div>
//            </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default InsightDetailPage;

// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { INSIGHTS } from "../constants";

// const InsightDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const insight = INSIGHTS.find((i) => i.id === id);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!insight) return null;

//   return (
//     <div className="min-h-screen pt-40 pb-24 bg-white">
//       <article className="max-w-4xl mx-auto px-6">
//         <div className="space-y-8 mb-16 text-center">
//           <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">
//             {insight.category}
//           </span>

//           <h1 className="text-4xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
//             {insight.title}
//           </h1>

//           <div className="flex items-center justify-center gap-8 border-y border-slate-100 py-8">
//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
//                 Author
//               </div>
//               <div className="text-slate-950 font-bold text-sm">
//                 {insight.author}
//               </div>
//             </div>

//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
//                 Published
//               </div>
//               <div className="text-slate-950 font-bold text-sm">
//                 {insight.date}
//               </div>
//             </div>

//             <div className="text-left">
//               <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
//                 Reading Time
//               </div>
//               <div className="text-slate-950 font-bold text-sm">
//                 {insight.readTime}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
//           <img
//             src={insight.image}
//             alt={insight.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="prose prose-slate prose-xl max-w-none space-y-8">
//           <p className="text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#2E1CFF] pl-8 py-4 bg-slate-50/50">
//             {insight.content}
//           </p>

//           <div className="text-lg text-slate-700 leading-[1.8] space-y-8 font-medium">
//             <p>
//               In the rapidly evolving landscape of distributed systems, the
//               ability to manage complexity at scale determines the delta between
//               success and catastrophic failure. Our current exploration into{" "}
//               {insight.title.toLowerCase()} has revealed foundational insights
//               that challenge traditional architectural assumptions.
//             </p>

//             <h3 className="text-2xl font-bold text-slate-950 pt-8 uppercase tracking-tight">
//               I. Foundations of Resilience
//             </h3>

//             <p>
//               Architectural decisions must prioritize long-term adaptability. We
//               are seeing a massive shift towards event-driven fabrics that allow
//               for asynchronous scaling without the overhead of synchronous
//               bottleneck propagation.
//             </p>

//             <p>
//               By leveraging modern vector stores and graph-based metadata
//               engines, organizations can finally unify their disparate data
//               silos into a singular, high-performance cognitive engine.
//             </p>
//           </div>
//         </div>

//         <div className="mt-24 pt-16 border-t border-slate-100">
//           <div className="bg-slate-950 p-12 lg:p-16 rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">
//             <div className="space-y-4">
//               <h4 className="text-3xl font-bold tracking-tight">
//                 Join the Strategic Conversation
//               </h4>
//               <p className="text-slate-400 font-medium">
//                 Subscribe to our quarterly research briefing for decision
//                 makers.
//               </p>
//             </div>

//             <div className="flex w-full lg:w-auto gap-4">
//               <input
//                 className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full lg:w-64"
//                 placeholder="Email address"
//               />
//               <button className="bg-[#2E1CFF] text-white font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-xl hover:bg-blue-700 transition-all">
//                 Join
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Optional Back Button (no design change impact) */}
//         <div className="mt-16 text-center">
//           <button
//             onClick={() => navigate("/insights")}
//             className="text-[#2E1CFF] font-black uppercase tracking-widest text-[10px]"
//           >
//             ← Back to Insights
//           </button>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default InsightDetailPage;

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { INSIGHTS } from "../constants";

const InsightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const insight = INSIGHTS.find((i) => i.id === id);

  const [shareOpen, setShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const shareUrl = useMemo(() => window.location.href, []);
  const shareText = insight?.title ?? "";

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareOpen(false);
      alert("Link copied to clipboard");
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  if (!insight) return null;

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <article className="max-w-4xl mx-auto px-6">
        <div className="space-y-8 mb-16 text-center">
          <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">
            {insight.category}
          </span>

          <h1 className="text-4xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
            {insight.title}
          </h1>

          {/* META */}
          <div className="flex flex-wrap items-center justify-center gap-10 border-y border-slate-100 py-8">
            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
                Author
              </div>
              <div className="text-slate-950 font-bold text-sm">
                {insight.author}
              </div>
            </div>

            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
                Published
              </div>
              <div className="text-slate-950 font-bold text-sm">
                {insight.date}
              </div>
            </div>

            <div className="text-left">
              <div className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-1">
                Reading Time
              </div>
              <div className="text-slate-950 font-bold text-sm">
                {insight.readTime}
              </div>
            </div>

            {/* SHARE BUTTON + DROPDOWN */}
            <div className="relative" ref={shareRef}>
              <button
                onClick={() => setShareOpen((v) => !v)}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#2E1CFF]/10 text-[#2E1CFF] font-extrabold text-sm uppercase tracking-widest hover:bg-[#2E1CFF] hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="5" r="2" strokeWidth="2" />
                  <circle cx="6" cy="12" r="2" strokeWidth="2" />
                  <circle cx="18" cy="19" r="2" strokeWidth="2" />
                  <path
                    d="M8 11L16 6M8 13L16 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Share
              </button>

              {shareOpen && (
                <div className="absolute top-full right-0 mt-4 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50">
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    Share on X
                  </a>
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    Share on Facebook
                  </a>
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    Share on LinkedIn
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="w-full text-left px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="prose prose-slate prose-xl max-w-none space-y-8">
          <p className="text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#2E1CFF] pl-8 py-4 bg-slate-50/50">
            {insight.intro}
          </p>

          <div className="text-lg text-slate-700 leading-[1.8] space-y-8 font-medium">
            {insight.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h3 className="text-2xl font-bold text-slate-950 pt-8 uppercase tracking-tight">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/insights")}
            className="text-[#2E1CFF] font-black uppercase tracking-widest text-[10px]"
          >
            ← Back to Insights
          </button>
        </div>
      </article>
    </div>
  );
};

export default InsightDetailPage;
