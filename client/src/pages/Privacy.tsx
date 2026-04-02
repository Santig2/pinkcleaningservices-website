import WaveDivider from "@/components/WaveDivider";

export default function PrivacyPage() {
  return (
    <div>
      <section
        className="pt-28 pb-16 px-6"
        style={{ background: "var(--pk-grad-dark)", minHeight: "280px", display: "flex", alignItems: "flex-end" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <h1
            className="font-display font-bold text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.15 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      <WaveDivider topColor="var(--pk-midnight)" bottomColor="#ffffff" />

      <section className="py-16 px-6" style={{ background: "#ffffff" }}>
        <div
          className="max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-body)", color: "var(--pk-text-body)", lineHeight: 1.8 }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--pk-midnight)" }}>Information We Collect</h2>
          <p className="mb-6">
            Pink Cleaning Services LLC collects information you provide directly to us, such as your name, phone number, email address, and service preferences when you submit a quote request or contact us.
          </p>

          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--pk-midnight)" }}>How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to respond to your inquiries, schedule cleaning services, send you confirmations and updates, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--pk-midnight)" }}>Contact Us</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:prettynpinkcleaningservices1@gmail.com" style={{ color: "var(--pk-rose)" }}>
              prettynpinkcleaningservices1@gmail.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:5128453431" style={{ color: "var(--pk-rose)" }}>
              (512) 845-3431
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
