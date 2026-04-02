import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import FinalCTA from "@/components/FinalCTA";

const services = [
  {
    id: "standard",
    bg: "#ffffff",
    eyebrow: "STANDARD CLEAN",
    h2: "Regular Cleaning to Keep Your Home Spotless",
    body: "Our standard cleaning service covers all the essentials to maintain a clean and comfortable home. Perfect for weekly, bi-weekly or monthly maintenance.",
    includes: [
      "Dusting all surfaces and furniture",
      "Vacuuming and mopping all floors",
      "Kitchen cleaning (countertops, stovetop, exterior of appliances)",
      "Bathroom cleaning and sanitizing",
      "Emptying all trash bins",
      "Making beds (linens provided by client)",
      "General tidying",
    ],
    bestFor: ["Regular maintenance", "Weekly or bi-weekly scheduling"],
    pricing: [
      { size: "Studio / 1 Bedroom", price: "$125" },
      { size: "2 Bedrooms", price: "$145" },
      { size: "3 Bedrooms", price: "$165" },
      { size: "4 Bedrooms", price: "$185" },
      { size: "5+ Bedrooms", price: "Contact us" },
    ],
    btnLabel: "Book Standard Clean",
    service: "standard",
  },
  {
    id: "deep",
    bg: "var(--pk-pearl)",
    eyebrow: "DEEP CLEAN",
    h2: "The Ultimate Top-to-Bottom Clean",
    body: "Our deep clean goes beyond the surface. Perfect for homes that haven't been professionally cleaned in a while, seasonal refreshes, or before/after a big event.",
    includes: [
      "Everything in Standard Clean, PLUS:",
      "Inside oven and refrigerator cleaning",
      "Inside cabinets and drawers",
      "Baseboards, window sills & door frames",
      "Light fixtures and ceiling fans",
      "Interior windows",
      "Behind and under furniture",
      "Deep bathroom scrubbing (grout, tile, fixtures)",
    ],
    bestFor: ["First-time clients", "After renovation", "Seasonal deep clean"],
    pricing: [
      { size: "Studio / 1 Bedroom", price: "$320" },
      { size: "2 Bedrooms", price: "$360" },
      { size: "3 Bedrooms", price: "$400" },
      { size: "4 Bedrooms", price: "$440" },
      { size: "5+ Bedrooms", price: "Contact us" },
    ],
    btnLabel: "Book Deep Clean",
    service: "deep",
    popular: true,
  },
  {
    id: "move",
    bg: "#ffffff",
    eyebrow: "MOVE OUT / IN CLEAN",
    h2: "Leave It Spotless — Or Find It Spotless",
    body: "Moving is stressful enough. Our move-out/in cleaning ensures the space is in perfect condition. We cover every corner so you don't have to worry.",
    includes: [
      "Full deep clean of all rooms",
      "Inside all appliances (oven, fridge, microwave)",
      "Inside all cabinets and closets",
      "Carpet cleaning (if applicable)",
      "Baseboards, window sills, blinds",
      "All bathrooms fully sanitized",
      "Final walk-through with checklist",
    ],
    bestFor: ["Tenants moving out", "Landlords", "New homeowners"],
    pricing: [
      { size: "Studio / 1 Bedroom", price: "$320" },
      { size: "2 Bedrooms", price: "$360" },
      { size: "3 Bedrooms", price: "$420" },
      { size: "4 Bedrooms", price: "$480" },
      { size: "5+ Bedrooms", price: "Contact us" },
    ],
    btnLabel: "Book Move Out/In Clean",
    service: "move",
  },
  {
    id: "commercial",
    bg: "var(--pk-pearl)",
    eyebrow: "COMMERCIAL CLEAN",
    h2: "Professional Spaces Deserve Professional Cleaning",
    body: "We keep offices, retail spaces, and commercial environments clean, organized, and ready for business. Flexible scheduling available.",
    includes: [
      "All office areas, desks, and surfaces",
      "Kitchen/break room cleaning",
      "Bathroom sanitizing",
      "Floor cleaning (vacuuming + mopping)",
      "Trash and recycling removal",
      "Glass and window cleaning",
      "Custom checklist for your space",
    ],
    bestFor: ["Offices", "Retail", "Airbnb properties", "Medical offices (basic)"],
    customPricing: true,
    btnLabel: "Request Commercial Quote",
    service: "commercial",
  },
  {
    id: "design",
    bg: "#ffffff",
    eyebrow: "DESIGN YOUR SPACE",
    h2: "Organize, Style & Refresh",
    body: "Beyond cleaning, we offer space organization and light styling services to help you create a home that feels as good as it looks.",
    includes: [
      "Closet and storage organization",
      "Kitchen cabinet organization",
      "Light home styling and decor arrangement",
      "Decluttering consultation",
      "Before/after documentation",
    ],
    bestFor: ["Moving into new home", "Post-declutter", "Seasonal refresh"],
    pricing: [
      { size: "Hourly Rate", price: "$40/hour" },
      { size: "Minimum", price: "2 hours" },
    ],
    btnLabel: "Book Design Your Space",
    service: "design",
  },
];

