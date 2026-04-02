import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(30, 30, 42, 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="flex items-center gap-2">
            <img
              src="/logo tipo 1 pinkcleaningservices.png"
              alt="Pink Cleaning Services Logo"
              className="h-[180px] w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium tracking-wide transition-colors no-underline"
              style={{
                fontFamily: "var(--font-body)",
                color:
                  location === link.href
                    ? "var(--pk-rose)"
                    : "rgba(255,255,255,0.75)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5128453431"
            className="flex items-center gap-2 text-sm font-medium no-underline"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
          >
            <Phone size={14} />
            (512) 845-3431
          </a>
          <Link href="/contact" className="btn-primary no-underline" style={{ padding: "10px 24px", fontSize: "13px" }}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(30, 30, 42, 0.98)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium py-2 no-underline border-b"
                style={{
                  fontFamily: "var(--font-body)",
                  color:
                    location === link.href
                      ? "var(--pk-rose)"
                      : "rgba(255,255,255,0.8)",
                  borderColor: "rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:5128453431"
              className="flex items-center gap-2 text-sm font-medium py-2 no-underline"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
            >
              <Phone size={14} />
              (512) 845-3431
            </a>
            <Link href="/contact" className="btn-primary no-underline text-center justify-center mt-2">
              Get Free Quote →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
