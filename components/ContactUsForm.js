"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submit-form";

const services = [
  "Luxury Vinyl Plank",
  "Broadloom Carpet",
  "Carpet Tile",
  "Rubber Flooring",
  "Hardwood Flooring",
  "Laminate Flooring",
  "VCT Flooring",
];

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitForm(formData, "Contact us form");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className="mt-8 rounded-lg bg-greylight px-4 py-6 text-center text-sm font-medium text-blue">
        Thank you! We&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-blue">Name *</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-blue">Phone Number *</span>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-blue">Address *</span>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-blue">Services *</span>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-grey bg-white px-4 py-3 text-sm text-blue outline-none transition-colors focus:border-teal"
        />
      </label>

      <label className="flex items-start gap-3 rounded-lg border border-grey/80 bg-greylight p-4">
        <input
          type="checkbox"
          name="smsConsent"
          checked={formData.smsConsent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 accent-teal"
        />
        <span className="text-xs leading-6 text-blue/75">
          I agree to receive communications by text message regarding order updates,
          shipping notifications, promotional offers, and account notifications from
          FMP Flooring. You may opt out by replying STOP or ask for more information by
          replying HELP. Message frequency varies. Message and data rates may apply.
          You may review our Privacy Policy to learn how your data is used.
        </span>
      </label>

      {error ? (
        <p className="text-center text-sm font-medium text-red-600">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
