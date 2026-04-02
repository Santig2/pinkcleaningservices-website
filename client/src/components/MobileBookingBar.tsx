import { Link, useLocation } from "wouter";
import { Calendar, Phone } from "lucide-react";

export default function MobileBookingBar() {
  const [location] = useLocation();

  // Hide on contact page
  if (location === "/contact") return null;

  return (
    <div
      id="mobile-booking-bar"
      className="fixed bottom-0 left-0 right-0 md:hidden z-50 flex"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
      }}
    >
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 no-underline py-4"
        style={{
          background: "var(--pk-rose)",
          color: "white",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        <Calendar size={16} />
        Book Now
      </Link>
      <div style={{ width: "1px", background: "var(--pk-rose-dark)" }} />
      <a
        href="tel:5128453431"
        className="flex-1 flex items-center justify-center gap-2 no-underline py-4"
        style={{
          background: "var(--pk-rose-dark)",
          color: "white",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        <Phone size={16} />
        Call Us
      </a>
    </div>
  );
}
