import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetailPage from "./components/CaseStudyDetailPage";
import PartnerPage from "./components/PartnerPage";
import InsightsHub from "./components/InsightsHub";
import InsightDetailPage from "./components/InsightDetailPage";
import AboutPage from "./components/AboutPage";
import DataLabPage from "./components/DataLabPage";
import AssociationsPage from "./components/AssociationsPage";

const DataTicker = () => (
  <section className="bg-slate-950 text-white py-6 overflow-hidden border-y border-slate-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          Global Ingestion
        </div>
        <div className="text-xl font-bold font-mono tracking-tighter">
          1.2 PB<span className="text-slate-500 ml-1">/day</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          Active Pipelines
        </div>
        <div className="text-xl font-bold font-mono tracking-tighter">
          4,820+
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          Uptime Metric
        </div>
        <div className="text-xl font-bold font-mono tracking-tighter">
          99.9997%
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <div className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          Security Blocked
        </div>
        <div className="text-xl font-bold font-mono tracking-tighter">14M+</div>
      </div>
    </div>
  </section>
);

export type ViewState =
  | "home"
  | "services-hub"
  | "service-detail"
  | "case-study-detail"
  | "partner"
  | "insights-hub"
  | "insight-detail"
  | "about"
  | "data-lab"
  | "associations";

function App() {
  const [currentView, setCurrentView] = useState<ViewState>("home");
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  const navigateTo = (view: ViewState, id?: string) => {
    setCurrentView(view);
    setActiveId(id);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <>
            <Hero navigateTo={navigateTo} />
            <DataTicker />
            <Stats />

            <section id="about-us" className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <h2 className="text-[#2E1CFF] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                      Our Data Thesis
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                      Where Petabytes Meet{" "}
                      <span className="text-[#2E1CFF]">Strategic Clarity</span>
                    </h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                      Data isn't just an asset; it's the nervous system of the
                      modern enterprise. Zenydata Technologies engineers the
                      high-performance pipelines that turn raw chaos into
                      boardroom decisions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        "Distributed Ledger Compliance",
                        "Real-time Behavioral Mapping",
                        "Predictive Failure Analysis",
                        "Quantum-Ready Encryption",
                      ].map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 group cursor-default"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#2E1CFF] text-[10px] font-bold group-hover:bg-[#2E1CFF] group-hover:text-white transition-colors border border-blue-100">
                            ✓
                          </div>
                          <span className="text-slate-700 font-bold text-xs uppercase tracking-widest">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden shadow-3xl border border-slate-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="Data analysis visualization"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hidden xl:block">
                      <div className="text-3xl font-black text-[#2E1CFF] mb-1">
                        94%
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Efficiency Increase
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Services
              onViewAll={() => navigateTo("services-hub")}
              onServiceSelect={(id) => navigateTo("service-detail", id)}
            />

            {/* <CaseStudies
              onSelect={(id) => navigateTo("case-study-detail", id)}
            /> */}

            <Industries />
            <Insights
              onViewAll={() => navigateTo("insights-hub")}
              onSelect={(id) => navigateTo("insight-detail", id)}
            />

            <section className="py-24 bg-[#2E1CFF] text-white relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <blockquote className="text-3xl lg:text-4xl font-extrabold leading-tight mb-8 italic">
                  "Zenydata redefined our entire data lifecycle. What took 4
                  days of manual auditing now takes 8 milliseconds of automated
                  validation."
                </blockquote>
                <p className="text-blue-200 font-bold uppercase tracking-[0.4em] text-[10px]">
                  Director of Engineering, Fortune 50 Financial Services
                </p>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
            </section>
          </>
        );
      case "services-hub":
        return (
          <ServicesPage
            onServiceSelect={(id) => navigateTo("service-detail", id)}
          />
        );
      case "service-detail":
        return activeId ? (
          <ServiceDetailPage serviceId={activeId} />
        ) : (
          <ServicesPage
            onServiceSelect={(id) => navigateTo("service-detail", id)}
          />
        );
      case "case-study-detail":
        return activeId ? <CaseStudyDetailPage studyId={activeId} /> : null;
      case "partner":
        return <PartnerPage />;
      case "insights-hub":
        return (
          <InsightsHub onSelect={(id) => navigateTo("insight-detail", id)} />
        );
      case "insight-detail":
        return activeId ? <InsightDetailPage insightId={activeId} /> : null;
      case "about":
        return <AboutPage />;
      case "data-lab":
        return <DataLabPage />;
      case "associations":
        return <AssociationsPage />;
      default:
        return <Hero navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar onNavigate={navigateTo} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
