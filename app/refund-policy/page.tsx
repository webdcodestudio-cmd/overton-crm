import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Footer from "@/components/layout/Footer";
import TrialCallout from "@/components/sections/TrialCallout";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Overton CRM Refund Policy — understand our cancellation and refund terms for subscription plans.",
  alternates: {
    canonical: "https://overton.in/refund-policy",
  },
};

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFBFF] min-h-screen">
        {/* HEADER */}
        <div className="bg-[#0F1629] pb-15 pt-25">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#93a8f4] text-sm font-bold uppercase tracking-widest mb-3">
                Legal
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Refund Policy
              </h1>
              <p className="text-white/50 text-sm">
                Last updated: June 1, 2025
              </p>
            </div>
          </Container>
        </div>

        {/* CONTENT */}
        <Container>
          <div className="max-w-3xl mx-auto py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#3D5AF1] font-semibold mb-10 hover:underline"
            >
              ← Back to Home
            </Link>

            <div className="space-y-10">
              <Section title="1. Overview">
                <p>
                  At Overton CRM, we want you to be completely satisfied with
                  our service. This Refund Policy outlines the terms under which
                  refunds are issued for subscriptions to our real estate CRM
                  platform.
                </p>
                <p>
                  We offer a <strong>30-day free trial</strong> — no credit card
                  required — so you can fully evaluate Overton CRM before making
                  any payment commitment.
                </p>
              </Section>

              <Section title="2. Free Trial">
                <p>
                  All new Overton CRM accounts receive a free 30-day trial with
                  full access to all features of your selected plan. During this
                  period:
                </p>
                <ul>
                  <li>No payment is required</li>
                  <li>No credit card needs to be on file</li>
                  <li>You can cancel at any time with no charges</li>
                  <li>
                    All your data is retained for 30 days after trial expiry
                  </li>
                </ul>
              </Section>

              <Section title="3. Subscription Refunds">
                <SubSection title="3.1 Monthly Plans">
                  <p>
                    For monthly subscriptions, we offer a{" "}
                    <strong>7-day refund window</strong> from the date of
                    payment. If you are not satisfied within 7 days of your
                    first paid billing cycle, contact us for a full refund.
                  </p>
                  <p>
                    After 7 days, monthly subscriptions are non-refundable. You
                    may cancel at any time to prevent future charges.
                  </p>
                </SubSection>
                <SubSection title="3.2 Annual Plans">
                  <p>
                    For annual subscriptions, we offer a{" "}
                    <strong>14-day refund window</strong> from the date of
                    payment. If you are not satisfied within 14 days of your
                    annual payment, contact us for a full refund.
                  </p>
                  <p>
                    After 14 days, annual subscriptions are non-refundable.
                    However, you may cancel at any time to prevent auto-renewal.
                  </p>
                </SubSection>
              </Section>

              <Section title="4. Eligibility for Refund">
                <p>Refunds are eligible under the following conditions:</p>
                <ul>
                  <li>
                    Request is made within the refund window (7 days monthly /
                    14 days annual)
                  </li>
                  <li>The account has not violated our Terms of Service</li>
                  <li>
                    The refund request is made via email to support@overton.in
                  </li>
                  <li>
                    The subscription was not purchased through a third-party
                    reseller
                  </li>
                </ul>
                <p>Refunds will NOT be issued for:</p>
                <ul>
                  <li>Requests made after the refund window has passed</li>
                  <li>Accounts terminated for Terms of Service violations</li>
                  <li>Add-on services that have already been activated</li>
                  <li>
                    Partial months or unused portions of a monthly subscription
                  </li>
                </ul>
              </Section>

              <Section title="5. Add-On Services">
                <p>
                  Add-on services (such as WhatsApp Integration, IVR
                  Integration, Website Form Integration, etc.) are
                  non-refundable once activated, as these involve third-party
                  setup and integration costs.
                </p>
                <p>
                  If an add-on fails to function as described due to a technical
                  issue on our end, we will provide a full refund or credit for
                  that add-on upon verification.
                </p>
              </Section>

              <Section title="6. Cancellation">
                <p>You may cancel your Overton CRM subscription at any time:</p>
                <ul>
                  <li>From your account settings under "Billing"</li>
                  <li>
                    By emailing{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>
                  </li>
                  <li>
                    By calling{" "}
                    <a href="tel:91 90230 16487" className="text-[#3D5AF1]">
                      +91 90230 16487
                    </a>
                    during business hours
                  </li>
                </ul>
                <p>
                  Upon cancellation, your account will remain active until the
                  end of the current billing period. After that, your account
                  will be downgraded and your data retained for 30 days before
                  permanent deletion.
                </p>
              </Section>

              <Section title="7. Refund Process">
                <p>Approved refunds are processed as follows:</p>
                <ul>
                  <li>Refund requests are reviewed within 2 business days</li>
                  <li>
                    Approved refunds are processed within 5-7 business days
                  </li>
                  <li>Refunds are credited to the original payment method</li>
                  <li>
                    Bank processing time may add an additional 3-5 business days
                    depending on your bank
                  </li>
                </ul>
              </Section>

              <Section title="8. Service Credits">
                <p>
                  In cases where a refund is not applicable but we acknowledge a
                  service issue (e.g., extended downtime, failed integration),
                  we may offer service credits to your account at our
                  discretion. Credits can be applied to future billing cycles.
                </p>
              </Section>

              <Section title="9. Contact for Refunds">
                <p>To request a refund, please contact our support team:</p>
                <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6 mt-4">
                  <p className="font-bold text-[#0F1629] mb-3">
                    Refund Request Contact
                  </p>
                  <div className="space-y-2 text-sm text-[#4A5578]">
                    <p>
                      <a
                        href="mailto:support@overton.in"
                        className="text-[#3D5AF1] font-semibold"
                      >
                        support@overton.in
                      </a>
                    </p>
                    <p>📞 Phone: +91 90230 16487</p>
                    <p>🕐 Response time: Within 2 business days</p>
                    <p>📍 Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                <p className="mt-4">
                  Please include your account email, order ID, and reason for
                  the refund request in your email.
                </p>
              </Section>
            </div>
          </div>
        </Container>
      </main>
      <TrialCallout />
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-[#0F1629] mb-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[#4A5578] leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ml-4">
      <h3 className="text-base font-bold text-[#0F1629] mb-2">{title}</h3>
      <div className="text-[#4A5578] text-sm space-y-2">{children}</div>
    </div>
  );
}
