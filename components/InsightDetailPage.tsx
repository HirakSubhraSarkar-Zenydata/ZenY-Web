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
                <div className="absolute top-full right-0 mt-4 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50">
                  {/* Share on X */}
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Share on X
                  </a>

                  {/* Share on Facebook */}
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
                    </svg>
                    Share on Facebook
                  </a>

                  {/* Share on LinkedIn */}
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Share on LinkedIn
                  </a>

                  {/* Copy Link – using your provided SVG path */}
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center gap-4 text-left px-6 py-4 text-sm font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="m12.505 9.678.59-.59a5 5 0 0 1 1.027 7.862l-2.829 2.83a5 5 0 0 1-7.07-7.072l2.382-2.383q.002.646.117 1.298l-1.793 1.792a4 4 0 0 0 5.657 5.657l2.828-2.828a4 4 0 0 0-1.046-6.411q.063-.081.137-.155m-1.01 4.646-.589.59a5 5 0 0 1-1.027-7.862l2.828-2.83a5 5 0 0 1 7.071 7.072l-2.382 2.383a7.7 7.7 0 0 0-.117-1.297l1.792-1.793a4 4 0 1 0-5.657-5.657l-2.828 2.828a4 4 0 0 0 1.047 6.411 2 2 0 0 1-.138.155" />
                    </svg>
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
