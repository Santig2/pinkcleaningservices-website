import { Link } from "wouter";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="pb-32 md:pb-8"
      style={{ background: "var(--pk-midnight)", paddingTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo tipo 2 pinkcleaningservices.png"
                alt="Pink Cleaning Services Logo"
                className="h-[180px] w-auto object-contain"
              />
            </div>
            <p
              className="mb-6 italic text-sm"
              style={{
                fontFamily: "var(--font-display)",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}
            >
              "Clean home, clear mind."
            </p>
            <a
              href="tel:5128453431"
              className="block text-lg font-bold no-underline mb-1"
              style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
            >
              (512) 845-3431
            </a>
            <a
              href="mailto:prettynpinkcleaningservices1@gmail.com"
              className="block text-sm no-underline"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
            >
              prettynpinkcleaningservices1@gmail.com
            </a>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/pinkcleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors no-underline"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--pk-rose)";
                  (e.currentTarget as HTMLElement).style.color = "var(--pk-rose)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4
              className="mb-5 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Standard Clean", href: "/services#standard" },
                { label: "Deep Clean", href: "/services#deep" },
                { label: "Move Out / In Clean", href: "/services#move" },
                { label: "Commercial Clean", href: "/services#commercial" },
                { label: "Design Your Space", href: "/services#design" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm no-underline transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4
              className="mb-5 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Job Opportunities", href: "/job-opportunities" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm no-underline transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Hours & Book */}
          <div>
            <h4
              className="mb-5 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Hours
            </h4>
            <div
              className="text-sm leading-loose"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
            >
              <p>Mon–Fri: 8:00am – 6:00pm</p>
              <p>Saturday: 9:00am – 3:00pm</p>
              <p>Sunday: Closed</p>
            </div>
            <Link
              href="/contact"
              className="btn-primary no-underline text-center justify-center mt-6 w-full"
              style={{ padding: "12px 24px", fontSize: "13px" }}
            >
              Book Now →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
          >
            © 2025 Pink Cleaning Services LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs no-underline transition-colors"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <Link
              href="/privacy"
              className="text-xs no-underline transition-colors"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
