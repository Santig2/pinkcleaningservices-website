import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { Link } from "wouter";

const faqs = [
  {
    q: "How quickly can you start?",
    a: "In most cases, we can schedule your first cleaning within 3–5 business days.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No — many clients give us a key or door code. All team members are insured and background-checked.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "Contact us within 24 hours and we'll return to re-clean at no charge. Satisfaction guaranteed.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--pk-border)" }}>
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
          style={{ color: "var(--pk-text-body)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    size: "",
    date: "",
    time: "",
    notes: "",
    source: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.privacy) e.privacy = "You must agree to the Privacy Policy";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate form submission (no backend in static mode)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const inputStyle = {
    width: "100%",
    height: "56px",
    padding: "0 16px",
    borderRadius: "12px",
    border: "1px solid var(--pk-border)",
    background: "white",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    color: "var(--pk-midnight)",
    outline: "none",
    transition: "all 200ms",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: "13px",
    color: "var(--pk-midnight)",
    marginBottom: "8px",
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-6 flex items-center"
        style={{ background: "var(--pk-grad-dark)", minHeight: "280px" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <p
            className="text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
          >
            Home <span style={{ color: "var(--pk-rose)" }}>/</span> Contact
          </p>
          <h1
            className="font-display font-bold text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 52px)",
              lineHeight: 1.15,
            }}
          >
            Let's Get Your Space Sparkling
          </h1>
          <p
            className="mt-4 text-lg max-w-lg"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
          >
            Request a free quote or book your cleaning today. We respond within 24 hours.
          </p>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-midnight)" bottomColor="var(--pk-pearl)" />

      {/* Main Content */}
      <section className="py-16 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "white", boxShadow: "var(--pk-shadow-card)" }}
          >
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "var(--pk-rose-light)" }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 16l8 8 12-12" stroke="var(--pk-rose)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2
                  className="font-display font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    color: "var(--pk-midnight)",
                  }}
                >
                  Thank you, {form.name.split(" ")[0]}! 🌸
                </h2>
                <p
                  className="mt-4 max-w-md mx-auto text-base"
                  style={{ fontFamily: "var(--font-body)", color: "var(--pk-text-body)", lineHeight: 1.7 }}
                >
                  We've received your quote request. Our team will contact you at{" "}
                  <strong>{form.phone}</strong> within the next 24 hours.
                </p>
                <div
                  className="rounded-2xl p-6 mt-8 max-w-sm mx-auto"
                  style={{ background: "var(--pk-pearl)" }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--pk-midnight)", fontFamily: "var(--font-body)" }}
                  >
                    Need to reach us sooner?
                  </p>
                  <a
                    href="tel:5128453431"
                    className="block font-bold text-xl mt-2 no-underline"
                    style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
                  >
                    (512) 845-3431
                  </a>
                </div>
                <Link href="/" className="btn-secondary-dark no-underline mt-8 inline-flex">
                  Back to Home →
                </Link>
              </div>
            ) : (
              <>
                <h2
                  className="font-display font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 4vw, 36px)",
                    color: "var(--pk-midnight)",
                  }}
                >
                  Request a Free Quote
                </h2>
                <p
                  className="text-sm mt-2 mb-8"
                  style={{ color: "var(--pk-text-muted)", fontFamily: "var(--font-body)" }}
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="First and last name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? "#ef4444" : "var(--pk-border)",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--pk-rose)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(194,125,154,0.15)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = errors.name ? "#ef4444" : "var(--pk-border)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(XXX) XXX-XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                      style={{
                        ...inputStyle,
                        borderColor: errors.phone ? "#ef4444" : "var(--pk-border)",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--pk-rose)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(194,125,154,0.15)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = errors.phone ? "#ef4444" : "var(--pk-border)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? "#ef4444" : "var(--pk-border)",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--pk-rose)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(194,125,154,0.15)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = errors.email ? "#ef4444" : "var(--pk-border)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>Service Interested In *</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{
                        ...inputStyle,
                        borderColor: errors.service ? "#ef4444" : "var(--pk-border)",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "44px",
                      }}
                    >
                      <option value="">--- Select a service ---</option>
                      <option value="standard">Standard Clean (from $125)</option>
                      <option value="deep">Deep Clean (from $320)</option>
                      <option value="move">Move Out / In Clean (from $320)</option>
                      <option value="commercial">Commercial Clean (custom quote)</option>
                      <option value="design">Design Your Space ($40/hr)</option>
                      <option value="unsure">Not sure — need a recommendation</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1.5">{errors.service}</p>}
                  </div>

                  {/* Home Size */}
                  <div>
                    <label style={labelStyle}>Home Size / Space</label>
                    <select
                      value={form.size}
                      onChange={(e) => setForm({ ...form, size: e.target.value })}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "44px",
                      }}
                    >
                      <option value="">--- Select size ---</option>
                      <option value="studio">Studio / 1 Bedroom</option>
                      <option value="2br">2 Bedrooms</option>
                      <option value="3br">3 Bedrooms</option>
                      <option value="4br">4 Bedrooms</option>
                      <option value="5br">5+ Bedrooms</option>
                      <option value="commercial">Commercial space</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label style={labelStyle}>Preferred Date</label>
                    <input
                      type="date"
                      min={minDate}
                      max={maxDate}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--pk-rose)";
                        (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(194,125,154,0.15)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "var(--pk-border)";
                        (e.target as HTMLInputElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label style={labelStyle}>Preferred Time</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "morning", label: "Morning", sub: "8am–12pm" },
                        { value: "afternoon", label: "Afternoon", sub: "12pm–5pm" },
                        { value: "evening", label: "Evening", sub: "5pm–7pm" },
                      ].map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setForm({ ...form, time: t.value })}
                          className="rounded-xl border px-4 py-3 text-center cursor-pointer transition-all"
                          style={{
                            borderColor: form.time === t.value ? "var(--pk-rose)" : "var(--pk-border)",
                            background: form.time === t.value ? "var(--pk-rose-light)" : "white",
                            color: form.time === t.value ? "var(--pk-rose)" : "var(--pk-text-body)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          <p className="font-medium text-sm">{t.label}</p>
                          <p className="text-xs opacity-70">{t.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label style={labelStyle}>Additional Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Anything we should know? Pet allergies, special instructions, etc."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      style={{
                        ...inputStyle,
                        height: "auto",
                        padding: "16px",
                        resize: "none",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "var(--pk-rose)";
                        (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(194,125,154,0.15)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "var(--pk-border)";
                        (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Source */}
                  <div>
                    <label style={labelStyle}>How did you hear about us? (optional)</label>
                    <select
                      value={form.source}
                      onChange={(e) => setForm({ ...form, source: e.target.value })}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A7A8A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "44px",
                      }}
                    >
                      <option value="">--- Select ---</option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="referral">Referral</option>
                      <option value="nextdoor">Nextdoor</option>
                      <option value="yelp">Yelp</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Privacy */}
                  <div className="flex gap-3 items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={form.privacy}
                      onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                      className="mt-1 w-5 h-5 flex-shrink-0"
                      style={{ accentColor: "var(--pk-rose)" }}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm cursor-pointer"
                      style={{ color: "var(--pk-text-body)", fontFamily: "var(--font-body)" }}
                    >
                      I agree to the{" "}
                      <Link href="/privacy" className="no-underline font-medium" style={{ color: "var(--pk-rose)" }}>
                        Privacy Policy
                      </Link>{" "}
                      and Terms of Service
                    </label>
                  </div>
                  {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy}</p>}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-full text-white font-bold text-sm tracking-wide mt-2 flex items-center justify-center gap-2 transition-all"
                    style={{
                      background: loading ? "rgba(194,125,154,0.6)" : "var(--pk-grad-rose)",
                      fontFamily: "var(--font-body)",
                      boxShadow: loading ? "none" : "var(--pk-shadow-btn)",
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send My Quote Request →"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info Box */}
          <div
            className="rounded-3xl p-8 text-white sticky top-24 self-start"
            style={{ background: "var(--pk-midnight)" }}
          >
            <h3
              className="font-display font-bold text-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in Touch
            </h3>
            <div className="my-6" style={{ height: "1px", background: "rgba(194,125,154,0.3)" }} />

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <Phone size={20} style={{ color: "var(--pk-rose)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a
                    href="tel:5128453431"
                    className="block font-bold text-xl no-underline text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    (512) 845-3431
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} style={{ color: "var(--pk-rose)", flexShrink: 0, marginTop: "2px" }} />
                <a
                  href="mailto:prettynpinkcleaningservices1@gmail.com"
                  className="text-sm no-underline"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
                >
                  prettynpinkcleaningservices1@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} style={{ color: "var(--pk-rose)", flexShrink: 0, marginTop: "2px" }} />
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
                >
                  <p>Mon–Fri: 8:00am – 6:00pm</p>
                  <p>Saturday: 9:00am – 3:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} style={{ color: "var(--pk-rose)", flexShrink: 0, marginTop: "2px" }} />
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
                >
                  Serving Austin, TX & surrounding areas
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Instagram size={20} style={{ color: "var(--pk-rose)", flexShrink: 0, marginTop: "2px" }} />
                <a
                  href="https://instagram.com/pinkcleaningservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold no-underline"
                  style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
                >
                  @pinkcleaningservices
                </a>
              </div>
            </div>

            <div
              className="rounded-xl p-4 mt-8"
              style={{ border: "1px solid rgba(194,125,154,0.2)", background: "rgba(194,125,154,0.1)" }}
            >
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
              >
                ⚡ We typically respond within 24 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-semibold text-center mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "var(--pk-midnight)",
            }}
          >
            Quick Answers
          </h2>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
