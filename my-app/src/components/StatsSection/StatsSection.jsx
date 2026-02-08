import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Section from "../ui/Section";

const DATA = [
  { year: "2020", offers: 450 },
  { year: "2021", offers: 580 },
  { year: "2022", offers: 720 },
  { year: "2023", offers: 850 },
  { year: "2024", offers: 920 },
];

const METRICS = [
  { label: "Placement Percentage", value: "95%", sub: "Eligible Students" },
  { label: "Highest Package", value: "₹33 LPA", sub: "International Offer" },
  { label: "Average Package", value: "₹6.5 LPA", sub: "Across Branches" },
  { label: "Recruiting Partners", value: "150+", sub: "Global Companies" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-white text-black py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Impact in Numbers
              </h2>
              <p className="text-gray-600 max-w-md">
                Consistent growth in opportunities and outcomes defines our
                placement success.
              </p>
            </div>

            <div className="hidden md:block text-right">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
                Annual Growth
              </p>
              <p className="text-3xl font-bold">+12.5%</p>
            </div>
          </div>
        </Section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24 border-t pt-12">
          {METRICS.map((metric, i) => (
            <Section key={i} delay={i * 80}>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                {metric.value}
              </h3>
              <p className="font-semibold text-lg">{metric.label}</p>
              <p className="text-xs tracking-wider text-gray-500 uppercase">
                {metric.sub}
              </p>
            </Section>
          ))}
        </div>

        <Section className="bg-gray-50 border p-8 rounded-xl h-[400px]">
          <h3 className="text-xl font-bold mb-8">
            Placement Offers (Year on Year)
          </h3>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={DATA}>
              <XAxis dataKey="year" stroke="#000" />
              <YAxis stroke="#000" />

              <Tooltip
                contentStyle={{
                  background: "#000",
                  border: "none",
                  color: "#fff",
                }}
              />

              <Bar dataKey="offers" barSize={60} radius={[6, 6, 0, 0]}>
                {DATA.map((d, i) => (
                  <Cell
                    key={i}
                    fill={i === DATA.length - 1 ? "#000" : "#9a9a9a"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Section>
      </div>
    </section>
  );
};

export default StatsSection;
