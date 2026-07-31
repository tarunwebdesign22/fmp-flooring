import Link from "next/link";

export const metadata = {
  title: "Contact us | FMP Flooring",
  description:
    "Get in touch with FMP Flooring for flooring services, estimates, and order support.",
};

const services = [
  "Luxury Vinyl Plank",
  "Broadloom Carpet",
  "Carpet Tile",
  "Rubber Flooring",
  "Hardwood Flooring",
  "Laminate Flooring",
  "VCT Flooring",
];

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

export default function ContactUsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative isolate overflow-hidden bg-blue py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,188,175,0.25),transparent_45%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#fdbf3e]">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s Talk About Your Flooring Project
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            FMP Flooring LLC is available Monday to Friday from 9:00 AM to 5:00 PM.
            Call, email, or send us a message and our team will help you with product
            selection, estimates, and order support.
          </p>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-[#fdbf3e]">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-white">Contact us</span>
          </nav>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10 lg:px-10">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-grey/70 bg-greylight p-6 shadow-[0_8px_26px_rgba(34,30,83,0.08)]">
              <h2 className="text-xl font-bold text-blue">Contact Details</h2>
              <span className="mt-2 block h-1 w-14 bg-teal" aria-hidden="true" />
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-teal">
                    <MapPinIcon />
                  </span>
                  <span className="text-[15px] leading-7 text-blue/80">
                    4013 Dearborn Pl, Concord, NC 28027, United States
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal">
                    <PhoneIcon />
                  </span>
                  <a href="tel:+19802521648" className="text-[15px] text-blue/80 transition-colors hover:text-teal">
                    +1 9802521648
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-teal">
                    <MailIcon />
                  </span>
                  <a href="mailto:flooring@furnishmyplace.com" className="text-[15px] text-blue/80 transition-colors hover:text-teal">
                    flooring@furnishmyplace.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-grey/70 bg-white p-4 shadow-[0_8px_26px_rgba(34,30,83,0.08)]">
              <iframe
                title="FMP Flooring location map"
                src="https://www.google.com/maps?q=4013+Dearborn+Pl,+Concord,+NC+28027&output=embed"
                className="h-64 w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <section className="rounded-2xl border border-grey/70 bg-white p-6 shadow-[0_14px_40px_rgba(34,30,83,0.1)] sm:p-8">
            <h2 className="text-2xl font-bold text-blue sm:text-3xl">Send us a message</h2>
            <p className="mt-3 text-[15px] leading-7 text-blue/70">
              Fill out the form and our team will follow up shortly.
            </p>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-blue">Name *</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-blue">Phone Number *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-blue">Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-blue">Address *</span>
                  <input
                    type="text"
                    name="address"
                    required
                    className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-blue">Services *</span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-blue">Comment or Message *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
                />
              </label>

              <label className="flex items-start gap-3 rounded-lg border border-grey/80 bg-greylight p-4">
                <input type="checkbox" name="smsConsent" className="mt-1 h-4 w-4 accent-teal" />
                <span className="text-xs leading-6 text-blue/75">
                  I agree to receive communications by text message regarding order updates,
                  shipping notifications, promotional offers, and account notifications from
                  FMP Flooring. You may opt out by replying STOP or ask for more information by
                  replying HELP. Message frequency varies. Message and data rates may apply.
                  You may review our Privacy Policy to learn how your data is used.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
