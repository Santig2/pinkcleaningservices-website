import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "var(--pk-grad-dark)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(194,125,154,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="eyebrow mb-4" style={{ color: "rgba(194,125,154,0.8)" }}>
          GET STARTED TODAY
        </p>
        <h2
          className="font-display font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 6vw, 56px)",
            lineHeight: 1.15,
          }}
        >
          Ready for a Spotless Home?
        </h2>
        <p
          className="text-lg mb-10 max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
          }}
        >
          Join hundreds of satisfied clients. Premium eco-friendly cleaning,
          tailored to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary no-underline">
            Get My Free Quote →
          </Link>
          <a href="tel:5128453431" className="btn-secondary-light no-underline">
            <Phone size={16} />
            Call Us Now
          </a>
        </div>
        <p
          className="mt-14 italic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          "Clean home, clear mind."
        </p>
      </div>
    </section>
  );
}
