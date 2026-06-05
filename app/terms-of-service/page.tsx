import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Footer from "@/components/layout/Footer";
import TrialCallout from "@/components/sections/TrialCallout";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Overton CRM Terms of Service — terms and conditions for using our real estate CRM platform.",
  alternates: {
    canonical: "https://overton.in/terms-of-service",
  },
};

export default function TermsOfService() {
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
                Terms of Service
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
              <Section title="1. Acceptance of Terms">
                <p>
                  By accessing or using Overton CRM ("Service") at overton.in,
                  you agree to be bound by these Terms of Service ("Terms"). If
                  you do not agree to these Terms, you may not use our Service.
                </p>
                <p>
                  These Terms apply to all users, including individuals,
                  companies, and organizations that access or use our Service.
                  By using Overton CRM, you represent that you are at least 18
                  years of age and have the legal authority to enter into this
                  agreement.
                </p>
              </Section>

              <Section title="2. Description of Service">
                <p>
                  Overton CRM is a cloud-based Customer Relationship Management
                  (CRM) software platform designed specifically for Indian real
                  estate developers, brokers, and mandate firms. The Service
                  includes:
                </p>
                <ul>
                  <li>Lead management and pipeline tracking</li>
                  <li>AI-powered lead qualification and suggestions</li>
                  <li>RERA-compliant document generation</li>
                  <li>Inventory management for real estate projects</li>
                  <li>WhatsApp and property portal integrations</li>
                  <li>Stage-wise payment tracking</li>
                  <li>Mobile applications for iOS and Android</li>
                </ul>
              </Section>

              <Section title="3. Account Registration">
                <p>
                  To use Overton CRM, you must create an account by providing
                  accurate and complete information. You are responsible for:
                </p>
                <ul>
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>
                    Ensuring your account information remains accurate and
                    up-to-date
                  </li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that
                  provide false information or violate these Terms.
                </p>
              </Section>

              <Section title="4. Subscription and Billing">
                <p>
                  Overton CRM operates on a subscription basis. By subscribing
                  to a paid plan, you agree to the following:
                </p>
                <ul>
                  <li>
                    <strong>Free Trial:</strong> New accounts receive a 30-day
                    free trial. No credit card is required to start the trial.
                  </li>
                  <li>
                    <strong>Billing Cycle:</strong> Subscriptions are billed
                    monthly or annually in advance, based on the plan selected.
                  </li>
                  <li>
                    <strong>Price Changes:</strong> We will notify you at least
                    30 days in advance of any price changes.
                  </li>
                  <li>
                    <strong>Taxes:</strong> All prices are exclusive of GST.
                    Applicable GST will be added at checkout.
                  </li>
                  <li>
                    <strong>Auto-renewal:</strong> Subscriptions automatically
                    renew unless cancelled before the renewal date.
                  </li>
                </ul>
              </Section>

              <Section title="5. Acceptable Use">
                <p>You agree not to use Overton CRM to:</p>
                <ul>
                  <li>
                    Violate any applicable Indian or international laws or
                    regulations
                  </li>
                  <li>
                    Transmit spam, unsolicited messages, or bulk communications
                  </li>
                  <li>Upload malicious code, viruses, or harmful software</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>
                    Collect or harvest personal data of others without consent
                  </li>
                  <li>
                    Resell, sublicense, or redistribute the Service without
                    permission
                  </li>
                  <li>
                    Use the platform for any fraudulent or deceptive activities
                  </li>
                </ul>
              </Section>

              <Section title="6. Data Ownership">
                <p>
                  <strong>Your Data:</strong> All CRM data you enter into
                  Overton CRM — including leads, contacts, documents, and
                  project information — remains your property. We do not claim
                  ownership of your data.
                </p>
                <p>
                  <strong>Our Platform:</strong> The Overton CRM software,
                  design, code, AI models, and all platform components are our
                  intellectual property and are protected by applicable laws.
                </p>
                <p>
                  <strong>Data Export:</strong> You may export your data at any
                  time in standard formats. Upon account termination, you have
                  30 days to export your data before it is permanently deleted.
                </p>
              </Section>

              <Section title="7. Service Availability">
                <p>
                  We strive to maintain 99.9% uptime for Overton CRM. However,
                  we do not guarantee uninterrupted access to the Service. We
                  may temporarily suspend the Service for:
                </p>
                <ul>
                  <li>
                    Scheduled maintenance (with advance notice when possible)
                  </li>
                  <li>Emergency security patches or updates</li>
                  <li>Events beyond our reasonable control (force majeure)</li>
                </ul>
              </Section>

              <Section title="8. Limitation of Liability">
                <p>
                  To the maximum extent permitted by Indian law, Overton CRM and
                  its directors, employees, and partners shall not be liable
                  for:
                </p>
                <ul>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>
                    Damages arising from unauthorized access to your account
                  </li>
                  <li>
                    Any damages exceeding the amount paid by you for the Service
                    in the 3 months preceding the claim
                  </li>
                </ul>
              </Section>

              <Section title="9. Termination">
                <p>
                  <strong>By You:</strong> You may cancel your subscription at
                  any time from your account settings. Cancellation takes effect
                  at the end of the current billing period.
                </p>
                <p>
                  <strong>By Us:</strong> We reserve the right to suspend or
                  terminate your account if you:
                </p>
                <ul>
                  <li>Violate these Terms of Service</li>
                  <li>Fail to pay subscription fees after a grace period</li>
                  <li>Engage in fraudulent or illegal activities</li>
                </ul>
              </Section>

              <Section title="10. Governing Law">
                <p>
                  These Terms are governed by the laws of India. Any disputes
                  arising from these Terms or your use of Overton CRM shall be
                  subject to the exclusive jurisdiction of the courts in
                  Ahmedabad, Gujarat, India.
                </p>
              </Section>

              <Section title="11. Changes to Terms">
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will notify you of significant changes via email or platform
                  notification at least 14 days before they take effect. Your
                  continued use of the Service after changes are posted
                  constitutes acceptance of the updated Terms.
                </p>
              </Section>

              <Section title="12. Contact Us">
                <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6 mt-4">
                  <p className="font-bold text-[#0F1629] mb-1">Overton CRM</p>
                  <p className="text-[#4A5578] text-sm">
                    Ahmedabad, Gujarat, India
                  </p>
                  <p className="text-[#4A5578] text-sm">
                    Email:{" "}
                    <a href="mailto:info@overton.in" className="text-[#3D5AF1]">
                      info@overton.in
                    </a>
                  </p>
                  <p className="text-[#4A5578] text-sm">
                    Phone: +91 90230 16487
                  </p>
                </div>
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
