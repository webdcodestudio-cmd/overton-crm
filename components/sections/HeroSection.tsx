import { ArrowRight, CheckIcon, Play, Sparkle } from "lucide-react";
import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import Container from "@/components/ui/Container";
import CalendlyButton from "../ui/CalendlyButton";

const proofItems = [
  {
    text: (
      <React.Fragment>
        <CheckIcon size={16} /> <strong>India's only</strong> AI-powered real
        estate CRM
      </React.Fragment>
    ),
  },
  {
    text: (
      <React.Fragment>
        <CheckIcon size={16} /> <strong>30-day free trial</strong> — no credit
        card
      </React.Fragment>
    ),
  },
  {
    text: (
      <React.Fragment>
        <CheckIcon size={16} /> <strong>99acres, MagicBricks,</strong> Meta Ads
        — all connected
      </React.Fragment>
    ),
  },
  {
    text: (
      <React.Fragment>
        <CheckIcon size={16} /> Setup in <strong>30 minutes</strong>
      </React.Fragment>
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      aria-label="AI-Powered Real Estate CRM for Developers & Brokers"
    >
      {/* BACKGROUND EFFECTS */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* HERO BODY */}
      <div className={styles.heroBody}>
        <Container>
          <div className={styles.heroContent}>
            {/* BADGE */}
            <div className={styles.badge}>
              <div className={styles.badgePill}>
                <Sparkle size={12} />
              </div>
              AI-Powered Real Estate CRM for Developers & Brokers
            </div>

            {/* HEADLINE */}
            <h1 className={styles.heroH1}>
              AI-Powered Real Estate CRM That Helps Developers & Brokers Close
              More Deals<em>Because their tools don't think.</em>
            </h1>

            {/* DESCRIPTION */}
            <p className={styles.heroDesc}>
              Overton CRM helps real estate developers and brokers manage leads,
              inventory, site visits, payments, WhatsApp communication, and RERA
              workflows from one platform. AI qualifies leads before your team
              follows up and helps prioritize the opportunities most likely to
              convert.
            </p>

            {/* CTA BUTTONS */}
            <div className={styles.ctaBar}>
              <Link href="" className={styles.btnPrimary}>
                Start Free for 30 Days <ArrowRight size={18} />
              </Link>
              <Link
                href="#ai-features-showcase"
                className={styles.btnSecondary}
              >
                <Play size={14} className="fill-current" />
                See How AI Works
              </Link>
            </div>

            {/* NOTE */}
            <p className={styles.heroNote}>
              Free for 30 days · No credit card required ·{" "}
              <CalendlyButton
                text="Book a live demo instead"
                className="text-white/80 underline-offset-[3px] underline"
              />
            </p>
          </div>
        </Container>
      </div>

      {/* PROOF BAR */}
      <div className={styles.proofBar}>
        <div className={styles.proofInner}>
          {proofItems.map((item, i) => (
            <React.Fragment key={i}>
              <div className={styles.proofItem}>{item.text}</div>
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