const faqs = [
  {
    q: "How do I know which service is right for me?",
    a: "If your home is regularly maintained, Standard Clean is perfect. If it's been a few months since a professional clean, start with Deep Clean. Moving? Book Move Out/In. Not sure? Call us — we'll help.",
  },
  {
    q: "Do you bring your own cleaning products?",
    a: "Yes — we bring all eco-friendly, non-toxic products and professional equipment. You don't need to provide anything.",
  },
  {
    q: "Are your team members insured?",
    a: "Absolutely. All team members are fully insured, bonded, and have passed thorough background checks for your peace of mind.",
  },
  {
    q: "Do you offer discounts for recurring services?",
    a: "Yes. Clients on weekly or bi-weekly schedules receive a loyalty discount. Contact us to discuss your recurring plan.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--pk-border)" }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span
          className="font-semibold text-base pr-4"
          style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp size={20} style={{ color: "var(--pk-rose)", flexShrink: 0 }} />
        ) : (
          <ChevronDown size={20} style={{ color: "var(--pk-rose)", flexShrink: 0 }} />
        )}
      </button>
      {open && (
        <p
          className="pb-5 text-sm"
          style={{
            color: "var(--pk-text-body)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-6 min-h-[380px] flex items-end"
        style={{ background: "var(--pk-grad-dark)" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <p
            className="text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
          >
            Home{" "}
            <span style={{ color: "var(--pk-rose)" }}>/</span>{" "}
            Services
          </p>
          <h1
            className="font-display font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 60px)",
              lineHeight: 1.1,
            }}
          >
            Our Cleaning Services
          </h1>
          <p
            className="mt-4 text-lg max-w-lg"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            Every service delivered with care, precision, and eco-friendly products.
          </p>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-midnight)" bottomColor="#ffffff" />

      {/* Service Blocks */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 px-6"
          style={{ background: service.bg }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
            {/* Left: Info */}
            <div>
              <p className="eyebrow mb-3">{service.eyebrow}</p>
              <h2
                className="font-display font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 4vw, 42px)",
                  lineHeight: 1.2,
                  color: "var(--pk-midnight)",
                }}
              >
                {service.h2}
              </h2>
              <p
                className="mt-4 text-lg"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--pk-text-body)",
                  lineHeight: 1.7,
                }}
              >
                {service.body}
              </p>

              <p
                className="mt-8 mb-4 text-xs uppercase tracking-widest font-bold"
                style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
              >
                What's included:
              </p>
              <div className="flex flex-col gap-2">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 min-w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "var(--pk-rose-light)" }}
                    >
                      <CheckCircle2 size={10} style={{ color: "var(--pk-rose)" }} />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--pk-text-body)", fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="mt-6 text-xs uppercase tracking-widest font-bold"
                style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
              >
                Best for:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {service.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1.5 text-sm font-medium"
                    style={{
                      background: "var(--pk-rose-light)",
                      color: "var(--pk-rose)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ boxShadow: "var(--pk-shadow-card)", background: "white" }}
            >
              {service.popular && (
                <div
                  className="absolute top-4 right-4 text-white text-xs font-bold rounded-full px-3 py-1 z-10"
                  style={{ background: "var(--pk-grad-rose)", fontFamily: "var(--font-body)" }}
                >
                  Most Popular
                </div>
              )}
              {service.customPricing ? (
                <div className="p-8 text-center">
                  <p
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "40px",
                      color: "var(--pk-rose)",
                    }}
                  >
                    Custom Quote
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
                  >
                    Pricing based on size and frequency
                  </p>
                  <Link
                    href={`/contact?service=${service.service}`}
                    className="btn-primary no-underline w-full justify-center"
                  >
                    {service.btnLabel} →
                  </Link>
                </div>
              ) : (
                <>
                  <div
                    className="px-6 py-4 grid grid-cols-2"
                    style={{ background: "var(--pk-grad-rose)" }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wide text-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Size
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-wide text-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Starting Price
                    </span>
                  </div>
                  {service.pricing?.map((row, i) => (
                    <div
                      key={row.size}
                      className="px-6 py-4 grid grid-cols-2 border-b"
                      style={{
                        background: i % 2 === 0 ? "white" : "var(--pk-pearl)",
                        borderColor: "var(--pk-border)",
                      }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--pk-text-body)", fontFamily: "var(--font-body)" }}
                      >
                        {row.size}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
                      >
                        {row.price}
                      </span>
                    </div>
                  ))}
                  <div className="px-6 pb-6 pt-4">
                    <Link
                      href={`/contact?service=${service.service}`}
                      className="btn-primary no-underline w-full justify-center"
                    >
                      {service.btnLabel} →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Service Area */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
             <p className="eyebrow mb-3">SERVICE AREA</p>
             <h2
              className="font-display font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 44px)",
                color: "var(--pk-midnight)",
              }}
            >
              Areas We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map iframe */}
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border-2" style={{ borderColor: 'var(--pk-rose-light)' }}>
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882006.182449557!2d-98.5448373752178!3d30.30138406180372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Areas List */}
            <div>
               <p
                className="mb-8 text-lg"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--pk-text-body)",
                  lineHeight: 1.7,
                }}
              >
                We proudly provide premium cleaning services across the greater Austin area, ensuring homes are spotless and ready for you to enjoy.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Austin",
                  "Cedar Park",
                  "Leander",
                  "Georgetown",
                  "Liberty Hill",
                  "Round Rock",
                  "Pflugerville",
                  "Hutto"
                ].map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "var(--pk-rose-light)" }}
                    >
                      <MapPin size={16} style={{ color: "var(--pk-rose)" }} />
                    </div>
                    <span
                      className="font-medium"
                      style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                    >
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-semibold text-center mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 44px)",
              color: "var(--pk-midnight)",
            }}
          >
            Common Questions
          </h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <WaveDivider topColor="var(--pk-pearl)" bottomColor="var(--pk-midnight)" />
      <FinalCTA />
    </div>
  );
}
