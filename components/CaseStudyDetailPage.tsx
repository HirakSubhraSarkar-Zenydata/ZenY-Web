
import React, { useEffect } from 'react';
import { CASE_STUDIES } from '../constants';

interface CaseStudyDetailPageProps {
  studyId: string;
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ studyId }) => {
  const study = CASE_STUDIES.find(s => s.id === studyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [studyId]);

  if (!study) return null;

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Transformation Briefing</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter">
              {study.title}
            </h1>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-6">
               <div className="text-4xl font-black text-[#2E1CFF]">{study.metric.split(' ')[0]}</div>
               <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 leading-relaxed">
                  Primary Performance <br/> Impact Metric
               </div>
            </div>
          </div>
          <div className="aspect-[4/5] lg:aspect-square rounded-[4rem] overflow-hidden shadow-4xl shadow-slate-200">
             <img src={study.image} className="w-full h-full object-cover grayscale" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
           <div className="space-y-6">
              <h3 className="text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px]">The Challenge</h3>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">{study.challenge}</p>
           </div>
           <div className="space-y-6">
              <h3 className="text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px]">Our Solution</h3>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">{study.solution}</p>
           </div>
           <div className="space-y-6">
              <h3 className="text-[#2E1CFF] font-black uppercase tracking-[0.4em] text-[10px]">The Result</h3>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">{study.result}</p>
           </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <h3 className="text-4xl font-black text-slate-950 mb-10 tracking-tight">Need similar architectural impact?</h3>
        <button className="bg-[#2E1CFF] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-2xl active:scale-95">
          Request Practice Briefing
        </button>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
