import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: "SIAP Psikologi",
    description:
      "SIAP Psikologi (Psychology Information and Analysis System with Artificial Intelligence) is the official digital transformation platform developed for the SSDM Polri Psychology Bureau.",
    tags: ["Clean Architecture", "AI"],
    image: "https://picsum.photos/seed/siap-psikologi/800/500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-[0.35em] text-sky-400">
          02 &nbsp; PROJECTS
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Featured work
        </h2>
        <p className="mt-4 text-sm text-neutral-400">
          A showcase of deployed applications impacting thousands of users.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/2 transition-colors hover:border-white/20 hover:bg-white/4"
            >
              <div className="relative aspect-16/10 overflow-hidden border-b border-white/10">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-sky-500/20 to-neutral-900">
                    <span className="font-mono text-3xl font-semibold text-white/40">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-neutral-500 transition-colors group-hover:text-sky-400"
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
