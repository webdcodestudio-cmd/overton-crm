import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import Container from "@/components/ui/Container";

// Proof bar ka data — component se bahar
const proofItems = [
  { text: <>✓ <strong>India's only</strong> AI-powered real estate CRM</> },
  { text: <>✓ <strong>30-day free trial</strong> — no credit card</> },
  { text: <>✓ <strong>500+</strong> developers & brokers trust Overton</> },
  { text: <>✓ <strong>99acres, MagicBricks,</strong> Meta Ads — all connected</> },
  { text: <>✓ Setup in <strong>30 minutes</strong></> },
];

// Trust avatars data
const avatars = [
  { initials: "RP", bg: "#3e68ff" },
  { initials: "SM", bg: "#7c3aed" },
  { initials: "AJ", bg: "#0ea05b" },
  { initials: "PK", bg: "#d97706" },
];

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      aria-label="Overton CRM — India's #1 AI Real Estate CRM"
    >
      {/* ── BACKGROUND EFFECTS ── */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* ── HERO BODY ── */}
      <div className={styles.heroBody}>
        <Container>
          <div className={styles.heroContent}>

            {/* BADGE */}
            <div className={styles.badge}>
              <div className={styles.badgePill}>✦</div>
              India's First AI-Powered CRM Built Exclusively for Real Estate
            </div>

            {/* HEADLINE — Only 1 h1 on whole page! */}
            <h1 className={styles.heroH1}>
              Your Real Estate Sales Team Is Losing Deals.
              Not Because They're Bad —
              <em>Because their tools don't think.</em>
            </h1>

            {/* DESCRIPTION */}
            <p className={styles.heroDesc}>
              Overton is India's only AI-powered real estate CRM built
              exclusively for developers and brokers. Our AI qualifies your
              leads before your team picks up the phone — and tells them
              exactly who to call next. From the first 99acres inquiry to
              the final possession cheque.
            </p>

            {/* CTA BUTTONS */}
            <div className={styles.ctaBar}>
              <Link href="#cta" className={styles.btnPrimary}>
                Start Free for 30 Days →
              </Link>
              <Link href="#ai" className={styles.btnSecondary}>
                ▶ See How AI Works
              </Link>
            </div>

            {/* NOTE */}
            <p className={styles.heroNote}>
              Free for 30 days · No credit card required ·{" "}
              <Link href="#demo">Book a live demo instead</Link>
            </p>

            {/* TRUST ROW */}
            <div className={styles.trustRow}>
              <p className={styles.trustTxt}>
                Trusted by <strong>500+ developers & brokers</strong> across India
              </p>
            </div>

          </div>
        </Container>
      </div>

      {/* ── PROOF BAR ── */}
      <div className={styles.proofBar}>
        <div className={styles.proofInner}>
          {proofItems.map((item, i) => (
            <React.Fragment key={i}>
              <div className={styles.proofItem}>
                {item.text}
              </div>
              {i < proofItems.length - 1 && (
                <div className={styles.proofDivider} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}