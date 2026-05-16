import Link from "next/link";

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link href="#" className="nav-logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="2" width="10" height="24" rx="1" fill="#E8A020" />
          <rect
            x="16"
            y="2"
            width="10"
            height="16"
            rx="1"
            fill="rgba(232,160,32,0.4)"
          />
        </svg>
        Clléver<span>motion</span>
      </Link>
      <ul className="nav-links">
        {["/#work", "/#process", "/#gallery", "/#tools", "/#contact"].map(
          (href, i) => (
            <li key={i}>
              <Link href={href}>
                {["Work", "Process", "Gallery", "Free Tools", "Contact"][i]}
              </Link>
            </li>
          ),
        )}
      </ul>
      <div className="nav-actions">
        <Link
          href="/#contact"
          className="btn-outline"
          style={{ padding: "10px 20px", fontSize: "0.82rem" }}
        >
          Book Consultation
        </Link>
        <Link
          href="/#contact"
          className="btn-primary"
          style={{ padding: "10px 20px", fontSize: "0.82rem" }}
        >
          Start a Project →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
