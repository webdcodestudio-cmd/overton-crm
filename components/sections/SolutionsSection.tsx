"use client";

import {
  Building2,
  Handshake,
  ClipboardList,
  Target,
  Package,
  CircleDollarSign,
  Bot,
  MessageCircle,
  Link2,
  BarChart2,
  Building,
  Scale,
  Users,
  TrendingUp,
  CheckCircle2,
  BotIcon,
  AlignRightIcon,
  ArrowRight,
  ArrowRightIcon,
} from "lucide-react";
import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import TrialButton from "../ui/TrialButton";

const tabs = [
  {
    id: "brokers",
    label: "For Brokers",
    icon: <Handshake size={16} />,
    badge: "Brokerage & Agency",
    badgeColor: "bg-[#0EA05B] text-[#EDFBF4]",
    heading: "Stop Losing Leads to Competitors. Start Closing More Deals.",
    description:
      "Overton gives brokers a complete pipeline — from 99acres inquiry to deal closed. AI tells your team exactly who to call next, every single morning. WhatsApp integrated. Everything tracked.",
    features: [
      {
        icon: <Bot size={16} />,
        title: "AI Priority List",
        desc: "Every morning, AI ranks your leads by conversion probability. Your team calls the right people first.",
      },
      {
        icon: <MessageCircle size={16} />,
        title: "WhatsApp Integration",
        desc: "Follow-ups, floor plans, payment reminders on WhatsApp — all tracked in CRM automatically.",
      },
      {
        icon: <Link2 size={16} />,
        title: "Portal Integration",
        desc: "99acres, MagicBricks, Housing.com leads auto-captured. No manual copy-paste ever again.",
      },
      {
        icon: <BarChart2 size={16} />,
        title: "Pipeline Management",
        desc: "See every lead, every stage, every follow-up. Know exactly where each deal stands.",
      },
    ],
    cta: "Start Free Trial",
    stats: [
      { value: "5x", label: "Faster Follow-up" },
      { value: "3+", label: "Portals Connected" },
      { value: "AI", label: "Priority Calls" },
    ],
    accentColor: "from-green-50 to-emerald-50",
    iconBg: "bg-green-bg",
    iconColor: "text-green",
    btnClass:
      "bg-[#0EA05B] hover:bg-[#0b8a4e] shadow-[0_4px_20px_rgba(14,160,91,0.35)] hover:shadow-[0_6px_28px_rgba(14,160,91,0.5)]",
  },
  {
    id: "developers",
    label: "For Developers",
    icon: <Building2 size={16} />,
    badge: "Builder & Developer",
    badgeColor: "bg-[#3D5AF1] text-white",
    heading: "Close More Units. Manage Every Project From One Dashboard.",
    description:
      "Overton gives real estate developers a complete command centre — from the first 99acres inquiry to the final possession cheque. Every lead, every unit, every payment, every document. One platform.",
    features: [
      {
        icon: <Target size={16} />,
        title: "AI Lead Qualification",
        desc: "AI calls every new lead, qualifies budget & intent before your team picks up the phone.",
      },
      {
        icon: <Package size={16} />,
        title: "Inventory Management",
        desc: "Block-by-block, unit-wise tracking. No double bookings. Auto-updated when deals close.",
      },
      {
        icon: <ClipboardList size={16} />,
        title: "RERA Document Generation",
        desc: "KYC, allotment letters, agreements — generated as PDFs in 60 seconds. RERA-ready.",
      },
      {
        icon: <CircleDollarSign size={16} />,
        title: "Stage-wise Payment Tracking",
        desc: "Know exactly which buyers owe what, and when. Overdue alerts sent automatically.",
      },
    ],
    cta: "Start Free Trial ",
    stats: [
      { value: "100+", label: "Units Managed" },
      { value: "60s", label: "RERA Docs" },
      { value: "0", label: "Double Bookings" },
    ],
    accentColor: "from-blue-50 to-indigo-50",
    iconBg: "bg-brand-light",
    iconColor: "text-brand",
    btnClass:
      "bg-brand hover:bg-brand-deep shadow-[0_4px_20px_rgba(61,90,241,0.35)] hover:shadow-[0_6px_28px_rgba(61,90,241,0.5)]",
  },
  {
    id: "mandate",
    label: "Broker Mandate",
    icon: <ClipboardList size={16} />,
    badge: "Multi-Developer Mandate",
    badgeColor: "bg-[#7C3AED] text-[#F3EFFE]",
    heading: "Manage Multiple Developers. One Clean Dashboard.",
    description:
      "Overton's Mandate module is built for broker firms that represent multiple developers — with separate inventory, separate RERA compliance, and one unified pipeline for your entire team.",
    features: [
      {
        icon: <Building size={16} />,
        title: "Multi-Developer Inventory",
        desc: "Handle inventory from multiple developers — each project separate, one dashboard unified.",
      },
      {
        icon: <Scale size={16} />,
        title: "Track Campaign Spend",
        desc: "Monitor campaign costs, measure leads generated, and plan budgets smarter.",
      },
      {
        icon: <Users size={16} />,
        title: "Team Role Management",
        desc: "Define exactly what each team member can see — by developer, project, or function.",
      },
      {
        icon: <TrendingUp size={16} />,
        title: "Cross-Project Reporting",
        desc: "Which developer, which project, which team member is performing best — at a glance.",
      },
    ],
    cta: "Start Free Trial",
    stats: [
      { value: "∞", label: "Developers" },
      { value: "1", label: "Dashboard" },
      { value: "RERA", label: "Per Project" },
    ],
    accentColor: "from-violet-50 to-purple-50",
    iconBg: "bg-ai-light",
    iconColor: "text-ai",
    btnClass:
      "bg-[#7C3AED] hover:bg-[#6d28d9] shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_28px_rgba(124,58,237,0.5)]",
  },
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("brokers");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 lg:py-28 bg-white" id="solutions">
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Solutions"
          heading="Built for Every Real Estate Team."
          headingHighlight="Pick Your Role."
          description="Whether you're a developer managing 500 units or a broker handling 50 leads — Overton has a workflow built exactly for you."
          align="center"
        />

        {/* TABS */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center bg-white border border-border rounded-2xl p-1.5 gap-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2
                  px-5 py-2.5
                  rounded-xl
                  text-sm font-semibold
                  transition-all duration-200
                  cursor-pointer
                  ${
                    activeTab === tab.id
                      ? "bg-dark text-white shadow-sm"
                      : "text-muted hover:text-dark hover:bg-off"
                  }
                `}
              >
                <span className="flex items-center">{tab.icon}</span>
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* LEFT — Text Content */}
          <div>
            {/* Badge */}
            <span
              className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full mb-5 ${active.badgeColor}`}
            >
              {active.badge}
            </span>

            {/* Main Heading */}
            <h3 className="text-2xl sm:text-[1.85rem] font-extrabold text-dark leading-tight tracking-tight mb-4">
              {active.heading}
            </h3>

            {/* Description */}
            <p className="text-slate text-base leading-relaxed mb-8 border-l-2 border-border pl-4">
              {active.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {active.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border hover:border-brand/20 hover:shadow-sm transition-all duration-200"
                >
                  {/* Icon */}
                  <div
                    className={`w-22 h-10 rounded-xl flex items-center justify-center mb-4 ${active.iconBg}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    {/* Sub Heading */}
                    <p className="text-sm font-bold text-dark leading-snug mb-1">
                      {feature.title}
                    </p>
                    {/* Sub Description */}
                    <p className="text-xs text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON — Proper Design */}
            <TrialButton
              className={`
                inline-flex items-center gap-2
                text-white text-sm font-bold
                px-7 py-3.5
                rounded-xl
                transition-all duration-200
                hover:-translate-y-0.5
                ${active.btnClass}
              `}
            >
              {active.cta}
              <ArrowRightIcon size={14} className="text-[#ffffff]" />
            </TrialButton>
          </div>

          {/* RIGHT — Visual Card */}
          <div
            className={`relative rounded-3xl bg-gradient-to-br ${active.accentColor} border border-border p-8`}
          >
            {/* STATS ROW */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {active.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-border"
                >
                  <div
                    className={`text-2xl font-extrabold font-heading mb-1 ${active.iconColor}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURE PREVIEW CARDS */}
            <div className="space-y-2.5">
              {active.features.slice(0, 3).map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 border border-border shadow-sm"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${active.iconBg}`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-dark">
                      {feature.title}
                    </p>
                    <p className="text-xs text-muted truncate">
                      {feature.desc}
                    </p>
                  </div>
                  {/* Check icon */}
                  <div className="w-5 h-5 rounded-full bg-green-bg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-[#0EA05B]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
