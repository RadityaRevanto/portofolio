import Link from "next/link";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
//   { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <strong className="text-sm font-semibold tracking-tight text-white">
            Raditya Revanto
          </strong>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sky-400 px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-sky-300"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
