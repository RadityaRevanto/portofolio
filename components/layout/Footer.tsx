export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Raditya Revanto</p>
        <p className="font-mono tracking-[0.15em]">
          Designed &amp; built for mobile-first impact
        </p>
      </div>
    </footer>
  );
}
