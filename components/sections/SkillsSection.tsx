type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "ARCHITECTURE",
    items: [
      "Clean Architecture",
      "BLoC Pattern",
      "Dependency Injection",
      "Modular Routing",
      "MVVM",
      "MVP",
    ],
  },
  {
    category: "LANGUAGES",
    items: ["Dart 3.0", "Kotlin 1.9", "Swift 5.9", "Python"],
  },
  {
    category: "FRAMEWORKS",
    items: [
      "Flutter 3.x",
      "Jetpack Compose",
      "GetX",
      "Provider",
      "Hilt",
      "Retrofit",
      "TensorFlow",
    ],
  },
  {
    category: "CI / CD",
    items: ["Codemagic", "GitHub Actions"],
  },
  {
    category: "TESTING",
    items: ["Unit Testing", "Widget Testing", "Integration Testing", "TDD"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-[0.35em] text-sky-400">
          03 &nbsp; SKILLS
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          The toolkit
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="border-b border-white/10 pb-2 font-mono text-xs tracking-[0.25em] text-sky-400">
                {group.category}
              </p>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
