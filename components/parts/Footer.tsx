import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.05] bg-[#080a0f] px-6 md:px-14 py-16 md:py-24 text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-4">
          <Link href="/" className="font-display text-2xl font-bold text-white flex items-center gap-2.5 mb-6 group inline-flex">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="transform group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="10" height="24" rx="1" fill="#E50914" />
              <rect x="16" y="2" width="10" height="16" rx="1" fill="rgba(229,9,20,0.4)" />
            </svg>
            Clléver<span className="text-[#E50914] font-normal italic">motion</span>
          </Link>
          <p className="font-display text-2xl md:text-3xl font-bold leading-tight mb-8">
            Stories told <br />
            <em className="text-white/40 font-normal italic">for results.</em>
          </p>
          <div className="flex flex-col gap-2 font-mono-cm text-[0.7rem] tracking-wider uppercase text-white/50">
            <a href="tel:+250788843915" className="hover:text-[#E50914] transition-colors">+250 788 843 915</a>
            <a href="mailto:hello@cllevermotion.com" className="hover:text-[#E50914] transition-colors">hello@cllevermotion.com</a>
            <span>Kigali, Rwanda</span>
          </div>
        </div>
        
        <div className="md:col-span-2 md:col-start-7">
          <h4 className="font-mono-cm text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-6">Navigate</h4>
          <div className="flex flex-col gap-4">
            {["Home", "Work", "Approach", "Contact"].map((l) => (
              <Link key={l} href={l === "Home" ? "/" : `/#${l.toLowerCase()}`} className="font-body text-sm text-white/60 hover:text-white transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-mono-cm text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-6">Services</h4>
          <div className="flex flex-col gap-4">
            {["Documentary", "Brand Film", "Photography", "Impact Packages"].map((l) => (
              <span key={l} className="font-body text-sm text-white/60 cursor-pointer hover:text-white transition-colors">
                {l}
              </span>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-mono-cm text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-6">Connect</h4>
          <div className="flex flex-col gap-4">
            {["LinkedIn", "Instagram", "YouTube", "TikTok"].map((l) => (
              <a key={l} href="#" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono-cm text-[0.65rem] tracking-widest text-white/30 uppercase">
          © {new Date().getFullYear()} Cllevermotion. All rights reserved.
        </span>
        <span className="font-mono-cm text-[0.65rem] tracking-widest text-white/30 uppercase">
          Built by{" "}
          <Link target="_blank" className="text-white hover:text-[#E50914] transition-colors" href="https://ubunifu.techinika.co.rw">
            Ubunifu Labs
          </Link>
        </span>
      </div>
    </footer>
  );
};
