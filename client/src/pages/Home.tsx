import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Star, Home as HomeIcon, Shield, Leaf, CheckCircle2,
  ChevronLeft, ChevronRight, ArrowRight
} from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import FinalCTA from "@/components/FinalCTA";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503824925/nmTfdggJc6DoM6DPCLuCLL/hero-cleaning-Kn3xwAAqBeRoEqa5KAamHe.webp";
const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503824925/nmTfdggJc6DoM6DPCLuCLL/team-cleaning-NmqA8C426iZ4rSDugPcCdy.webp";

const services = [
  {
    id: "standard",
    icon: <HomeIcon size={28} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    price: "From $125",
    title: "Standard Clean",
    desc: "Regular cleaning to keep your home consistently spotless and comfortable.",
    link: "/contact?service=standard",
  },
  {
    id: "deep",
    icon: <Star size={28} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    price: "From $320",
    title: "Deep Clean",
    desc: "A thorough top-to-bottom clean for homes that need extra attention or a fresh start.",
    link: "/contact?service=deep",
    popular: true,
  },
  {
    id: "move",
    icon: <ArrowRight size={28} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    price: "From $320",
    title: "Move Out / In Clean",
    desc: "Spotless spaces for tenants moving out or new owners moving in.",
    link: "/contact?service=move",
  },
  {
    id: "commercial",
    icon: <Shield size={28} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    price: "Custom Quote",
    title: "Commercial Clean",
    desc: "Professional cleaning solutions for offices, retail spaces and commercial properties.",
    link: "/contact?service=commercial",
  },
  {
    id: "design",
    icon: <Leaf size={28} strokeWidth={1.5} style={{ color: "var(--pk-rose)" }} />,
    price: "$40 / hour",
    title: "Design Your Space",
    desc: "Organization and styling services to transform and refresh your living space.",
    link: "/contact?service=design",
  },
];

const benefits = [
  {
    title: "Eco-Friendly Products",
    desc: "Non-toxic, biodegradable products — safe for your family, pets and the planet.",
  },
  {
    title: "Reliable & Always On-Time",
    desc: "We show up when we say we will. Every appointment, every time. No exceptions.",
  },
  {
    title: "Background-Checked Team",
    desc: "Every team member is thoroughly vetted, fully insured, and professionally trained.",
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "Not happy? We'll return within 24 hours to make it right — at no extra charge.",
  },
  {
    title: "Personalized Service",
    desc: "We adapt to your home's unique needs. No one-size-fits-all approach here.",
  },
];

