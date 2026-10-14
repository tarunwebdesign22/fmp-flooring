/**
 * Posts form data to the contact API so it can be emailed to the inbox.
 * @param {Record<string, unknown>} fields
 * @param {string} formType
 */
export async function submitForm(fields, formType) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, fields }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || "Something went wrong. Please try again.");
  }

  return payload;
}
