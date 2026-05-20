import Link from "next/link";

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 transition-all duration-500 ${scrolled ? "bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.05] py-4 shadow-lg" : "bg-transparent"}`}>
      <Link href="/" className="font-display text-2xl font-bold text-white flex items-center gap-2.5 group">
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="transform group-hover:scale-110 transition-transform">
          <rect x="2" y="2" width="10" height="24" rx="1" fill="#E50914" />
          <rect
            x="16"
            y="2"
            width="10"
            height="16"
            rx="1"
            fill="rgba(229,9,20,0.4)"
          />
        </svg>
        Clléver<span className="text-[#E50914] font-normal italic">motion</span>
      </Link>
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {[
          { href: "/#work-gallery", label: "Work" },
          { href: "/#approach", label: "Approach" },
          { href: "/#contact", label: "Contact" }
        ].map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="font-mono-cm text-[0.7rem] uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="hidden md:inline-flex font-body text-sm font-semibold px-6 py-2.5 rounded-full bg-[#E50914] text-white hover:bg-[#ff3b3b] transition-all hover:shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:-translate-y-0.5"
        >
          Start a Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