const reviews = [
  {
    text: "Absolutely incredible service. My apartment has never looked this clean. Professional, thorough, and so friendly. Highly recommend!",
    name: "Sarah M.",
    city: "Austin, TX",
    initials: "SM",
  },
  {
    text: "Booked the deep clean before selling my house. It sold the first weekend. I truly believe the spotless condition made a huge difference.",
    name: "James T.",
    city: "Austin, TX",
    initials: "JT",
  },
  {
    text: "Been using Pink Cleaning monthly for 6 months. Consistent, reliable and the eco-friendly products are a huge plus. Worth every penny.",
    name: "Maria R.",
    city: "Austin, TX",
    initials: "MR",
  },
  {
    text: "The move-out cleaning was exceptional. Got my full security deposit back. 10/10 would recommend to anyone looking for a real professional clean.",
    name: "David K.",
    city: "Austin, TX",
    initials: "DK",
  },
];

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [showScroll, setShowScroll] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);
  const trustRef = useIntersectionObserver();
  const servicesRef = useIntersectionObserver();
  const whyRef = useIntersectionObserver();
  const stepsRef = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScroll(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextReview = () => setReviewIndex((i) => (i + 1) % reviews.length);
  const prevReview = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <div className="overflow-x-hidden">
      {/* ===== SECTION 1: HERO ===== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--pk-grad-dark)" }}
      >
        {/* Background image with parallax */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            willChange: "transform",
          }}
        >
          <img
            src={HERO_IMAGE}
            alt="Premium cleaning service"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
        </div>
        {/* Mobile background */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p
              className="eyebrow mb-4 animate-fade-up"
              style={{ color: "rgba(194,125,154,0.9)" }}
            >
              AUSTIN, TX · ECO-FRIENDLY CLEANING
            </p>

            {/* H1 */}
            <h1
              className="font-display font-bold text-white animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 9vw, 84px)",
                lineHeight: 1.05,
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Your Home,{" "}
              <span style={{ color: "var(--pk-rose)" }}>Spotlessly</span>{" "}
              Clean.
            </h1>

            {/* Sub */}
            <p
              className="text-lg mt-6 animate-fade-up delay-200"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.85,
                maxWidth: "520px",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Premium eco-friendly residential & commercial cleaning in Austin, TX.
              Insured, background-checked, and obsessed with detail.
            </p>

            {/* Trust inline */}
            <div
              className="flex items-center gap-6 mt-6 flex-wrap animate-fade-up delay-400"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              {["Insured & Bonded", "Eco-Friendly Products", "Background-Checked"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(194,125,154,0.2)" }}
                    >
                      <CheckCircle2 size={10} style={{ color: "var(--pk-rose)" }} />
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 animate-fade-up delay-500"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <Link href="/contact" className="btn-primary no-underline w-full sm:w-auto justify-center">
                Get Your Free Quote →
              </Link>
              <Link href="/services" className="btn-secondary-light no-underline w-full sm:w-auto justify-center">
                View Services
              </Link>
            </div>

            {/* Social Proof */}
            <div
              className="flex items-center gap-3 mt-8 animate-fade-up delay-650"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="flex">
                {["SM", "JT", "MR", "DK"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2"
                    style={{
                      background:
                        i === 0
                          ? "var(--pk-rose-light)"
                          : i === 1
                          ? "rgba(194,125,154,0.3)"
                          : i === 2
                          ? "var(--pk-pearl)"
                          : "#E8E0E4",
                      color: "var(--pk-rose-dark)",
                      borderColor: "rgba(30,30,42,0.3)",
                      marginLeft: i > 0 ? "-10px" : "0",
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
              >
                Trusted by hundreds of satisfied clients
              </span>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div
          className="absolute bottom-8 right-8 bg-white rounded-2xl px-6 py-4 hidden md:block animate-float"
          style={{ boxShadow: "0 8px 32px rgba(30,30,42,0.2)" }}
        >
          <div className="flex gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} fill="#C27D9A" style={{ color: "var(--pk-rose)" }} />
            ))}
          </div>
          <p
            className="font-bold text-sm"
            style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
          >
            5.0 · Google Rated
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
          >
            100% Satisfaction Guaranteed
          </p>
        </div>

        {/* Scroll Indicator */}
        {showScroll && (
          <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
            >
              Scroll
            </p>
            <div className="animate-bounce-slow flex justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        )}
      </section>

      {/* Wave: dark → white */}
      <WaveDivider topColor="var(--pk-midnight)" bottomColor="#ffffff" />

      {/* ===== SECTION 2: TRUST BAR ===== */}
      <section
        ref={trustRef.ref}
        className="py-6 px-6"
        style={{
          background: "#ffffff",
          borderTop: "1px solid var(--pk-border)",
          borderBottom: "1px solid var(--pk-border)",
        }}
      >
        <div className="max-w-5xl mx-auto flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {[
            { icon: <HomeIcon size={28} strokeWidth={1.5} />, text: "500+ Homes Cleaned" },
            { icon: <Star size={28} strokeWidth={1.5} />, text: "5-Star Rated Service" },
            { icon: <Leaf size={28} strokeWidth={1.5} />, text: "100% Eco-Friendly Products" },
            { icon: <Shield size={28} strokeWidth={1.5} />, text: "Fully Insured & Bonded" },
          ].map((item, i) => (
            <div
              key={item.text}
              className="flex items-center gap-3"
              style={{
                opacity: trustRef.isVisible ? 1 : 0,
                transform: trustRef.isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              <span style={{ color: "var(--pk-rose)" }}>{item.icon}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Wave: white → pearl */}
      <WaveDivider topColor="#ffffff" bottomColor="var(--pk-pearl)" />

      {/* ===== SECTION 3: SERVICES OVERVIEW ===== */}
      <section
        ref={servicesRef.ref}
        className="py-24 px-6"
        style={{ background: "var(--pk-pearl)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-3">WHAT WE OFFER</p>
            <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 50px)",
                lineHeight: 1.15,
                color: "var(--pk-midnight)",
              }}
            >
              Cleaning Services Tailored to You
            </h2>
            <p
              className="mt-4 text-lg"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--pk-text-body)",
                lineHeight: 1.7,
              }}
            >
              From routine maintenance to deep transformations — we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="service-card"
                style={{
                  opacity: servicesRef.isVisible ? 1 : 0,
                  transform: servicesRef.isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 80}ms`,
                }}
              >
                {service.popular && (
                  <div
                    className="absolute top-4 right-4 text-white text-xs font-bold rounded-full px-3 py-1"
                    style={{ background: "var(--pk-grad-rose)", fontFamily: "var(--font-body)" }}
                  >
                    POPULAR
                  </div>
                )}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "var(--pk-rose-light)" }}
                >
                  {service.icon}
                </div>
                <p
                  className="text-3xl font-bold"
                  style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
                >
                  {service.price}
                </p>
                <h3
                  className="font-bold text-xl mt-2 mb-3"
                  style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: "var(--pk-text-body)",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="text-sm font-bold no-underline flex items-center gap-1 group"
                  style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
                >
                  Book {service.title}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-sm font-bold no-underline underline"
              style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
            >
              View all services & pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave: pearl → white */}
      <WaveDivider topColor="var(--pk-pearl)" bottomColor="#ffffff" />

      {/* ===== SECTION 4: WHY CHOOSE US ===== */}
      <section
        ref={whyRef.ref}
        className="py-24 px-6"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
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
                maxHeight: "560px",
              }}
            />
          </div>

          {/* Content */}
          <div
            style={{
              opacity: whyRef.isVisible ? 1 : 0,
              transform: whyRef.isVisible ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.6s ease",
            }}
          >
            <p className="eyebrow mb-3">WHY PINK CLEANING</p>
            <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 50px)",
                lineHeight: 1.15,
                color: "var(--pk-midnight)",
              }}
            >
              More Than Clean — It's a Standard.
            </h2>
            <p
              className="mt-4 mb-10 text-lg"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--pk-text-body)",
                lineHeight: 1.7,
              }}
            >
              We don't just clean your home — we take care of it. Here's what makes
              every Pink Clean different.
            </p>
            <div className="flex flex-col gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 min-w-8 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--pk-rose-light)" }}
                  >
                    <CheckCircle2 size={14} strokeWidth={2.5} style={{ color: "var(--pk-rose)" }} />
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                    >
                      {b.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--pk-text-muted)",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.6,
                      }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-sm font-bold no-underline"
              style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave: white → dark */}
      <WaveDivider topColor="#ffffff" bottomColor="var(--pk-midnight)" />

      {/* ===== SECTION 5: HOW IT WORKS ===== */}
      <section
        ref={stepsRef.ref}
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "var(--pk-grad-dark)" }}
      >
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(194,125,154,0.05) 0%, transparent 70%)" }}
        />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              THE PROCESS
            </p>
            <h2
              className="font-display font-semibold text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 50px)",
                lineHeight: 1.15,
              }}
            >
              Spotless in 3 Simple Steps
            </h2>
            <p
              className="mt-4 text-lg"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
              }}
            >
              We've made booking and getting your home cleaned as effortless as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute"
              style={{
                top: "52px",
                left: "33%",
                right: "33%",
                borderTop: "1px dashed rgba(255,255,255,0.2)",
              }}
            />
            {[
              {
                num: "01",
                title: "Book Your Cleaning",
                text: "Schedule online or give us a call. Tell us about your space and what you need.",
              },
              {
                num: "02",
                title: "We Show Up & Shine",
                text: "Our team arrives fully equipped with eco-friendly products. Right on time.",
              },
              {
                num: "03",
                title: "Enjoy Your Space",
                text: "Come home to a spotless, fresh-smelling space. Stress-free, every time.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="text-center relative z-10"
                style={{
                  opacity: stepsRef.isVisible ? 1 : 0,
                  transform: stepsRef.isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 150}ms`,
                }}
              >
                <div
                  className="w-26 h-26 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{
                    width: "104px",
                    height: "104px",
                    background: "var(--pk-slate)",
                    border: "1px solid rgba(194,125,154,0.3)",
                  }}
                >
                  <span
                    className="font-display font-bold italic"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "48px",
                      color: "var(--pk-rose)",
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="font-bold text-lg text-white mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm max-w-xs mx-auto"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
            >
              Ready to get started?
            </p>
            <Link href="/contact" className="btn-primary no-underline">
              Book Your Cleaning Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave: dark → pearl */}
      <WaveDivider topColor="var(--pk-midnight)" bottomColor="var(--pk-pearl)" />

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <section className="py-24 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">WHAT OUR CLIENTS SAY</p>
            <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 50px)",
                lineHeight: 1.15,
                color: "var(--pk-midnight)",
              }}
            >
              Real Results, Real Reviews
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span
                className="font-bold"
                style={{ fontSize: "56px", color: "var(--pk-midnight)", fontFamily: "var(--font-body)", lineHeight: 1 }}
              >
                5.0
              </span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={24} fill="#D4A017" style={{ color: "#D4A017" }} />
                  ))}
                </div>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
                >
                  (Based on Google Reviews)
                </p>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[reviews[reviewIndex], reviews[(reviewIndex + 1) % reviews.length]].map(
                (review, i) => (
                  <div
                    key={`${review.name}-${i}`}
                    className="bg-white rounded-2xl p-8 relative"
                    style={{ boxShadow: "var(--pk-shadow-card)" }}
                  >
                    <span
                      className="absolute -top-4 left-6 font-display select-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "80px",
                        color: "var(--pk-rose-light)",
                        lineHeight: 1,
                      }}
                    >
                      "
                    </span>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} fill="#D4A017" style={{ color: "#D4A017" }} />
                      ))}
                    </div>
                    <p
                      className="italic mb-6"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20px",
                        color: "var(--pk-midnight)",
                        lineHeight: 1.65,
                      }}
                    >
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: "var(--pk-rose-light)",
                          color: "var(--pk-rose-dark)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                        >
                          {review.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
                        >
                          {review.city}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <ChevronLeft size={20} style={{ color: "var(--pk-midnight)" }} />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewIndex(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === reviewIndex ? "8px" : "6px",
                      height: i === reviewIndex ? "8px" : "6px",
                      background: i === reviewIndex ? "var(--pk-rose)" : "var(--pk-border)",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
              >
                <ChevronRight size={20} style={{ color: "var(--pk-midnight)" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: pearl → dark */}
      <WaveDivider topColor="var(--pk-pearl)" bottomColor="var(--pk-midnight)" />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
