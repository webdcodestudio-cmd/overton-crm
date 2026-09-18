import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Footer from "@/components/layout/Footer";
import TrialCallout from "@/components/sections/TrialCallout";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description:
    "Data Deletion Instructions for OVERTON CRM SOLUTIONS LLP - Learn how to request deletion of your account, workspace, and Facebook (Meta) integration data.",
  alternates: {
    canonical: "https://overton.in/data-deletion",
  },
};

export default function DataDeletion() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFBFF] min-h-screen">
        {/* HEADER */}
        <div className="bg-[#0F1629] pb-15 pt-25">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#93a8f4] text-sm font-bold uppercase tracking-widest mb-3">
                Legal Documentation
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Data Deletion Instructions for OVERTON CRM SOLUTIONS LLP
              </h1>
              <p className="text-white/50 text-sm">
                Last Updated: August 5, 2026
              </p>
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
              <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6 text-[#4A5578] text-sm leading-relaxed">
                This page explains how to request deletion of data held by{" "}
                <strong>OVERTON CRM SOLUTIONS LLP</strong>, including data
                retrieved from Facebook (Meta). It is the designated Data
                Deletion Instructions URL for the OVERTON CRM SOLUTIONS LLP
                Meta App.
                <br />
                <br />
                For full details on what we collect and why, see our{" "}
                <Link href="/privacy-policy" className="text-[#3D5AF1]">
                  Privacy Policy
                </Link>
                .
              </div>

              {/* SECTION 1 */}
              <Section
                id="section-1"
                title="Delete your OVERTON CRM SOLUTIONS LLP user account"
              >
                <p>
                  <strong>Employees / Members</strong> — open the OVERTON CRM
                  SOLUTIONS LLP mobile app, go to{" "}
                  <strong>Profile</strong> → <strong>Delete Account</strong>,
                  select a reason and submit. Your Organization&apos;s Admin
                  actions the request from the web portal. On approval, your
                  sessions are revoked and your name, email, phone, and
                  profile image are permanently anonymized.
                </p>
                <p>
                  <strong>Admins / Directors</strong> — sign in to the OVERTON
                  CRM SOLUTIONS LLP web portal, open the profile menu at the
                  top right, select <strong>Delete Account</strong>, choose a
                  reason and submit.
                </p>
              </Section>

              {/* SECTION 2 */}
              <Section
                id="section-2"
                title="Delete an entire Organization workspace"
              >
                <p>
                  This cannot be self-served. The Organization&apos;s
                  authorized representative must email{" "}
                  <a
                    href="mailto:support@overton.in"
                    className="text-[#3D5AF1]"
                  >
                    support@overton.in
                  </a>
                  . After identity verification, we erase all Organization
                  records and associated databases within{" "}
                  <strong>90 days</strong>.
                </p>
              </Section>

              {/* SECTION 3 */}
              <Section
                id="section-3"
                title="Remove the Facebook (Meta) integration"
              >
                <p>
                  <strong>From OVERTON CRM SOLUTIONS LLP</strong> — disconnect
                  the linked Page in the web portal&apos;s CRM settings panel.
                  This unsubscribes our webhook via the Meta API and
                  permanently erases the stored Page ID and Page Access Token
                  from our databases.
                </p>
                <p>
                  <strong>From Facebook (Meta):</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Go to <strong>Settings &amp; Privacy</strong> →{" "}
                    <strong>Settings</strong>.
                  </li>
                  <li>
                    Click <strong>Apps and Websites</strong> in the left menu.
                  </li>
                  <li>
                    Find <strong>OVERTON CRM SOLUTIONS LLP</strong> and click{" "}
                    <strong>Remove</strong>.
                  </li>
                  <li>
                    Confirm, then click <strong>Remove</strong> again.
                  </li>
                </ol>
              </Section>

              {/* SECTION 4 */}
              <Section id="section-4" title="Delete specific synced leads">
                <p>
                  Email{" "}
                  <a
                    href="mailto:support@overton.in"
                    className="text-[#3D5AF1]"
                  >
                    support@overton.in
                  </a>{" "}
                  with your company name, the connected Page, and the leads or
                  date range you want erased. We process and confirm within{" "}
                  <strong>3 business days</strong>.
                </p>
              </Section>

              {/* SECTION 5 */}
              <Section id="section-5" title="Contact">
                <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://overton.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D5AF1]"
                    >
                      https://overton.in
                    </a>
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

// ── HELPER COMPONENTS ──
function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id}>
      <h2 className="text-xl font-extrabold text-[#0F1629] mb-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[#4A5578] leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}
