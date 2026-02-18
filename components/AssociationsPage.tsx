import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useParams } from 'react-router-dom';

const AssociationsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const controls = useAnimation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const logos = [
    {
      src: 'https://www.geomedsdvo.com/wp-content/uploads/2018/04/Medline.png',
      alt: 'Medline',
      className: 'max-h-20',
    },
    {
      src: 'https://www.salaam.com.au/hs-fs/hubfs/Salaam-HorizontalLogoRGB_FullColour.png',
      alt: 'Salaam',
      className: 'max-h-16',
    },
    {
      src: 'https://www.insaaf.com.au/favicon.ico',
      alt: 'Insaaf',
      className: 'max-h-20 scale-110',
    },
    {
      src: 'https://media.licdn.com/dms/image/v2/C4E0BAQGcPW79iAbQLQ/company-logo_200_200/company-logo_200_200/0/1631324059176?e=2147483647&v=beta&t=twCtaOMTnXbO-0AKha05vQNerqrB-EyJmrqcv6sMl_8',
      alt: 'Unimutual',
      className: 'max-h-20 scale-105',
    },
    {
      src: 'https://res.cloudinary.com/djqf7eivl/image/upload/v1749104171/Logo-Dark-500_214_hupls1.png',
      alt: 'SRE PVT. LTD.',
      className: 'max-h-14',
    },
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="min-h-screen pt-40 pb-24 bg-white relative overflow-hidden">
      {/* Decorative blurred orb */}
      <div
        className="
          absolute top-[-200px] right-[-200px]
          w-[700px] h-[700px]
          bg-[#2E1CFF]/20 rounded-full
          blur-[160px]
          pointer-events-none z-0
        "
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="max-w-4xl space-y-8">
          <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">
            Global Ecosystem
          </span>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-950 leading-[0.95] tracking-tighter">
            Strategic <br />
            <span className="text-slate-400">Alliances</span>.
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            We align with the world's most innovative technology providers and academic institutions to ensure our frameworks are always at the leading edge.
          </p>
        </div>
      </section>

      {/* Strategic Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 border-t border-slate-100 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-slate-950">
            Our Strategic Ecosystem
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We selectively partner with best-in-class organizations across technology, healthcare, finance, research, and government — creating synergies that accelerate innovation and deliver unmatched value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {[
            {
              icon: 'shield-check',
              title: 'Enterprise Leaders',
              desc: 'Fortune 500 companies and global industry pioneers trust us to co-create mission-critical systems.',
            },
            {
              icon: 'academic-cap',
              title: 'Academic & Research Institutions',
              desc: 'Collaborating with top universities and labs to bring cutting-edge research into real-world production.',
            },
            {
              icon: 'link',
              title: 'Technology Innovators',
              desc: 'Strategic alliances with cloud giants, AI platforms, and data infrastructure leaders.',
            },
            {
              icon: 'users',
              title: 'Government & Public Sector',
              desc: 'Working on secure, scalable solutions for public services and national infrastructure.',
            },
            {
              icon: 'light-bulb',
              title: 'Emerging Tech Pioneers',
              desc: 'Partnering with startups and scale-ups that redefine what’s possible in AI, data, and automation.',
            },
            {
              icon: 'globe',
              title: 'Global Standards Bodies',
              desc: 'Contributing to and adopting the latest industry standards and compliance frameworks.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-slate-100 hover:border-[#2E1CFF]/40 hover:shadow-2xl hover:shadow-[#2E1CFF]/10 transition-all duration-500"
            >
              <div className="mb-6 text-[#2E1CFF] text-5xl opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon === 'shield-check' && '🛡️'}
                {item.icon === 'academic-cap' && '🎓'}
                {item.icon === 'link' && '🔗'}
                {item.icon === 'users' && '👥'}
                {item.icon === 'light-bulb' && '💡'}
                {item.icon === 'globe' && '🌍'}
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-950 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Trusted by marquee */}
      <section className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-20 overflow-hidden relative z-10">
        <section className="relative py-32 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-xs block mb-4">
                Our Clients & Partners
              </span>
              <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-950">
                Trusted by Industry Leaders
              </h3>
            </div>

            <motion.div
              className="flex items-center gap-14 no-scrollbar"
              animate={controls}
              initial={{ x: '0%' }}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() =>
                controls.start({
                  x: ['0%', '-50%'],
                  transition: { repeat: Infinity, ease: 'linear', duration: isMobile ? 35 : 25 },
                })
              }
              onViewportEnter={() =>
                controls.start({
                  x: ['0%', '-50%'],
                  transition: { repeat: Infinity, ease: 'linear', duration: isMobile ? 35 : 25 },
                })
              }
            >
              {duplicatedLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-56 h-32 bg-slate-50 rounded-3xl flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all border border-transparent hover:border-slate-200"
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
          </div>
        </section>
      </section>
    </div>
  );
};

export default AssociationsPage;