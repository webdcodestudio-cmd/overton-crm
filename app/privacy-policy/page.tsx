import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Footer from "@/components/layout/Footer";
import TrialCallout from "@/components/sections/TrialCallout";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Overton CRM Privacy Policy — how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://overton.in/privacy-policy",
  },
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">Last updated: June 1, 2025</p>
          </div>
        </Container>
      </div>

      {/* CONTENT */}
      <Container>
        <div className="max-w-3xl mx-auto py-16">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#3D5AF1] font-semibold mb-10 hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="prose prose-slate max-w-none space-y-10">
            {/* INTRO */}
            <Section title="1. Introduction">
              <p>
                Overton CRM ("we", "our", or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                website at{" "}
                <a href="https://overton.in" className="text-[#3D5AF1]">
                  overton.in
                </a>{" "}
                and our CRM software platform.
              </p>
              <p>
                By using Overton CRM, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                platform.
              </p>
            </Section>

            {/* INFO WE COLLECT */}
            <Section title="2. Information We Collect">
              <p>We collect the following types of information:</p>
              <SubSection title="2.1 Personal Information">
                <ul>
                  <li>Name, email address, phone number</li>
                  <li>Company name, job title, and business address</li>
                  <li>
                    Billing information (processed securely via payment gateway)
                  </li>
                  <li>Login credentials (passwords are encrypted)</li>
                </ul>
              </SubSection>
              <SubSection title="2.2 Usage Data">
                <ul>
                  <li>Pages visited, features used, time spent on platform</li>
                  <li>Browser type, device type, operating system</li>
                  <li>IP address and approximate location</li>
                  <li>Referral source and search terms used to find us</li>
                </ul>
              </SubSection>
              <SubSection title="2.3 CRM Data">
                <ul>
                  <li>Lead and contact information you enter into the CRM</li>
                  <li>Communication logs, call recordings, notes</li>
                  <li>Documents generated via the platform</li>
                  <li>Project and inventory data</li>
                </ul>
              </SubSection>
            </Section>

            {/* HOW WE USE */}
            <Section title="3. How We Use Your Information">
              <ul>
                <li>
                  To provide, operate, and maintain the Overton CRM platform
                </li>
                <li>
                  To process transactions and send billing-related
                  communications
                </li>
                <li>
                  To send product updates, new feature announcements, and
                  support messages
                </li>
                <li>To improve our product based on usage patterns</li>
                <li>To respond to customer support queries</li>
                <li>To comply with legal obligations under Indian law</li>
                <li>To prevent fraud and ensure platform security</li>
              </ul>
            </Section>

            {/* DATA SHARING */}
            <Section title="4. Data Sharing and Disclosure">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share data only in the following
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  assist in operating our platform (e.g., cloud hosting, payment
                  processing, email delivery) — bound by confidentiality
                  agreements.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by Indian
                  law, court order, or government authority.
                </li>
                <li>
                  <strong>Business Transfer:</strong> In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred
                  to the new entity.
                </li>
              </ul>
            </Section>

            {/* DATA STORAGE */}
            <Section title="5. Data Storage and Security">
              <p>
                Your data is stored on secure servers located in India. We
                implement industry-standard security measures including:
              </p>
              <ul>
                <li>SSL/TLS encryption for all data in transit</li>
                <li>Encrypted storage for sensitive data at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Role-based access controls within our team</li>
                <li>Two-factor authentication options for your account</li>
              </ul>
              <p>
                While we take every precaution, no method of transmission over
                the internet is 100% secure. We cannot guarantee absolute
                security.
              </p>
            </Section>

            {/* DATA RETENTION */}
            <Section title="6. Data Retention">
              <p>
                We retain your personal data for as long as your account is
                active or as needed to provide services. If you cancel your
                subscription:
              </p>
              <ul>
                <li>Your data is retained for 30 days for recovery purposes</li>
                <li>
                  After 30 days, data is permanently deleted from our servers
                </li>
                <li>You may request immediate deletion by contacting us</li>
                <li>
                  Billing records may be retained for 7 years as required by
                  Indian tax law
                </li>
              </ul>
            </Section>

            {/* YOUR RIGHTS */}
            <Section title="7. Your Rights">
              <p>
                Under the Information Technology Act, 2000 and applicable Indian
                data protection laws, you have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing at any time</li>
                <li>Export your CRM data in standard formats</li>
              </ul>
              <p>
                To exercise these rights, email us at{" "}
                <a href="mailto:info@overton.in" className="text-[#3D5AF1]">
                  info@overton.in
                </a>
                .
              </p>
            </Section>

            {/* COOKIES */}
            <Section title="8. Cookies">
              <p>
                We use cookies and similar tracking technologies to improve your
                experience on our platform. These include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Required for platform
                  functionality (login sessions, security)
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  users interact with our platform
                </li>
                <li>
                  <strong>Preference cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling
                essential cookies may affect platform functionality.
              </p>
            </Section>

            {/* THIRD PARTY */}
            <Section title="9. Third-Party Integrations">
              <p>
                Overton CRM integrates with third-party services including
                99acres, MagicBricks, Housing.com, Meta Ads, Google Ads, and
                WhatsApp Business API. When you connect these services, their
                respective privacy policies also apply. We encourage you to
                review those policies.
              </p>
            </Section>

            {/* CHILDREN */}
            <Section title="10. Children's Privacy">
              <p>
                Overton CRM is not intended for use by individuals under the age
                of 18. We do not knowingly collect personal information from
                minors. If you believe a minor has provided us with personal
                information, please contact us immediately.
              </p>
            </Section>

            {/* CHANGES */}
            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by email or via a
                prominent notice on our platform. Your continued use of Overton
                CRM after changes are posted constitutes your acceptance of the
                updated policy.
              </p>
            </Section>

            {/* CONTACT */}
            <Section title="12. Contact Us">
              <p>
                For any questions about this Privacy Policy or our data
                practices, please contact:
              </p>
              <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6 mt-4">
                <p className="font-bold text-[#0F1629] mb-1">Overton CRM</p>
                <p>Ahmedabad, Gujarat, India</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@overton.in" className="text-[#3D5AF1]">
                    info@overton.in
                  </a>
                </p>
                <p>
                  Support:{" "}
                  <a
                    href="mailto:support@overton.in"
                    className="text-[#3D5AF1]"
                  >
                    support@overton.in
                  </a>
                </p>
                <p>Phone: +91 90230 16487</p>
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

// ── HELPER COMPONENTS ──
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
      <div className="text-[#4A5578] text-sm space-y-1">{children}</div>
    </div>
  );
}
