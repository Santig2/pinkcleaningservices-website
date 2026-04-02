import { Link } from "wouter";
import { Leaf, Clock, Search, Heart } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import FinalCTA from "@/components/FinalCTA";

const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503824925/nmTfdggJc6DoM6DPCLuCLL/team-cleaning-NmqA8C426iZ4rSDugPcCdy.webp";
const FOUNDER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503824925/nmTfdggJc6DoM6DPCLuCLL/about-founder-DQPt769gjHkAeT9UMC3jAz.webp";
const ECO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503824925/nmTfdggJc6DoM6DPCLuCLL/eco-products-32uAnwGpREijDD24pYuPun.webp";

const values = [
  {
    icon: <Leaf size={24} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    title: "Eco-Conscious",
    body: "We use only certified non-toxic, biodegradable products — safe for your family, pets, and the planet we share.",
  },
  {
    icon: <Clock size={24} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    title: "Reliability First",
    body: "When we commit to a time, we honor it. Consistency and punctuality are non-negotiable values for our entire team.",
  },
  {
    icon: <Search size={24} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    title: "Detail-Obsessed",
    body: "We don't cut corners — we clean them. Every surface, every edge, every time. Without exception.",
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    title: "People First",
    body: "We treat your home like our own. And we treat our team like family. Happy cleaners create happier, cleaner homes.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-6 min-h-[480px] flex items-center"
        style={{ background: "var(--pk-pearl)" }}
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">OUR STORY</p>
            <h1
              className="font-display font-bold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 6vw, 56px)",
                lineHeight: 1.1,
                color: "var(--pk-midnight)",
              }}
            >
              We're Pink Cleaning.{" "}
              <span style={{ color: "var(--pk-rose)" }}>We're Obsessed</span>{" "}
              With Clean.
            </h1>
            <p
              className="mt-5 text-lg max-w-md"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--pk-text-body)",
                lineHeight: 1.85,
              }}
            >
              Born from a passion for detail and a commitment to eco-conscious living —
              we've been transforming homes in Austin, TX ever since.
            </p>
            <a
              href="#team"
              className="btn-secondary-dark no-underline mt-8 inline-flex"
              style={{ fontSize: "13px", padding: "12px 28px" }}
            >
              Meet Our Team ↓
            </a>
          </div>
          <div className="relative">
            <div
              className="absolute rounded-3xl"
              style={{
                background: "var(--pk-rose-light)",
                inset: "0",
                transform: "translate(16px, 16px)",
                zIndex: 0,
                borderRadius: "24px",
              }}
            />
            <img
              src={TEAM_IMAGE}
              alt="Pink Cleaning team"
              className="relative z-10 w-full object-cover rounded-3xl"
              style={{
                boxShadow: "var(--pk-shadow-img)",
                borderRadius: "24px",
                maxHeight: "480px",
              }}
            />
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-pearl)" bottomColor="#ffffff" />

      {/* Our Story */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center relative">
          <span
            className="font-display select-none absolute -top-8 left-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "100px",
              color: "var(--pk-rose-light)",
              lineHeight: 1,
            }}
          >
            "
          </span>
          <p
            className="relative z-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              color: "var(--pk-text-body)",
              lineHeight: 1.9,
            }}
          >
            Pink Cleaning Services was founded with a simple belief: everyone deserves to come
            home to a clean, calm, and comfortable space — without the stress of doing it themselves.
          </p>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              color: "var(--pk-text-body)",
              lineHeight: 1.9,
            }}
          >
            We started small, cleaning homes in Austin with a commitment to quality,
            reliability, and eco-friendly methods that are safe for families and pets.
            Word spread, and we grew — but our values never changed.
          </p>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              color: "var(--pk-text-body)",
              lineHeight: 1.9,
            }}
          >
            Today, we serve hundreds of families and businesses across Austin and the surrounding area,
            and every single cleaning is treated with the same attention to detail as our very first one.
          </p>

          <div
            className="mt-12 pl-8 text-left max-w-xl mx-auto"
            style={{ borderLeft: "4px solid var(--pk-rose)" }}
          >
            <p
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                color: "var(--pk-rose)",
                lineHeight: 1.5,
              }}
            >
              "A clean home is the foundation of a clear mind."
            </p>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#ffffff" bottomColor="var(--pk-pearl)" />

      {/* Our Values */}
      <section className="py-24 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-semibold text-center mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 44px)",
              color: "var(--pk-midnight)",
            }}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 transition-all duration-300"
                style={{
                  boxShadow: "var(--pk-shadow-card)",
                  borderRadius: "20px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "var(--pk-rose-light)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--pk-text-body)",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.7,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-pearl)" bottomColor="#ffffff" />

      {/* The Team */}
      <section id="team" className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 44px)",
                color: "var(--pk-midnight)",
              }}
            >
              The People Behind the Sparkle
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
            >
              Background-checked, professionally trained, and genuinely passionate.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Founder */}
            <div className="text-center max-w-sm">
              <div
                className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4"
                style={{
                  borderColor: "var(--pk-rose-light)",
                  boxShadow: "0 4px 20px rgba(194,125,154,0.2)",
                }}
              >
                <img
                  src={FOUNDER_IMAGE}
                  alt="Carolina - Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3
                className="font-bold text-xl"
                style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-display)" }}
              >
                Carolina
              </h3>
              <p
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Founder & Lead Cleaner
              </p>
              <p
                className="text-sm mt-3 max-w-xs mx-auto"
                style={{
                  color: "var(--pk-text-muted)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                }}
              >
                Started Pink Cleaning to bring reliable, eco-conscious cleaning to every home in Austin, TX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#ffffff" bottomColor="var(--pk-pearl)" />

      {/* Eco Commitment */}
      <section className="py-20 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={ECO_IMAGE}
              alt="Eco-friendly cleaning products"
              className="w-full rounded-3xl"
              style={{ boxShadow: "var(--pk-shadow-img)", borderRadius: "24px" }}
            />
          </div>
          <div>
            <p className="eyebrow mb-3">ECO COMMITMENT</p>
            <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 4vw, 40px)",
                lineHeight: 1.2,
                color: "var(--pk-midnight)",
              }}
            >
              Our Commitment to the Environment
            </h2>
            <p
              className="mt-4 text-base"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--pk-text-body)",
                lineHeight: 1.7,
              }}
            >
              At Pink Cleaning, we believe clean shouldn't come at the cost of the planet.
              That's why every product in our kit is carefully selected.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                "Non-toxic and biodegradable",
                "Safe for children and pets",
                "Free from harsh chemicals (no bleach, no ammonia)",
                "Eco-certified where possible",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-lg">🌿</span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--pk-text-body)", fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block mt-6 text-sm font-bold no-underline"
              style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
            >
              Have questions about our products? Contact us →
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-pearl)" bottomColor="var(--pk-midnight)" />
      <FinalCTA />
    </div>
  );
}
