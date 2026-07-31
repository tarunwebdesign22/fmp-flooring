import Link from "next/link";

export const metadata = {
  title: "Terms of Use | FMP Flooring",
  description:
    "Please read these Terms of Use carefully before using the FMP Flooring website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="border-b border-grey bg-greylight">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold text-blue sm:text-4xl">
            Terms of Use
          </h1>
          <span className="mt-3 block h-1 w-16 bg-teal" aria-hidden="true" />
          <nav aria-label="Breadcrumb" className="mt-5 text-sm text-blue/60">
            <Link href="/" className="transition-colors hover:text-teal">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-blue">Terms of Use</span>
          </nav>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="space-y-8 text-[15px] leading-7 text-blue/80">
          <p>
            Please read these Terms of Use carefully before using the FMP Flooring
            website. By accessing, browsing, or purchasing from our website, you
            agree to be bound by these terms and all applicable laws and
            regulations. If you do not agree with any part of these terms, please
            discontinue use of the website immediately.
          </p>

          <p>
            By clicking “I Accept” or “Submit Order,” you confirm that you have
            read, understood, and accepted these Terms of Use.
          </p>

          <section>
            <h2 className="text-xl font-bold text-blue">1. Eligibility</h2>
            <p className="mt-3">
              You must be at least 18 years of age and legally capable of entering
              into binding contracts to place an order on our website. By using
              this site, you represent that you meet these requirements and that
              all information you provide is accurate and complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">2. Trademark</h2>
            <p className="mt-3">
              All service marks, trademarks, trade names, logos, and brand
              identifiers displayed on the FMP Flooring website are owned by or
              licensed to FMP Flooring. Nothing on this website grants any license
              or right to use any trademark without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">3. Copyright</h2>
            <p className="mt-3">
              All content on the FMP Flooring website — including text, product
              descriptions, images, graphics, design layouts, videos, and software
              — is protected by international copyright laws and is the exclusive
              property of FMP Flooring. No content may be copied, reproduced,
              republished, distributed, or used for commercial purposes in any
              form without written consent from the owner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              4. Account Registration &amp; Security
            </h2>
            <p className="mt-3">
              When creating an account, you are responsible for maintaining the
              confidentiality of your login credentials and for all activity that
              occurs under your account. You agree to notify us immediately of
              any unauthorized access or suspected breach. FMP Flooring reserves
              the right to suspend or terminate any account found to be in
              violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              5. Fraud Protection &amp; Order Verification
            </h2>
            <p className="mt-3">
              To ensure a secure and user-friendly shopping experience, FMP
              Flooring follows several precautionary measures. We verify that
              every account and purchase belongs to an authorized individual with
              accurate details, which helps prevent consumer fraud.
            </p>
            <p className="mt-3">
              Our system cross-verifies your information during account creation
              or transactions through a verification email sent to your registered
              email address, or a One Time Password (OTP) sent to your registered
              mobile number. We also wait for valid authorization from the credit
              card issuer before processing your order. If any discrepancy is
              detected, you will be contacted and informed promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              6. Pricing, Payment &amp; Order Acceptance
            </h2>
            <p className="mt-3">
              All prices are listed in USD and are subject to change without prior
              notice. Placing an order constitutes an offer to purchase;
              acceptance occurs only when your order is confirmed and shipped.
            </p>
            <p className="mt-3">
              FMP Flooring reserves the right to cancel, limit, or refuse any
              order — including orders where a pricing or payment error has
              occurred due to a programming bug, system malfunction, or
              typographical error. In such cases, any amount charged will be
              refunded in full.
            </p>
            <p className="mt-3">
              NOTE: FMP Flooring holds no responsibility for typographic errors
              appearing on the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              7. Product Representation &amp; Color Variance
            </h2>
            <p className="mt-3">
              We make every effort to display product colors, textures, patterns,
              and dimensions as accurately as possible. However, actual product
              appearance may vary due to monitor settings, screen calibration,
              lighting conditions, dye lots, and natural material variation. Minor
              variations in color, texture, size, or finish are not considered
              defects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              8. Shipping, Delivery &amp; Returns
            </h2>
            <p className="mt-3">
              Shipping timelines, delivery estimates, return eligibility,
              restocking fees, and cancellation windows are governed by our
              Shipping Policy and Return Policy, which are incorporated into these
              Terms by reference. Delivery dates are estimates only and are not
              guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">9. Prohibited Use</h2>
            <p className="mt-3">You agree not to use the website to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Violate any applicable law or regulation</li>
              <li>Transmit malicious code, viruses, or harmful scripts</li>
              <li>
                Attempt unauthorized access to our systems, servers, or user data
              </li>
              <li>
                Scrape, data-mine, or extract content using automated tools
              </li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>
                Infringe upon the intellectual property rights of FMP Flooring or
                any third party
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              10. User-Submitted Content
            </h2>
            <p className="mt-3">
              By submitting reviews, photographs, comments, or other content to
              our website, you grant FMP Flooring a non-exclusive, royalty-free,
              worldwide license to use, display, reproduce, and distribute that
              content for marketing and operational purposes. You confirm that you
              own the rights to any content you submit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">11. Third-Party Links</h2>
            <p className="mt-3">
              Our website may contain links to third-party websites or services.
              These links are provided for convenience only. FMP Flooring does not
              control, endorse, or assume responsibility for the content, privacy
              practices, or reliability of any third-party site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              12. Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              The website and all products are provided on an “as is” and “as
              available” basis. To the fullest extent permitted by law, FMP
              Flooring disclaims all warranties, express or implied, including
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the website will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              13. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by law, FMP Flooring shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages — including loss of profits, data, or goodwill —
              arising from your use of the website or products purchased through
              it. Our total liability shall not exceed the amount paid by you for
              the specific product giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">14. Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify and hold harmless FMP Flooring, its officers,
              employees, affiliates, and agents from any claims, damages, losses,
              liabilities, and expenses (including reasonable legal fees) arising
              out of your violation of these Terms or misuse of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">15. Privacy</h2>
            <p className="mt-3">
              Your use of the website is also governed by our Privacy Policy,
              which explains how we collect, use, store, and protect your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">
              16. Changes to These Terms
            </h2>
            <p className="mt-3">
              FMP Flooring reserves the right to modify, update, or replace these
              Terms of Use at any time without prior notice. Changes take effect
              upon posting to the website. Your continued use of the website after
              any update constitutes acceptance of the revised terms. We encourage
              you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">18. Severability</h2>
            <p className="mt-3">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full force
              and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-blue">19. Contact Us</h2>
            <p className="mt-3">
              For questions regarding these Terms of Use
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
