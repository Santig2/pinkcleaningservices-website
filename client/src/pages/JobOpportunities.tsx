import { useState } from "react";
import WaveDivider from "@/components/WaveDivider";
import FinalCTA from "@/components/FinalCTA";

export default function JobOpportunities() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="overflow-x-hidden pt-20">
      <section
        className="pt-20 pb-16 px-6 bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs mb-4 uppercase tracking-widest font-bold"
            style={{ color: "var(--pk-rose)", fontFamily: "var(--font-body)" }}
          >
            Careers
          </p>
          <h1
            className="font-display font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 54px)",
              lineHeight: 1.1,
              color: "var(--pk-midnight)",
            }}
          >
            Join Carolina's Team
          </h1>
          <p
            className="mt-6 text-lg"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--pk-text-body)",
              lineHeight: 1.7,
            }}
          >
            We are looking for dedicated individuals interested in working with Carolina's cleaning. If you have an eye for detail and love making spaces shine, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "var(--pk-pearl)" }}>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border" style={{ borderColor: 'var(--pk-border)' }}>
          <h2 className="text-2xl font-display font-semibold mb-6 text-center" style={{ color: 'var(--pk-midnight)' }}>
            Application Form
          </h2>
          
          {status === "success" ? (
             <div className="text-center py-10">
               <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
               <p className="text-gray-600">Thank you for your interest. We will be in touch with you shortly.</p>
               <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium hover:underline"
                  style={{ color: 'var(--pk-rose)' }}
               >
                 Submit another application
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--pk-midnight)' }}>Full Name *</label>
                  <input required type="text" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-[1px]" style={{ borderColor: 'var(--pk-border)', outlineColor: 'var(--pk-rose)' }} placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--pk-midnight)' }}>Phone Number *</label>
                  <input required type="tel" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-[1px]" style={{ borderColor: 'var(--pk-border)', outlineColor: 'var(--pk-rose)' }} placeholder="(512) 000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--pk-midnight)' }}>Email Address *</label>
                  <input required type="email" className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-[1px]" style={{ borderColor: 'var(--pk-border)', outlineColor: 'var(--pk-rose)' }} placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--pk-midnight)' }}>Message / Experience</label>
                  <textarea rows={4} className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-[1px] resize-none" style={{ borderColor: 'var(--pk-border)', outlineColor: 'var(--pk-rose)' }} placeholder="Tell us a little bit about yourself and any cleaning experience you have..."></textarea>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center py-4 text-base mt-2 transition-opacity"
                style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
