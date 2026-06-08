"use client";

import { useState } from "react";
import { Sparkles, Check, Minus, ArrowRight, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

// ── TYPES ──
interface Feature {
  text: string;
  included: boolean;
  isAI?: boolean;
}

interface Plan {
  id: string;
  name: string;
  annualPrice: number | null;
  desc: string;
  featured: boolean;
  ctaText: string;
  ctaHref: string;
  features: Feature[];
}

interface TabData {
  id: string;
  label: string;
  plans: Plan[];
}

interface Addon {
  icon: string;
  title: string;
  desc: string;
}

// ── TAB DATA ──
const tabs: TabData[] = [
  // ════════════════════════════
  // TAB 1 — FOR DEVELOPERS
  // ════════════════════════════
  {
    id: "developers",
    label: "For Developers",
    plans: [
      {
        id: "starter",
        name: "Starter",
        annualPrice: 599,
        desc: "Perfect for getting started with real estate CRM.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Up to 2 users", included: true },
          { text: "1 project", included: true },
          { text: "Task management", included: true },
          {
            text: "Meta, Google Ads, Housing, 99 Acres, Magic Bricks Integration",
            included: true,
          },
          { text: "Site Visit Scheduling", included: true },
          { text: "Mobile app", included: true },
          { text: "Basic reports", included: true },
          { text: "Team Pipeline (Upto 4)", included: true },
          { text: "AI Lead Scoring", included: true, isAI: true },
          { text: "AI Follow-up Suggestions", included: true, isAI: true },
          { text: "Best Time to Contact", included: true, isAI: true },
        ],
      },
      {
        id: "growth",
        name: "Growth",
        annualPrice: 1999,
        desc: "Everything you need to grow your real estate business.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Starter Plan +", included: true },
          { text: "Up to 5 Users", included: true },
          { text: "5 Projects", included: true },
          { text: "Inventory Management", included: true },
          { text: "Document Management", included: true },
          { text: "Website Templates", included: true },
          { text: "Team Pipeline (Upto 8)", included: true },
          { text: "Website Lead Integration", included: true },
          { text: "Email Integration", included: true },
          {
            text: "Customizable Dashboards (Upto 5 Fields in one module)",
            included: true,
          },
          { text: "Everything in Starter Plan +", included: true, isAI: true },
          { text: "AI Sales Forecasting", included: true, isAI: true },
          { text: "AI Opportunity Insights", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Dashboard Insights", included: true, isAI: true },
        ],
      },
      {
        id: "professional",
        name: "Professional",
        annualPrice: 2999,
        desc: "Advanced tools for larger teams and complex workflows.",
        featured: true,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Growth Plan +", included: true },
          { text: "Up to 10 Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Stage-wise Payments", included: true },
          { text: "Custom Reports", included: true },
          { text: "WhatsApp + SMS Integration", included: true },
          { text: "Mass Email Campaigns Integration", included: true },
          {
            text: "Customizable Dashboards (Upto 10 Fields in one module)",
            included: true,
          },
          { text: "Team Pipeline (Upto 15)", included: true },
          { text: "End-User App Access", included: true },
          { text: "Everything in Growth Plan +", included: true, isAI: true },
          { text: "AI Calling Assistant", included: true, isAI: true },
          { text: "AI Email Writer Assistant", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Revenue Forecasting", included: true, isAI: true },
        ],
      },
      {
        id: "scale",
        name: "Scale",
        annualPrice: null,
        desc: "Tailored for large organizations with complex needs.",
        featured: false,
        ctaText: "Talk to Sales",
        ctaHref: "tel:+919023016487",
        features: [
          { text: "Everything in Professional Plan +", included: true },
          { text: "Unlimited Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Multi-Branch Management", included: true },
          { text: "IVR Integration", included: true },
          { text: "Online Meeting Integration", included: true },
          { text: "Custom Workflows", included: true },
          { text: "Dedicated Account Manager", included: true },
          { text: "Priority Support", included: true },
          {
            text: "Everything in Professional Plan +",
            included: true,
            isAI: true,
          },
          { text: "AI Meeting Summary", included: true, isAI: true },
          { text: "AI Predictive Analytics", included: true, isAI: true },
          { text: "And much more...", included: true, isAI: true },
          { text: "AI Call Summary", included: true, isAI: true },
        ],
      },
    ],
  },

  // ════════════════════════════
  // TAB 2 — FOR BROKERS
  // ════════════════════════════
  {
    id: "brokers",
    label: "For Brokers",
    plans: [
      {
        id: "starter",
        name: "Starter",
        annualPrice: 599,
        desc: "Perfect for individual brokers getting started.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Up to 2 Users", included: true },
          { text: "Task Management", included: true },
          {
            text: "Meta, Google Ads, Housing, 99 Acres, Magic Bricks Integration",
            included: true,
          },
          { text: "Mobile App", included: true },
          { text: "Basic Reports", included: true },
          { text: "Team Pipeline (Upto 4)", included: true },
          { text: "AI Lead Scoring", included: true, isAI: true },
          { text: "AI Follow-up Suggestions", included: true, isAI: true },
          { text: "Best Time to Contact", included: false, isAI: true },
        ],
      },
      {
        id: "growth",
        name: "Growth",
        annualPrice: 1499,
        desc: "Everything you need to grow your real estate business.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Starter Plan +", included: true },
          { text: "Up to 5 Users", included: true },
          { text: "Project Registration Module", included: true },
          { text: "Website Templates", included: true },
          { text: "Team Pipeline (Upto 8)", included: true },
          { text: "Website Lead Integration", included: true },
          { text: "Email Integration", included: true },
          {
            text: "Customizable Dashboards (Upto 5 Fields in one module)",
            included: true,
          },
          { text: "Everything in Starter Plan +", included: true, isAI: true },
          { text: "AI Sales Forecasting", included: true, isAI: true },
          { text: "AI Opportunity Insights", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Dashboard Insights", included: true, isAI: true },
        ],
      },
      {
        id: "professional",
        name: "Professional",
        annualPrice: 2499,
        desc: "Advanced tools for larger teams and complex workflows.",
        featured: true,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Growth Plan +", included: true },
          { text: "Up to 10 Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Custom Reports ", included: true },
          { text: "WhatsApp + SMS Integration", included: true },
          { text: "Mass Email Campaigns Integration", included: true },
          {
            text: "Customizable Dashboards (Upto 10 Fields in one module)",
            included: true,
          },
          { text: "Team Pipeline (Upto 15)", included: true },
          { text: "Smart Site Visit Authentication System", included: true },
          { text: "Everything in Growth Plan +", included: true, isAI: true },
          { text: "AI Calling Assistant", included: true, isAI: true },
          { text: "AI Email Writer Assistant", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Revenue Forecasting", included: true, isAI: true },
        ],
      },
      {
        id: "scale",
        name: "Scale",
        annualPrice: null,
        desc: "Tailored for your business needs and scale.",
        featured: false,
        ctaText: "Talk to Sales",
        ctaHref: "tel:+919023016487",
        features: [
          { text: "Everything in Professional Plan +", included: true },
          { text: "Unlimited Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Multi-Branch Management", included: true },
          { text: "IVR Integration", included: true },
          { text: "Online Meeting Integration", included: true },
          { text: "Custom Workflows", included: true },
          { text: "Dedicated Account Manager", included: true },
          { text: "Priority Support", included: true },
          {
            text: "Everything in Professional Plan +",
            included: true,
            isAI: true,
          },
          { text: "AI Meeting Summary", included: true, isAI: true },
          { text: "AI Predictive Analytics", included: true, isAI: true },
          { text: "And much more...", included: true, isAI: true },
          { text: "AI Call Summary", included: true, isAI: true },
        ],
      },
    ],
  },

  // ════════════════════════════
  // TAB 3 — BROKER MANDATE
  // ════════════════════════════
  {
    id: "mandate",
    label: "Broker Mandate",
    plans: [
      {
        id: "starter",
        name: "Starter",
        annualPrice: 599,
        desc: "Perfect for getting started with CRM.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Up to 2 Users", included: true },
          { text: "1 Project", included: true },
          { text: "Task Management", included: true },
          {
            text: "Meta, Google Ads, Housing, 99 Acres, Magic Bricks Integration",
            included: true,
          },
          { text: "Site Visit Scheduling", included: true },
          { text: "Mobile App", included: true },
          { text: "Basic Reports", included: true },
          { text: "Team Pipeline (Upto 4)", included: false },
          { text: "AI Lead Scoring", included: true, isAI: true },
          { text: "AI Follow-up Suggestions", included: true, isAI: true },
          { text: "Best Time to Contact", included: true, isAI: true },
        ],
      },
      {
        id: "growth",
        name: "Growth",
        annualPrice: 1999,
        desc: "Everything you need to grow your real estate business.",
        featured: false,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Starter Plan +", included: true },
          { text: "Up to 5 Users", included: true },
          { text: "5 Projects", included: true },
          { text: "Inventory Management", included: true },
          { text: "Website Templates", included: true },
          { text: "Team Pipeline (Upto 8)", included: true },
          { text: "Website Lead Integration", included: true },
          { text: "Email Integration", included: true },
          {
            text: "Customizable Dashboards (Upto 5 Fields in one module)",
            included: true,
          },
          { text: "Everything in Starter Plan +", included: true, isAI: true },
          { text: "AI Sales Forecasting", included: true, isAI: true },
          { text: "AI Opportunity Insights", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Dashboard Insights", included: true, isAI: true },
        ],
      },
      {
        id: "Professional",
        name: "Professional",
        annualPrice: 2999,
        desc: "Advanced tools for larger teams and complex workflows.",
        featured: true,
        ctaText: "Start Free Trial",
        ctaHref: "",
        features: [
          { text: "Everything in Growth Plan +", included: true },
          { text: "Up to 10 Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Stage-wise Payments", included: true },
          { text: "Custom Reports", included: true },
          { text: "WhatsApp + SMS Integration", included: true },
          { text: "Mass Email Campaigns Integration", included: true },
          {
            text: " Customizable Dashboards (Upto 10 Fields in one module)",
            included: true,
          },
          { text: "Team Pipeline (Upto 15)", included: true },
          { text: "Everything in Growth Plan +", included: true, isAI: true },
          { text: "AI Calling Assistant", included: true, isAI: true },
          { text: "AI Email Writer Assistant", included: true, isAI: true },
          { text: "AI Report Generator", included: true, isAI: true },
          { text: "AI Revenue Forecasting", included: true, isAI: true },
        ],
      },
      {
        id: "scale",
        name: "Scale",
        annualPrice: null,
        desc: "Tailored for your business needs and scale.",
        featured: false,
        ctaText: "Talk to Sales",
        ctaHref: "tel:+919023016487",
        features: [
          { text: "Everything in Professional Plan +", included: true },
          { text: "Unlimited Users", included: true },
          { text: "Unlimited Projects", included: true },
          { text: "Multi-Branch Management", included: true },
          { text: "IVR Integration", included: true },
          { text: "Online Meeting Integration", included: true },
          { text: "Custom Workflows", included: true },
          { text: "Dedicated Account Manager", included: true },
          { text: "Priority Support", included: true },
          {
            text: "Everything in Professional Plan +",
            included: true,
            isAI: true,
          },
          { text: "AI Meeting Summary", included: true, isAI: true },
          { text: "AI Predictive Analytics", included: true, isAI: true },
          { text: "And much more...", included: true, isAI: true },
          { text: "AI Call Summary", included: true, isAI: true },
        ],
      },
    ],
  },
];

