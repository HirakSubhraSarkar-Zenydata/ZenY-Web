
import React from 'react';
import { motion, useAnimation  } from "framer-motion";


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

      {/* <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-100 pt-20">
         {[
            "AWS Global", "Azure Elite", "GCP Premier", "Snowflake Lab",
            "Neo4j Cert", "MIT AI Lab", "Databricks", "Teradata"
         ].map((p, i) => (
            <div key={i} className="aspect-video bg-slate-50 rounded-3xl flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-default border border-transparent hover:border-slate-200">
               <span className="font-black text-slate-400 text-lg uppercase tracking-tighter">{p}</span>
            </div>
         ))}
      </section> */}

      <section className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-20 overflow-hidden">
  {(() => {
    const controls = useAnimation();
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    return (
      <motion.div
        className="flex items-center gap-14 no-scrollbar"
        animate={controls}
        initial={{ x: "0%" }}
        onHoverStart={() => controls.stop()}   // ✅ PAUSE
        onHoverEnd={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: isMobile ? 35 : 25,
            },
          })
        }
        onViewportEnter={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: isMobile ? 35 : 25,
            },
          })
        }
      >
        {[
          {
            src: "https://www.geomedsdvo.com/wp-content/uploads/2018/04/Medline.png",
            alt: "Medline",
            className: "max-h-20",
          },
          {
            src: "https://www.salaam.com.au/hs-fs/hubfs/Salaam-HorizontalLogoRGB_FullColour.png",
            alt: "Salaam",
            className: "max-h-16",
          },
          {
            src: "https://www.insaaf.com.au/favicon.ico",
            alt: "Insaaf",
            className: "max-h-20 scale-110",
          },
          {
            src: "https://media.licdn.com/dms/image/v2/C4E0BAQGcPW79iAbQLQ/company-logo_200_200/company-logo_200_200/0/1631324059176?e=2147483647&v=beta&t=twCtaOMTnXbO-0AKha05vQNerqrB-EyJmrqcv6sMl_8",
            alt: "Unimutual",
            className: "max-h-20 scale-105",
          },
          {
            src: "https://res.cloudinary.com/djqf7eivl/image/upload/v1749104171/Logo-Dark-500_214_hupls1.png",
            alt: "SRE PVT. LTD.",
            className: "max-h-14",
          },

          /* 🔁 DUPLICATED FOR SEAMLESS LOOP */
          {
            src: "https://www.geomedsdvo.com/wp-content/uploads/2018/04/Medline.png",
            alt: "Medline",
            className: "max-h-20",
          },
          {
            src: "https://www.salaam.com.au/hs-fs/hubfs/Salaam-HorizontalLogoRGB_FullColour.png",
            alt: "Salaam",
            className: "max-h-16",
          },
          {
            src: "https://www.insaaf.com.au/favicon.ico",
            alt: "Insaaf",
            className: "max-h-20 scale-110",
          },
          {
            src: "https://media.licdn.com/dms/image/v2/C4E0BAQGcPW79iAbQLQ/company-logo_200_200/company-logo_200_200/0/1631324059176?e=2147483647&v=beta&t=twCtaOMTnXbO-0AKha05vQNerqrB-EyJmrqcv6sMl_8",
            alt: "Unimutual",
            className: "max-h-20 scale-105",
          },
          {
            src: "https://res.cloudinary.com/djqf7eivl/image/upload/v1749104171/Logo-Dark-500_214_hupls1.png",
            alt: "SRE PVT. LTD.",
            className: "max-h-14",
          },
        ].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-56 h-32 bg-slate-50 rounded-3xl 
                       flex items-center justify-center p-8
                       grayscale hover:grayscale-0 transition-all
                       border border-transparent hover:border-slate-200"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`w-auto object-contain ${logo.className}`}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    );
  })()}
</section>







    </div>
  );
};

export default AssociationsPage;
