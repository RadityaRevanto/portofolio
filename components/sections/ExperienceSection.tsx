type Experience = {
  period: string;
  type: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
};

const experiences: Experience[] = [
  {
    period: "Oct 2023 - Mar 2024",
    type: "INTERNSHIP",
    role: "Flutter Developer",
    company: "PT. Cipta Anya Nugraha",
    description:
      "Leading mobile development, driving architectural decisions, and building scalable apps with complex API integrations.",
    tags: ["Flutter", "Rest API", "Provider", "Clean Architecture"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-[0.35em] text-sky-400">
          01 &nbsp; EXPERIENCE
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Career milestones
        </h2>

        <div className="mt-16 space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.period}
              className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[200px_1fr]"
            >
              <div className="flex flex-col items-start gap-3">
                <span className="font-mono text-xs text-sky-400">
                  {exp.period}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-neutral-400">
                  {exp.type}
                </span>
              </div>

              <div className="relative border-l border-white/10 pl-8">
                <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400 ring-4 ring-[#0a0a0a]" />

                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 text-sm text-neutral-400">{exp.company}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
                  {exp.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
