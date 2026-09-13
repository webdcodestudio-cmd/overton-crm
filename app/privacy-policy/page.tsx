import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Footer from "@/components/layout/Footer";
import TrialCallout from "@/components/sections/TrialCallout";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for OVERTON CRM SOLUTIONS LLP - Learn how we collect, use, store, process, and protect your personal information.",
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
                Legal Documentation
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Privacy Policy for OVERTON CRM SOLUTIONS LLP
              </h1>
              <p className="text-white/50 text-sm">
                Effective Date: August 5, 2026 &bull; Last Updated: August 5,
                2026
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
                At <strong>OVERTON CRM SOLUTIONS LLP</strong> (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to
                protecting your privacy. This Privacy Policy describes how we
                collect, use, store, process, and protect personal information
                when you use our web platform, mobile applications, and
                integration services (collectively, the &ldquo;Services&rdquo;).
              </div>

              {/* SECTION 1 */}
              <Section id="section-1" title="1. How Accounts Work">
                <p>
                  Understanding our account model is important to understanding
                  this policy.
                </p>
                <ul>
                  <li>
                    <strong>Organization registration is web-only.</strong> A
                    builder or business (&ldquo;Organization&rdquo;) registers
                    for OVERTON CRM SOLUTIONS LLP through our web portal.
                    Registration is not offered in the mobile application.
                  </li>
                  <li>
                    <strong>
                      Employee accounts are provisioned, not self-created.
                    </strong>{" "}
                    Accounts for employees are created and assigned roles
                    exclusively by the Organization&apos;s Admin or Director
                    through the web portal.
                  </li>
                  <li>
                    <strong>The mobile application is login-only.</strong> It
                    does not offer account registration by any method, including
                    Google Sign-In or Apple Sign-In. Signing in with Google or
                    Apple using an email address that has not been provisioned
                    by an Organization will return an error and will not create
                    an account.
                  </li>
                </ul>
              </Section>

              {/* SECTION 2 */}
              <Section id="section-2" title="2. Controller and Processor Roles">
                <ul>
                  <li>
                    <strong>Your Organization is the data controller</strong>{" "}
                    for its workspace. This includes all employee account
                    records and all lead, customer, and prospect records stored
                    in that workspace.
                  </li>
                  <li>
                    <strong>
                      OVERTON CRM SOLUTIONS LLP is the data processor.
                    </strong>{" "}
                    We process that data on the Organization&apos;s instructions
                    in order to provide the Services.
                  </li>
                  <li>
                    <strong>Lead and customer records</strong> (names, email
                    addresses, phone numbers, form responses and related notes)
                    are supplied to us by the Organization or its integrations.
                    We do not independently collect this data, and we do not use
                    it for any purpose other than delivering the Services to
                    that Organization.
                  </li>
                  <li>
                    If you are a lead or customer whose details appear in an
                    OVERTON CRM SOLUTIONS LLP workspace and you wish to exercise
                    your rights over that data, please contact the Organization
                    that holds the record. If you do not know which Organization
                    that is, contact us at{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>{" "}
                    and we will assist in routing your request.
                  </li>
                </ul>
              </Section>

              {/* SECTION 3 */}
              <Section id="section-3" title="3. Information We Collect">
                <p>We collect the following types of information:</p>
                <SubSection title="A. Information You or Your Organization Provide">
                  <ul>
                    <li>
                      <strong>Profile Information</strong>: Name, email address,
                      phone number, and profile image.
                    </li>
                    <li>
                      <strong>Organization &amp; Role Info</strong>: Your
                      association with a company (<code>company_id</code>), your
                      assigned role (Director, Admin, Member), and your
                      reporting relationships.
                    </li>
                    <li>
                      <strong>Business Registration Details</strong> (web portal
                      only, at Organization sign-up): business name, business
                      type, state, and city.
                    </li>
                    <li>
                      <strong>User-Uploaded Content</strong>: Documents and
                      images you attach to leads, projects, builders, and other
                      CRM records through the app or web portal. You are
                      responsible for ensuring you have the right to upload any
                      content containing another person&apos;s information.
                    </li>
                    <li>
                      <strong>Billing &amp; Subscription Information</strong>{" "}
                      (web portal only, Admin/Director only): billing contact
                      name, billing email, billing address, GSTIN where
                      provided, and a record of your Organization&apos;s plan,
                      trial status, and invoices. Card and bank details are
                      entered directly into our payment processor&apos;s
                      interface &mdash;{" "}
                      <strong>
                        we never receive or store full card numbers
                      </strong>
                      . The mobile application collects no billing information
                      and contains no purchase functionality.
                    </li>
                  </ul>
                </SubSection>
                <SubSection title="B. Information Collected Automatically">
                  <ul>
                    <li>
                      <strong>Device &amp; Auth Session Data</strong>: When you
                      log in, we collect details about the device you are using,
                      including:
                      <ul className="ml-4 mt-2">
                        <li>
                          Unique Device ID (UUID-v4, generated once per install,
                          or the platform vendor identifier on iOS)
                        </li>
                        <li>
                          Device Name (for example, &ldquo;iPhone 15 Pro&rdquo;)
                        </li>
                        <li>
                          Device Type (for example, &ldquo;mobile&rdquo;,
                          &ldquo;desktop&rdquo;)
                        </li>
                        <li>
                          Operating System and OS Version (for example,
                          &ldquo;iOS 17.4.1&rdquo;)
                        </li>
                        <li>App Version and client metadata</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Notification Tokens</strong>: Firebase Cloud
                      Messaging (FCM) tokens, used to deliver push notifications
                      and alerts according to your notification preferences.
                    </li>
                    <li>
                      <strong>Crash and Diagnostic Data</strong>: We use
                      Firebase Crashlytics to collect crash reports, stack
                      traces, exception messages, device model, operating system
                      version, and app version when the application encounters
                      an error. This data is used solely to diagnose and fix
                      stability problems. It is not used for advertising or
                      profiling.
                    </li>
                  </ul>
                </SubSection>
                <SubSection title="C. Information We Do Not Collect">
                  <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6">
                    <ul>
                      <li>
                        <strong>We do not collect biometric data.</strong> The
                        mobile application can use your device&apos;s Face ID,
                        Touch ID, or fingerprint unlock as a convenience for
                        unlocking the app. This check is performed entirely by
                        your device&apos;s operating system. Your biometric data
                        never leaves your device, is never transmitted to us,
                        and is never stored on our servers.
                      </li>
                      <li>
                        <strong>
                          We do not collect precise or background location data.
                        </strong>
                      </li>
                      <li>
                        <strong>
                          We do not use advertising identifiers, advertising
                          SDKs, or cross-app tracking.
                        </strong>{" "}
                        The mobile application contains no analytics or
                        advertising SDKs other than the crash reporting
                        described above.
                      </li>
                      <li>
                        <strong>
                          We do not sell your personal data, and we do not share
                          it for cross-context behavioural advertising.
                        </strong>
                      </li>
                    </ul>
                  </div>
                </SubSection>
              </Section>

              {/* SECTION 4 */}
              <Section id="section-4" title="4. Third-Party Integrations">
                <SubSection title="A. Google Sign-In">
                  <ul>
                    <li>
                      <strong>Scopes requested</strong>: <code>profile</code>{" "}
                      (name, picture, identity metadata) and <code>email</code>{" "}
                      (primary account email).
                    </li>
                    <li>
                      <strong>Purpose</strong>: To verify your identity and
                      enable secure sign-in to an existing OVERTON CRM SOLUTIONS
                      LLP account, and to display your name and avatar in the
                      CRM interface.
                    </li>
                    <li>
                      Our use of information received from Google APIs adheres
                      to the{" "}
                      <a
                        href="https://developers.google.com/terms/api-services-user-data-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3D5AF1]"
                      >
                        Google API Services User Data Policy
                      </a>
                      , including the Limited Use requirements.
                    </li>
                  </ul>
                </SubSection>
                <SubSection title="B. Apple Sign-In">
                  <ul>
                    <li>
                      <strong>Scopes requested</strong>: <code>name</code>{" "}
                      (first and last name) and <code>email</code> (primary
                      Apple account email).
                    </li>
                    <li>
                      <strong>Purpose</strong>: To verify your identity and
                      enable secure sign-in to an existing OVERTON CRM SOLUTIONS
                      LLP account.
                    </li>
                    <li>
                      If you choose Apple&apos;s <strong>Hide My Email</strong>{" "}
                      option, we receive and store only the private relay
                      address Apple generates. We accept relay addresses, we do
                      not attempt to resolve them to your real address, and we
                      do not require you to disclose it.
                    </li>
                  </ul>
                </SubSection>
                <SubSection title="C. Facebook (Meta) Lead Ads Integration — Web Portal Only">
                  <p>
                    This integration is configured and used through the OVERTON
                    CRM SOLUTIONS LLP web portal. It is not available in the
                    mobile application.
                  </p>
                  <ul>
                    <li>
                      <strong>Permissions requested</strong>:{" "}
                      <code>pages_show_list</code>,{" "}
                      <code>pages_manage_metadata</code>,{" "}
                      <code>pages_read_engagement</code>,{" "}
                      <code>leads_retrieval</code>, <code>ads_read</code>.
                    </li>
                    <li>
                      <strong>What we store</strong>: The Facebook (Meta) Page
                      ID and the Page Access Token, held encrypted at rest in
                      our database. These credentials are required to maintain a
                      subscription to Meta lead generation webhooks.
                    </li>
                    <li>
                      <strong>Purpose</strong>: To receive webhook notifications
                      when a customer submits a lead form on Facebook (Meta),
                      parse the submitted lead data (name, email, phone, form
                      answers) and save it into your Organization&apos;s lead
                      list.
                    </li>
                    <li>
                      <strong>Disconnection</strong>: An Organization can
                      disconnect any linked Page at any time from the CRM
                      settings panel. Disconnecting sends an API request to Meta
                      unsubscribing our servers from that Page&apos;s webhooks
                      and permanently erases the Page ID and Page Access Token
                      from our databases.
                    </li>
                  </ul>
                </SubSection>
              </Section>

              {/* SECTION 5 */}
              <Section id="section-5" title="5. How We Use Your Information">
                <ul>
                  <li>
                    <strong>Service Delivery</strong>: To manage lead workflows,
                    inventories, follow-ups, site visits, and calendar
                    schedules.
                  </li>
                  <li>
                    <strong>Authentication and Session Security</strong>: To
                    sign you in, and to use device UUIDs and OS/app versions to
                    monitor active sessions and detect unauthorized access.
                  </li>
                  <li>
                    <strong>System Communication</strong>: To send push
                    notifications such as site visit reminders and follow-up
                    reminders, in accordance with the Notification Preferences
                    you configure in the app.
                  </li>
                  <li>
                    <strong>Stability and Support</strong>: To diagnose crashes
                    and respond to support requests.
                  </li>
                  <li>
                    <strong>Lead Synchronization</strong>: To parse and import
                    leads submitted through an Organization&apos;s connected
                    Facebook (Meta) forms into its CRM.
                  </li>
                </ul>
                <p>
                  We do not use your personal information for automated
                  decision-making that produces legal or similarly significant
                  effects.
                </p>
              </Section>

              {/* SECTION 6 */}
              <Section id="section-6" title="6. How We Share Your Information">
                <p>
                  We do not sell personal data. We share it only with the
                  following categories of recipient, and only to the extent
                  needed to run the Services.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-[#E3E7F4]">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0F1629] text-white">
                        <th className="p-3 font-bold w-[30%]">Recipient</th>
                        <th className="p-3 font-bold w-[35%]">Data Shared</th>
                        <th className="p-3 font-bold w-[35%]">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Google LLC — Firebase Cloud Messaging",
                          "Device push token, device metadata",
                          "Delivering push notifications",
                        ],
                        [
                          "Google LLC — Firebase Crashlytics",
                          "Crash reports, device model, OS and app version",
                          "Diagnosing application crashes",
                        ],
                        [
                          "Google LLC — Google Sign-In",
                          "Authentication request, email",
                          "Verifying identity at sign-in",
                        ],
                        [
                          "Apple Inc. — Sign in with Apple",
                          "Authentication request, email",
                          "Verifying identity at sign-in",
                        ],
                        [
                          "Meta Platforms, Inc.",
                          "Page ID, Page Access Token, webhook subscription",
                          "Retrieving Lead Ads submissions (web portal only)",
                        ],
                        [
                          "Your Organization",
                          "Your profile, activity, and assigned records",
                          "Workspace administration by your Admin or Director",
                        ],
                        [
                          "Payment processor",
                          "Billing contact details, transaction amount, card data entered directly by you",
                          "Processing subscription payments (web portal only)",
                        ],
                        [
                          "Hostinger (Hosting and infrastructure provider)",
                          "Data at rest and in transit",
                          "Operating the Services",
                        ],
                      ].map((row, i) => (
                        <tr
                          key={row[0]}
                          className={i % 2 === 0 ? "bg-white" : "bg-[#F8F9FE]"}
                        >
                          <td className="p-3 border-t border-[#E3E7F4] font-semibold text-[#0F1629] align-top">
                            {row[0]}
                          </td>
                          <td className="p-3 border-t border-[#E3E7F4] align-top">
                            {row[1]}
                          </td>
                          <td className="p-3 border-t border-[#E3E7F4] align-top">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  We may also disclose information where required by law, court
                  order, or a valid request from a public authority, or where
                  necessary to establish, exercise, or defend legal claims.
                </p>
              </Section>

              {/* SECTION 7 */}
              <Section
                id="section-7"
                title="7. Data Storage, Security & Location"
              >
                <ul>
                  <li>
                    <strong>Company Partitioning</strong>: All records (leads,
                    settings, custom options) are isolated at the Organization
                    level. Your data is not visible or accessible to users of
                    another Organization.
                  </li>
                  <li>
                    <strong>Encryption in transit</strong>: All communication
                    between the applications and our servers uses TLS/HTTPS.
                  </li>
                  <li>
                    <strong>Encryption at rest</strong>: OAuth tokens and
                    integration credentials (Meta Page Access Tokens, SMTP
                    credentials, SMS configuration) are encrypted at rest.
                    Passwords are stored as salted hashes and are never
                    recoverable in plain text.
                  </li>
                  <li>
                    <strong>On-device storage</strong>: On mobile,
                    authentication tokens are stored in the platform secure
                    store &mdash; the iOS Keychain or the Android Keystore
                    &mdash; and not in plain application storage.
                  </li>
                  <li>
                    <strong>Data location</strong>: Our servers and databases
                    are hosted in India.
                  </li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm">
                  <strong>Security Notice:</strong> No system is perfectly
                  secure. In the event of a personal data breach affecting your
                  information, we will notify the affected Organization and,
                  where required, the competent supervisory authority, without
                  undue delay.
                </div>
              </Section>

              {/* SECTION 8 */}
              <Section id="section-8" title="8. Data Retention">
                <ul>
                  <li>
                    <strong>Active accounts</strong>: We retain your profile and
                    activity data for as long as your account remains active
                    within an Organization&apos;s workspace.
                  </li>
                  <li>
                    <strong>After account anonymization</strong>: Personal
                    identifiers (name, email, phone, profile image) are
                    permanently anonymized. Business records that must remain
                    with the Organization &mdash; such as leads, follow-ups, and
                    site visits reassigned to other team members &mdash; are
                    retained by the Organization as its own records.
                  </li>
                  <li>
                    <strong>Crash and diagnostic data</strong>: Retained by
                    Firebase Crashlytics for up to 90 days.
                  </li>
                  <li>
                    <strong>Session and device records</strong>: Retained for up
                    to 12 months from last activity, for security auditing.
                  </li>
                  <li>
                    <strong>Billing records</strong>: Invoices and transaction
                    records are retained for 8 years as required by Indian tax
                    and companies law, and are not deleted on account or
                    workspace deletion.
                  </li>
                  <li>
                    <strong>Backups</strong>: Deleted data may persist in
                    encrypted backups for up to 30 days after deletion, after
                    which it is overwritten.
                  </li>
                  <li>
                    <strong>After Organization deletion</strong>: All
                    Organization records and associated databases are erased
                    within 90 days of a verified request.
                  </li>
                </ul>
              </Section>

              {/* SECTION 9 */}
              <Section id="section-9" title="9. Your Rights">
                <p>
                  Subject to applicable law, including the Digital Personal Data
                  Protection Act, 2023 (India) and, where applicable, the GDPR,
                  you have the right to:
                </p>
                <ul>
                  <li>
                    <strong>Access</strong> the personal data we hold about you.
                  </li>
                  <li>
                    <strong>Correct</strong> inaccurate or incomplete data. You
                    can edit your profile name and image directly in the app at
                    any time.
                  </li>
                  <li>
                    <strong>Erasure</strong> of your personal data, as described
                    in Section 10.
                  </li>
                  <li>
                    <strong>Withdraw consent</strong>, including disabling
                    specific alerts from the Notification Preferences panel, or
                    revoking notification permission in your device settings.
                  </li>
                  <li>
                    <strong>Portability</strong> &mdash; request a
                    machine-readable copy of your personal data.
                  </li>
                  <li>
                    <strong>Grievance redressal</strong> &mdash; raise a
                    complaint with our Grievance Officer (Section 12).
                  </li>
                </ul>
                <p>
                  Because your Organization is the controller of its workspace,
                  requests concerning workspace or lead data are routed to that
                  Organization. Requests concerning your own personal
                  identifiers are honoured as set out below.
                </p>
              </Section>

              {/* SECTION 10 */}
              <Section id="section-10" title="10. Data Deletion">
                <SubSection title="A. Employee / Member Accounts (mobile and web)">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      Open the OVERTON CRM SOLUTIONS LLP app and go to{" "}
                      <strong>Profile</strong>.
                    </li>
                    <li>
                      Tap <strong>Delete Account</strong>.
                    </li>
                    <li>
                      Select a reason for deletion and tap{" "}
                      <strong>Submit</strong>.
                    </li>
                    <li>
                      Your request is sent to your Organization&apos;s Admin or
                      Director, who actions it from the web portal.
                    </li>
                    <li>
                      On approval, all active login sessions and authentication
                      tokens are immediately revoked, your account is
                      deactivated and flagged as deleted, and your personal
                      identifiers (name, email, phone, profile image) are
                      permanently anonymized.
                    </li>
                  </ol>
                  <p>
                    <strong>Reassignment.</strong> If you currently own active
                    leads or have employees reporting to you, those records and
                    reporting relationships are reassigned to your
                    Organization&apos;s Admin before anonymization completes.
                    This reassignment does not prevent the deletion of your
                    personal data.
                  </p>
                  <div className="bg-[#EEF1FE] border border-[#D6DEFC] rounded-2xl p-4 text-sm">
                    <strong>
                      Fallback &mdash; your right does not depend on your
                      employer:
                    </strong>{" "}
                    If your Organization has not actioned your request within{" "}
                    <strong>30 days</strong>, email{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>{" "}
                    from your registered address. Following identity
                    verification, we will anonymize your personal identifiers
                    directly, regardless of your Organization&apos;s action.
                  </div>
                </SubSection>

                <SubSection title="B. Organization Owner / Admin Accounts (web portal)">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      Sign in to the OVERTON CRM SOLUTIONS LLP web portal.
                    </li>
                    <li>Open the profile menu at the top right.</li>
                    <li>
                      Select <strong>Delete Account</strong>, choose a reason,
                      and submit.
                    </li>
                  </ol>
                  <p>
                    Before an Admin account is deleted, the system verifies that
                    at least one other active Admin remains in the Organization,
                    so the workspace does not become unadministrable.
                  </p>
                </SubSection>

                <SubSection title="C. Full Organization / Workspace Deletion">
                  <p>
                    Deletion of an entire Organization workspace, including all
                    corporate records, settings, and databases, cannot be
                    self-served. The Organization&apos;s authorized
                    representative must email{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>
                    . Following identity verification, we will erase all
                    Organization account records and associated databases within{" "}
                    <strong>90 days</strong>.
                  </p>
                </SubSection>

                <SubSection title="D. Facebook (Meta) Data — Removal and Deletion">
                  <p>
                    <strong>
                      Self-service, from OVERTON CRM SOLUTIONS LLP:
                    </strong>{" "}
                    disconnect the linked Page from the CRM settings panel in
                    the web portal. This unsubscribes our webhook via the Meta
                    API and permanently erases the stored Page ID and Page
                    Access Token.
                  </p>
                  <p>
                    <strong>Self-service, from Facebook (Meta):</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      Go to <strong>Settings &amp; Privacy</strong> →{" "}
                      <strong>Settings</strong> in your Facebook (Meta) account.
                    </li>
                    <li>
                      Select <strong>Apps and Websites</strong> in the left
                      menu.
                    </li>
                    <li>
                      Locate <strong>OVERTON CRM SOLUTIONS LLP</strong> and
                      click <strong>Remove</strong>.
                    </li>
                    <li>
                      Confirm removal, then click <strong>Remove</strong> again.
                    </li>
                  </ol>
                  <p>
                    <strong>Deleting specific synced leads:</strong> email{" "}
                    <a
                      href="mailto:support@overton.in"
                      className="text-[#3D5AF1]"
                    >
                      support@overton.in
                    </a>{" "}
                    with your company name, the connected Page, and the leads or
                    date range to erase. We will process and confirm within{" "}
                    <strong>3 business days</strong>.
                  </p>
                  <p>
                    The dedicated data deletion instructions page for the Meta
                    App Dashboard is available at{" "}
                    <a
                      href="https://overton.in/data-deletion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D5AF1]"
                    >
                      https://overton.in/data-deletion
                    </a>
                    .
                  </p>
                </SubSection>
              </Section>

              {/* SECTION 11 */}
              <Section id="section-11" title="11. Children's Privacy">
                <p>
                  OVERTON CRM SOLUTIONS LLP is a business-to-business product
                  intended solely for use by employees and representatives of
                  registered organizations. It is not directed to, and we do not
                  knowingly collect personal data from, anyone under the age of
                  18. If you believe a minor has provided us with personal data,
                  contact us and we will delete it.
                </p>
              </Section>

              {/* SECTION 12 */}
              <Section id="section-12" title="12. Contact & Grievance Officer">
                <p>
                  For any question about this Privacy Policy, or to exercise any
                  right described above:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6">
                    <p className="font-bold text-[#0F1629] mb-2">
                      General Support &amp; Privacy Inquiries
                    </p>
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
                  <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-6">
                    <p className="font-bold text-[#0F1629] mb-2">
                      Statutory Grievance Officer
                    </p>
                    <p className="text-xs text-[#4A5578] mb-2">
                      In accordance with the Digital Personal Data Protection
                      Act, 2023 and the Information Technology (Intermediary
                      Guidelines) Rules:
                    </p>
                    <p>
                      <strong>Name:</strong> Bhargav K
                    </p>
                    <p>
                      <strong>Designation:</strong> Grievance Officer
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:info@overton.in"
                        className="text-[#3D5AF1]"
                      >
                        info@overton.in
                      </a>
                    </p>
                    <p>
                      <strong>Address:</strong> BLOCK NO F-25/FLAT NO 346, UTSAV
                      APPTS., B/H VYASWADI, Vadaj, vadaj, Ahmadabad City,
                      Ahmedabad- 380013, Gujarat, India
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#4A5578] italic">
                  We acknowledge grievances within 24 hours and aim to resolve
                  them within 15 days of receipt.
                </p>
              </Section>

              {/* SECTION 13 */}
              <Section id="section-13" title="13. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. When we
                  do, we will revise the &ldquo;Last Updated&rdquo; date at the
                  top of this page. If the changes are material &mdash; for
                  example, a new category of data collected or a new third party
                  receiving your data &mdash; we will notify you in the app, by
                  email, or both, before the change takes effect. Continued use
                  of the Services after the effective date constitutes
                  acceptance of the revised policy.
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
