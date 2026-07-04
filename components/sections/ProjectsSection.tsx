import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Swety Kos",
    description:
      "Website landing page untuk kost pribadi yang menampilkan informasi kamar, fasilitas, harga, dan lokasi, serta memudahkan calon penghuni untuk menghubungi dan melakukan reservasi.",
    tags: ["NextJS", "TailwindCSS", "TypeScript"],
    image: "/images/kost_swety.png",
    demoUrl: "https://swety-kos.vercel.app",
    githubUrl: "https://github.com/RadityaRevanto/swety.git",
  },
  {
    title: "DCC - Dinus Career Center",
    description:
      "Website untuk menampilkan Lowongan Pekerjaan untuk Mahasiswa dan Alumni Universitas Dian Nuswantoro yang dikelola oleh himpunan mahasiswa.",
    tags: ["Laravel", "PHP", "TailwindCSS", "Supabase"],
    image: "/images/dcc.png",
    demoUrl: "https://dinus-career-center-web-production.up.railway.app/",
    githubUrl: "https://github.com/RadityaRevanto/dinus-career-center-web.git",
  },
  {
    title: "Skin Detection - System",
    description:
      "Sistem berbasis Web dengan teknologi Machine Learning untuk mendeteksi penyakit kulit dengan membandingkan gambar kulit dengan database gambar penyakit kulit.",
    tags: ["NextJs", "Radix UI", "Typescript", ],
    image: "/images/skin-detection.png",
    demoUrl: "https://face-skin-detection-rl8e.vercel.app/",
    githubUrl: "https://github.com/RadityaRevanto/face-skin-detection.git",
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
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition-colors hover:text-sky-400"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      ↗
                    </a>
                  ) : (
                    <span
                      className="text-neutral-500 transition-colors group-hover:text-sky-400"
                      aria-hidden
                    >
                      ↗
                    </span>
                  )}
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

                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-sky-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M12.5 3a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.56L10.78 10.78a.75.75 0 11-1.06-1.06L15.94 3.5H13.25A.75.75 0 0112.5 3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/20"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