// ── ADD-ON SERVICES ──
const addons: Addon[] = [
  {
    icon: "👤",
    title: "Additional User",
    desc: "Add more team members to your existing plan",
  },
  {
    icon: "📁",
    title: "Additional Project",
    desc: "Expand your project capacity beyond plan limits",
  },
  {
    icon: "🌐",
    title: "Website Form Integration",
    desc: "Capture leads directly from your website forms",
  },
  {
    icon: "💬",
    title: "WhatsApp Integration",
    desc: "Connect WhatsApp Business to your CRM pipeline",
  },
  {
    icon: "📧",
    title: "Email Integration",
    desc: "Sync your email inbox with lead profiles",
  },
  {
    icon: "📣",
    title: "Mass Email Campaign",
    desc: "Send bulk campaigns to your entire lead database",
  },
  {
    icon: "📞",
    title: "IVR Integration",
    desc: "Connect IVR calling system to your CRM",
  },
  {
    icon: "✦",
    title: "AI Feature Integration",
    desc: "Add any custom AI feature to your existing plan",
  },
];

// ── MAIN COMPONENT ──
export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("developers");
  const [isAnnual, setIsAnnual] = useState(true);

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      className="py-20 lg:py-28 bg-[#F8F9FE] border-y border-[#E3E7F4]"
      id="pricing"
    >
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Pricing"
          heading="Simple, Transparent Pricing."
          headingHighlight="No Hidden Fees. No Sales Calls."
          align="center"
        />
        <div className="text-center max-w-3xl mx-auto -mt-8 mb-8">
          <p className="text-[#6B7499]">
            Start free for 30 days —
            <span className="text-[#3D5AF1] font-extrabold text-lg">
              {" "}
              No Credit Card Required.
            </span>{" "}
            Pick the plan that fits your team after the trial.
          </p>
        </div>

        {/* TABS */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white border border-[#E3E7F4] rounded-2xl p-1.5 gap-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl
                  text-sm font-semibold transition-all duration-200 cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "bg-[#0F1629] text-white shadow-sm"
                      : "text-[#6B7499] hover:text-[#0F1629] hover:bg-[#F8F9FE]"
                  }
                `}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span
            className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-[#0F1629]" : "text-[#6B7499]"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${isAnnual ? "bg-[#3D5AF1]" : "bg-[#CDD3EC]"}`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${isAnnual ? "translate-x-7" : "translate-x-1"}`}
            />
          </button>
          <span
            className={`text-sm font-semibold transition-colors ${isAnnual ? "text-[#0F1629]" : "text-[#6B7499]"}`}
          >
            Annual
          </span>
          <span className="bg-[#EDFBF4] text-[#0EA05B] text-xs font-bold px-3 py-1 rounded-full border border-[#0EA05B]/20">
            Save 30%
          </span>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {currentTab.plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        {/* Add-On Services */}
        <div className="bg-gradient-to-r from-[#EEF1FE] via-white to-[#F3E8FF] border-[#E3E7F4] shadow-sm rounded-3xl p-8">
          <h3 className="text-2xl font-extrabold text-[#0F1629] text-center tracking-tight mb-5">
            Add-On's
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-sm text-[#6B7499]">
            {[
              "✓ Additional User Charge",
              "✓ Additional Project",
              "✓ Website Form Integration",
              "✓ WhatsApp Integration",
              "✓ Email Integration",
              "✓ Mass Email Campaign",
              "✓ IVR Integration",
              "✓ Any Other AI Feature Integration",
              "✓ Customization",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 bg-white border border-[#E3E7F4] rounded-full px-4 py-2 font-medium hover:border-[#3D5AF1] transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-[#6B7499] mt-5 shadow-sm bg-[#7C3AED]/20 border-[#E3E7F4] rounded-3xl p-3">
          {[
            "✓ 30-day free trial",
            "✓ No credit card required",
            "✓ Cancel anytime",
            "✓ Onboarding support included",
            "✓ Data export anytime",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── PRICING CARD ──
function PricingCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  const annualPrice = plan.annualPrice;

  const monthlyPrice = annualPrice ? Math.round(annualPrice * 1.3) : null;

  const price = isAnnual ? annualPrice : monthlyPrice;

  const regularFeatures = plan.features.filter((f) => !f.isAI);
  const aiFeatures = plan.features.filter((f) => f.isAI);

  return (
    <div
      className={`
        relative rounded-3xl p-6 flex flex-col
        transition-all duration-300
        ${
          plan.featured
            ? "bg-[#0F1629] border-2 border-[#3D5AF1] shadow-[0_20px_60px_rgba(61,90,241,0.2)]"
            : "bg-white border border-[#E3E7F4] hover:border-[#3D5AF1]/30 hover:shadow-[0_8px_40px_rgba(61,90,241,0.08)]"
        }
      `}
    >
      {/* FEATURED BADGE */}
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#3D5AF1] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* FOR TEXT */}
      <p
        className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${plan.featured ? "text-[#93a8f4]" : "text-[#3D5AF1]"}`}
      ></p>

      {/* NAME */}
      <h3
        className={`text-xl font-extrabold mb-3 tracking-tight ${plan.featured ? "text-white" : "text-[#0F1629]"}`}
      >
        {plan.name}
      </h3>

      {/* PRICE */}
      <div className="mb-3">
        {price !== null ? (
          <>
            <div className="flex items-baseline gap-1">
              <span
                className={`text-3xl font-extrabold tracking-tight ${plan.featured ? "text-white" : "text-[#0F1629]"}`}
              >
                ₹{price.toLocaleString("en-IN")}
              </span>
              <span
                className={`text-xs font-medium ${plan.featured ? "text-white/40" : "text-[#6B7499]"}`}
              >
                /month +GST
              </span>
            </div>
            {isAnnual && annualPrice && monthlyPrice && (
              <p
                className={`text-xs mt-1 ${plan.featured ? "text-[#6ee7b7]" : "text-[#0EA05B]"}`}
              >
                Save ₹
                {((monthlyPrice - annualPrice) * 12).toLocaleString("en-IN")}
                /yr
              </p>
            )}
          </>
        ) : (
          <div
            className={`text-3xl font-extrabold tracking-tight ${plan.featured ? "text-white" : "text-[#0F1629]"}`}
          >
            Custom
          </div>
        )}
      </div>

      {/* DESC */}
      <p
        className={`text-xs leading-relaxed mb-5 ${plan.featured ? "text-white/50" : "text-[#4A5578]"}`}
      >
        {plan.desc}
      </p>

      {/* CTA */}
      <Link
        href={plan.ctaHref}
        className={`
          flex items-center justify-center gap-2
          text-sm font-bold px-5 py-3 mb-4 rounded-xl
          transition-all duration-200 hover:-translate-y-0.5
          ${
            plan.featured
              ? "bg-[#3D5AF1] hover:bg-[#2A3FD9] text-white shadow-[0_4px_20px_rgba(61,90,241,0.5)]"
              : "bg-[#F8F9FE] hover:bg-[#EEF1FE] text-[#0F1629] border border-[#E3E7F4] hover:border-[#3D5AF1]/30"
          }
        `}
      >
        {plan.ctaText}
        <ArrowRight size={14} />
      </Link>

      {/* DIVIDER */}
      <div
        className={`h-px mb-5 ${plan.featured ? "bg-white/10" : "bg-[#E3E7F4]"}`}
      />

      {/* FEATURES */}
      <ul className="flex flex-col gap-2.5 mb-6 flex-1">
        {regularFeatures.map((feature) => (
          <li key={feature.text} className="flex items-start gap-2.5">
            {/* Icon */}
            {feature.isAI && feature.included ? (
              <div className="w-4 h-4 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles size={8} className="text-[#a78bfa]" />
              </div>
            ) : feature.isAI && !feature.included ? (
              <div className="w-4 h-4 rounded-full bg-[#F1F4FB] flex items-center justify-center shrink-0 mt-0.5">
                <Minus size={8} className="text-[#CDD3EC]" />
              </div>
            ) : feature.included ? (
              <div className="w-4 h-4 rounded-full bg-[#EDFBF4] flex items-center justify-center shrink-0 mt-0.5">
                <Check size={8} className="text-[#0EA05B]" strokeWidth={3} />
              </div>
            ) : (
              <div className="w-4 h-4 rounded-full bg-[#F1F4FB] flex items-center justify-center shrink-0 mt-0.5">
                <Minus size={8} className="text-[#CDD3EC]" />
              </div>
            )}

            {/* Text */}
            <span
              className={`text-xs leading-snug ${
                feature.included
                  ? plan.featured
                    ? feature.isAI
                      ? "text-[#a78bfa] font-semibold"
                      : "text-white/80"
                    : feature.isAI
                      ? "text-[#7C3AED] font-semibold"
                      : "text-[#0F1629]"
                  : plan.featured
                    ? "text-white/20 line-through"
                    : "text-[#C4C9D8] line-through"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {aiFeatures.length > 0 && (
        <div
          className="
          relative mt-2 mb-4 rounded-2xl
          border border-[#D8B4FE]
          bg-gradient-to-b
          from-[#FAF5FF]
          to-[#F3E8FF]
          p-4
        "
        >
          <div className="absolute -top-3 right-4">
            <span className="bg-white border border-[#D8B4FE] text-[#7C3AED] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              AI ✨
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {aiFeatures.map((feature) => (
              <li key={feature.text} className="flex items-center gap-2">
                <Sparkles size={12} className="text-[#7C3AED] shrink-0" />

                <span
                  className={`text-xs ${
                    feature.included
                      ? "text-[#7C3AED] font-semibold"
                      : "text-[#BDBDBD] line-through"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── ADDON CARD ──
function AddonCard({ addon }: { addon: Addon }) {
  return (
    <div
      className="
      bg-white border border-[#E3E7F4]
      hover:border-[#3D5AF1]/25
      hover:shadow-[0_4px_20px_rgba(61,90,241,0.07)]
      rounded-2xl p-5
      flex flex-col gap-3
      transition-all duration-200
      group cursor-default
    "
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-xl bg-[#EEF1FE] flex items-center justify-center text-base shrink-0">
        {addon.icon}
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-extrabold text-[#0F1629] mb-1">
          {addon.title}
        </p>
        <p className="text-xs text-[#6B7499] leading-relaxed">{addon.desc}</p>
      </div>

      {/* Contact link */}
      <div className="mt-auto">
        <Link
          href="#demo"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#3D5AF1] hover:text-[#2A3FD9] transition-colors opacity-0 group-hover:opacity-100"
        >
          Get pricing
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
