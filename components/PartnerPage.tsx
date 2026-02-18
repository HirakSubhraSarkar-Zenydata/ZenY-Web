
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const PartnerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  company: "",
  interest: "",
  message: ""
});

  const { id } = useParams<{ id: string }>();

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_9jrvytd",
      "template_ut6fxvj",
      {
        full_name: formData.full_name,
        email: formData.email,
        company: formData.company,
        interest: formData.interest,
        message: formData.message
      },
      "K_H0cnXJ68Ik6vKEQ"
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    });
};


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);

  if (submitted) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
    return (
      <div className="min-h-screen pt-40 pb-24 flex items-center justify-center bg-white px-6">
        <div className="max-w-xl text-center space-y-8 animate-in fade-in">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-12 h-12 text-[#2E1CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-950 uppercase tracking-tight">Briefing Received</h1>
          <p className="text-xl text-slate-500 font-medium">One of our strategic alignment directors will review your application and contact you within 24 hours.</p>
          <button onClick={() => window.location.reload()} className="text-[#2E1CFF] font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-blue-600 pb-1">Start New Briefing</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">Strategic Alliance Program</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-950 leading-[1] tracking-tighter">
              Co-architecting the <span className="text-slate-400 italic">Next Frontier</span>.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
              We seek partners who operate with the same engineering rigor and vision for high-performance data ecosystems.
            </p>
          </div>

          <div className="grid gap-8 border-t border-slate-100 pt-12">
            {[
              { t: "Joint Engineering", d: "Integrate your specialized technologies into our global frameworks." },
              { t: "GTM Alignment", d: "Accelerate market penetration through shared strategic accounts." },
              { t: "Academic Synergy", d: "Bridge the gap between theoretical research and production systems." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2E1CFF] transition-colors">
                  <span className="text-[#2E1CFF] font-black text-xs group-hover:text-white">0{i+1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 mb-1">{item.t}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-10 lg:p-16 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
                <input required type="text" value={formData.full_name}
                  onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                  } className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Enter name" />
                </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Corporate Email</label>
                <input required type="email"  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  } className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="email@company.com" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Company / Organization</label>
              <input required type="text" value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                } className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Legal entity name" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Primary Interest</label>
              <select value={formData.interest}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                } className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all">
                <option value="">Select service interest</option>
                <option value="Data Engineering & Platforms">Data Engineering & Platforms</option>
                <option value="AI & MLOps">AI & MLOps</option>
                <option value="AI & Data Platform Strategy">AI & Data Platform Strategy</option>
                <option value="Digital & System Integration">Digital & System Integration</option>
                <option value="Other / Not Listed">Other / Not Listed</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Alignment Briefing</label>
              <textarea rows={4} value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                } className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Outline your vision for partnership..." />
            </div>

            <button type="submit" className="w-full bg-[#2E1CFF] text-white font-black uppercase tracking-[0.3em] text-[11px] py-6 rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95">
              Submit Application
            </button>
            <p className="text-[9px] text-center text-slate-400 uppercase font-bold tracking-widest">Global privacy standards (GDPR/SOC2) apply to all submissions.</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
