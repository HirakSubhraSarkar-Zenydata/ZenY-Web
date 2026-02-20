import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24 space-y-8">
          <span className="text-[#2E1CFF] font-black uppercase tracking-[0.5em] text-[10px] block">
            Legal & Compliance
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-950 leading-[0.95] tracking-tight">
            Privacy <span className="text-slate-400">Policy</span>.
          </h1>

          <p className="text-lg text-slate-500 font-medium">
            Last Updated: April 28, 2025
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-20">
          {/* Overview */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Overview
            </h2>
            <p className="text-slate-600 leading-[1.8] font-medium">
              Welcome to ZenYData's Privacy Policy. At ZenYData, we respect your
              privacy and are committed to protecting your personal data. This
              privacy policy explains how we handle your personal information
              when you visit our website or interact with our services.
            </p>
            <p className="text-slate-600 leading-[1.8] font-medium">
              This policy applies to all information collected through our
              website, as well as any related services, sales, marketing, or
              events.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Information We Collect
            </h2>

            <div className="space-y-6 text-slate-600 font-medium leading-[1.8]">
              <p>
                We collect personal information that you voluntarily provide to
                us when registering, contacting us, or using our services.
              </p>

              <ul className="space-y-3 pl-6 border-l-4 border-[#2E1CFF]">
                <li>Contact information (name, email, phone)</li>
                <li>Company information</li>
                <li>User credentials</li>
                <li>Payment information</li>
                <li>Feedback and correspondence</li>
                <li>Log and usage data</li>
                <li>Device and location information</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              How We Use Your Information
            </h2>

            <ul className="space-y-3 text-slate-600 font-medium leading-[1.8]">
              <li>• Provide and maintain our services</li>
              <li>• Improve our website and offerings</li>
              <li>• Communicate updates and support</li>
              <li>• Deliver marketing content with consent</li>
              <li>• Process transactions and prevent fraud</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Information Sharing
            </h2>

            <p className="text-slate-600 font-medium leading-[1.8]">
              We only share information with your consent, to comply with legal
              obligations, or to fulfill business requirements.
            </p>

            <ul className="space-y-3 text-slate-600 font-medium leading-[1.8]">
              <li>• Third-party service providers</li>
              <li>• Business transfers</li>
              <li>• Legal compliance requirements</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Data Security
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "All data encrypted in transit and at rest",
                "Strict employee access controls",
                "Regular security audits",
                "Comprehensive incident response procedures",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <p className="text-slate-700 font-semibold text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Your Rights */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Your Rights & Choices
            </h2>

            <ul className="space-y-3 text-slate-600 font-medium leading-[1.8]">
              <li>• Access your personal information</li>
              <li>• Rectify inaccurate data</li>
              <li>• Request deletion</li>
              <li>• Restrict processing</li>
              <li>• Data portability</li>
              <li>• Object to processing</li>
              <li>• Withdraw consent</li>
            </ul>
          </section>

          {/* Cookie Policy */}
          {/* <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Cookie Preferences
            </h2>

            <p className="text-slate-600 font-medium leading-[1.8]">
              Most browsers accept cookies by default. You may adjust your
              browser settings to remove or reject cookies, though this may
              affect website functionality.
            </p>

            <button className="mt-4 px-6 py-3 bg-[#2E1CFF] text-white font-bold uppercase tracking-widest text-[10px] rounded hover:bg-blue-700 transition-all">
              Manage Cookie Preferences
            </button>
          </section> */}

          {/* Changes */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Changes to This Policy
            </h2>

            <p className="text-slate-600 font-medium leading-[1.8]">
              We may update this privacy policy periodically. Updates become
              effective once published. We encourage regular review.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-20 border-t border-slate-100">
            <div className="bg-slate-950 rounded-[3rem] p-12 text-white space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Contact Information
              </h2>

              <div className="space-y-2 text-slate-300 font-medium">
                <p>Email: sales@zenydata.com</p>
                <p>Phone: (+91) 8100151002</p>
                <p>
                  Unit 706 7th Floor OM Tower 32, Chowringhee Road, Park St,
                  Kolkata, 700071
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
