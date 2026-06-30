import Link from "next/link";

const highlights = [
  { label: "FOCUS", value: "Web · Mobile" },
  { label: "FRAMEWORK", value: "Next.js · Flutter" },
  { label: "INTEREST", value: "Software Engineering + AI" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
          Available for new opportunities
        </div>

        <p className="mt-8 font-mono text-xs tracking-[0.35em] text-sky-400">
          SOFTWARE ENGINEER
        </p>

        <h1 className="mt-4 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Raditya Revanto
        </h1>

        <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight text-neutral-500 sm:text-5xl">
          Crafting digital experiences that feel{" "}
          <span className="text-white">effortless.</span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          Saya membangun aplikasi web dan mobile dengan fokus pada performa,
          pengalaman pengguna, dan arsitektur yang terstruktur.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-sky-300"
          >
            View selected work
            <span aria-hidden>↗</span>
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-white/15 bg-neutral-900/60 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] tracking-[0.25em] text-neutral-500">
                {item.label}
              </p>
              <strong className="mt-2 block text-sm font-medium text-white">
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
