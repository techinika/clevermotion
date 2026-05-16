import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            Clléver<span>motion</span>
          </div>
          <div className="footer-tagline">
            "New Rules: Inspiring
            <br />
            creatives at a difficult time."
          </div>
          <div className="footer-contact">
            <a href="tel:+250788843915">+250 788 843 915</a>
            <a href="mailto:hello@cllevermotion.com">hello@cllevermotion.com</a>
            <a href="#">Kigali, Rwanda</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="/">Home</a>
          <a href="/work">Portfolio</a>
          <a href="/deliver">Find my Project</a>
          <a href="#">About</a>
          <a href="#">Insights</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          {[
            "Documentary",
            "Photography",
            "Brand Film",
            "Social Content",
            "Impact Packages",
          ].map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          {["LinkedIn", "Instagram", "YouTube", "TikTok"].map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Cllevermotion. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--ff-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
          }}
        >
          Built by{" "}
          <Link
            target="_blank"
            className="underline"
            href="https://ubunifu.techinika.co.rw"
          >
            Ubunifu Labs
          </Link>
        </span>
      </div>
    </footer>
  );
};
