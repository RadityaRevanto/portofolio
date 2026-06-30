"use client";

import { useState } from "react";

const EMAIL = "mochradityarevantoo@gmail.com";

const links = [
  {
    label: "LINKEDIN",
    value: "in/moch-raditya-revanto",
    action: "Connect →",
    href: "https://www.linkedin.com/in/moch-raditya-revanto-ba3151287",
  },
  {
    label: "GITHUB",
    value: "github.com/RadityaRevanto",
    action: "Follow →",
    href: "https://github.com/RadityaRevanto",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs tracking-[0.35em] text-sky-400">
          04 &nbsp; CONTACT
        </p>
        <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Let&rsquo;s build
          <br />
          something great.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <button
            type="button"
            onClick={handleCopy}
            className="group flex flex-col items-start rounded-xl border border-white/10 bg-white/2 p-6 text-left transition-colors hover:border-white/20 hover:bg-white/4"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-500">
              EMAIL
            </span>
            <span className="mt-3 text-base font-medium text-white">
              {EMAIL}
            </span>
            <span className="mt-4 font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-sky-400">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </button>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-start rounded-xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-white/20 hover:bg-white/4"
            >
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-500">
                {link.label}
              </span>
              <span className="mt-3 text-base font-medium text-white">
                {link.value}
              </span>
              <span className="mt-4 font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-sky-400">
                {link.action}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
