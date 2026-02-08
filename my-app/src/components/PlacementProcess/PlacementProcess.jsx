import React from "react";
import { UserPlus, BrainCircuit, Users, Award } from "lucide-react";
import Section from "../ui/Section";

const STEPS = [
  {
    icon: UserPlus,
    title: "Registration",
    desc: "Students register via the CGPU portal with verified academic records.",
  },
  {
    icon: BrainCircuit,
    title: "Aptitude Training",
    desc: "Intensive training sessions on aptitude, reasoning, and soft skills.",
  },
  {
    icon: Users,
    title: "Interviews",
    desc: "Pre-placement talks followed by technical and HR interviews.",
  },
  {
    icon: Award,
    title: "Selection",
    desc: "Final offer rollout and onboarding assistance for placed students.",
  },
];

const PlacementProcess = () => {
  return (
    <section id="process" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <Section>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Title */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 sticky top-24">
                The <br /> Process
              </h2>
            </div>

            {/* Timeline */}
            <div className="lg:w-2/3 relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200"></div>

              <div className="space-y-14">
                {STEPS.map((step, i) => (
                  <Section key={i} delay={i * 120}>
                    <div className="flex gap-8 relative">
                      {/* Icon */}
                      <div className="relative">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                          <step.icon size={24} />
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Section>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
};

export default PlacementProcess;
