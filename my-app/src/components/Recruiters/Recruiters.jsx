import React from "react";
import Section from "../ui/Section";

const COMPANIES = [
  "Google", "Amazon", "Microsoft", "Oracle",
  "TCS", "Infosys", "Wipro", "Cognizant",
  "L&T", "Bosch", "MRF", "Siemens",
  "IBM", "Accenture", "Deloitte", "KPMG"
];

const Recruiters = () => {
  return (
    <section
      id="recruiters"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Decorative top-right circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 border border-white/10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <Section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide world-class
            opportunities. From tech giants to engineering pioneers — MACErs are
            everywhere.
          </p>
        </Section>

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {COMPANIES.map((company, idx) => (
            <Section key={idx} delay={idx * 60}>
              <div className="h-40 flex items-center justify-center bg-black border border-transparent 
                              hover:border-white/20 transition-all duration-300 group relative">
                <span className="text-xl font-bold text-gray-500 group-hover:text-white transition">
                  {company}
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            </Section>
          ))}
        </div>

        {/* View All */}
        <div className="mt-14 text-center">
          <a
            href="#"
            className="text-sm border-b border-white/40 pb-1 hover:text-gray-300 transition"
          >
            View all 150+ recruiters
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
