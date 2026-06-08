"use client";

import {
  Target,
  Package,
  MessageCircle,
  FileText,
  Calendar,
  CreditCard,
  Phone,
  Receipt,
  Smartphone,
  Link2,
  Lock,
  Rocket,
  Sparkles,
  Brain,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CalendlyButton from "../ui/CalendlyButton";

// ── ALL 12 FEATURES ──
const features = [
  {
    icon: <Target size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Smart Lead Management",
    description:
      "Meta Ads, 99acres, MagicBricks, Google, website — every source in one pipeline. Every call, note, and status change logged automatically.",
    iconBg: "bg-[#EEF1FE]",
    preview: [
      { label: "Inquiries", width: "100%", color: "#3D5AF1", count: 48 },
      { label: "Follow-Up", width: "65%", color: "#6366F1", count: 31 },
      { label: "Site Visit", width: "40%", color: "#7C3AED", count: 19 },
      { label: "Won", width: "25%", color: "#0EA05B", count: 12 },
    ],
  },
  {
    icon: <Package size={20} />,
    tag: "Developer + Mandate",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Inventory Management",
    description:
      "Project-wise, building-wise, block-wise, unit-wise. Pricing, floor plans, photos, availability — auto-updated when deals close. No double bookings ever.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <CreditCard size={20} />,
    tag: "Developer + Scale",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Stage-wise Payment Tracking",
    description:
      "Configure milestones per project. Track every buyer's schedule. See overdue payments instantly. Send reminders with payment links.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <FileText size={20} />,
    tag: "Developer + Mandate",
    tagColor: "bg-[#EDFBF4] text-[#0EA05B]",
    title: "RERA Document Generation",
    description:
      "KYC documents, allotment letters, agreements for sale, demand letters, possession letters, and other project-specific documents are generated automatically as professional PDFs the moment a deal closes. Built-in RERA-ready templates ensure consistency, accuracy, and compliance across every document. Buyer details, unit information, payment schedules, and project data are auto-filled instantly, eliminating repetitive manual work, reducing human errors, and helping your team process sales faster without compliance risks.",
    iconBg: "bg-[#EDFBF4]",
    preview: [
      { label: "KYC Document", width: "100%", color: "#0EA05B" },
      { label: "Agreement for Sale", width: "85%", color: "#3D5AF1" },
      { label: "Possession Letter", width: "60%", color: "#7C3AED" },
    ],
  },
  {
    icon: <Calendar size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Site Visit Scheduling",
    description:
      "Buyers book directly. Auto-reminders sent. Your site team sees who's coming, what they want, what budget they discussed.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <MessageCircle size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#F0FDF4] text-[#0EA05B]",
    title: "WhatsApp Integration",
    description:
      "Sell on the channel your buyers already use. Follow-ups, floor plans, payment reminders on WhatsApp — all tracked in CRM. Every conversation logged automatically.",
    iconBg: "bg-[#EDFBF4]",
  },
  {
    icon: <Phone size={20} />,
    tag: "Growth + Scale",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "IVR & Call Recording",
    description:
      "Every call recorded and linked to the lead's profile. Replay before your next follow-up. Train new joiners on real calls.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <Receipt size={20} />,
    tag: "Growth + Scale",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "End-User App & Payment Flow",
    description:
      "Streamline client payments with automated stage-wise notifications, instant invoicing, and centralized access to all legal documents.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <Smartphone size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "iOS & Android Mobile App",
    description:
      "Your full CRM in your pocket. Log inquiries, follow up on leads, check inventory, schedule site visits — fully synced with web dashboard.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <Link2 size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Property Portal Integration",
    description:
      "99acres, MagicBricks, Housing.com — leads captured instantly into your pipeline. No manual copy-paste ever again.",
    iconBg: "bg-[#EEF1FE]",
  },
  {
    icon: <Lock size={20} />,
    tag: "All Plans",
    tagColor: "bg-[#EEF1FE] text-[#3D5AF1]",
    title: "Role-Based Access Control",
    description:
      "Define exactly what every team member can see and do — by module, function, and designation. Full audit trail.",
    iconBg: "bg-[#EEF1FE]",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#F8F9FE] border-y border-[#E3E7F4]"
      id="features"
    >
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Real Estate CRM Features"
          heading="Every Feature Your Real Estate Team Needs."
          headingHighlight="All Built for Indian Property Sales."
          description="Built from the ground up for Indian real estate — RERA compliance, KYC documentation, stage-wise payments, broker-developer relationships, 99acres and MagicBricks integration."
          align="center"
        />

        {/* ── ROW 1 — Smart Lead (big) + Inventory + WhatsApp ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Smart Lead — Big card with pipeline preview */}
          <div className="lg:col-span-1 bg-white rounded-3xl border border-[#E3E7F4] hover:border-[#3D5AF1]/30 hover:shadow-[0_8px_40px_rgba(61,90,241,0.07)] transition-all duration-300 p-7 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[#EEF1FE] flex items-center justify-center text-xl">
                <Target size={20} />
              </div>
              <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#EEF1FE] text-[#3D5AF1]">
                All Plans
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#0F1629] mb-2">
              Smart Lead Management
            </h3>
            <p className="text-sm text-[#4A5578] leading-relaxed mb-5 flex-1">
              Meta Ads, 99acres, MagicBricks, Google — every source in one
              pipeline. Every call, note, and status change logged
              automatically.
            </p>
            <div className="bg-[#F8F9FE] rounded-2xl p-4 border border-[#E3E7F4]">
              {[
                {
                  label: "Inquiries",
                  width: "100%",
                  color: "#3D5AF1",
                  count: 48,
                },
                {
                  label: "Follow-Up",
                  width: "65%",
                  color: "#6366F1",
                  count: 31,
                },
                {
                  label: "Site Visit",
                  width: "40%",
                  color: "#7C3AED",
                  count: 19,
                },
                { label: "Won", width: "25%", color: "#0EA05B", count: 12 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 mb-2 last:mb-0"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-[#6B7499] w-20 shrink-0">
                    {item.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-[#E3E7F4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: item.width, background: item.color }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#0F1629] w-5 text-right shrink-0">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <InventoryCard />

          {/* WhatsApp */}
          <PaymentCard />
        </div>

        {/* ── ROW 2 — RERA (big 2col) + Site Visit + Payment ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* RERA — Big card with doc preview */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E3E7F4] hover:border-[#0EA05B]/30 hover:shadow-[0_8px_40px_rgba(14,160,91,0.07)] transition-all duration-300 p-7 flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[#EDFBF4] flex items-center justify-center text-xl">
                <FileText size={20} />
              </div>
              <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#EDFBF4] text-[#0EA05B]">
                Developer + Mandate
              </span>
            </div>
            <h3 className="text-base font-extrabold text-[#0F1629] mb-2">
              RERA Document Generation
            </h3>
            <p className="text-sm text-[#4A5578] leading-relaxed mb-5">
              KYC documents, allotment letters, agreements for sale, demand
              letters, possession letters, and other project-specific documents
              are generated automatically as professional PDFs the moment a deal
              closes. Built-in RERA-ready templates ensure consistency,
              accuracy, and compliance across every document. Buyer details,
              unit information, payment schedules, and project data are
              auto-filled instantly, eliminating repetitive manual work,
              reducing human errors, and helping your team process sales faster
              without compliance risks.
            </p>
            <div className="bg-[#F8F9FE] rounded-2xl p-4 border border-[#E3E7F4] mt-auto">
              {[
                { label: "KYC Document", width: "100%", color: "#0EA05B" },
                { label: "Agreement for Sale", width: "85%", color: "#3D5AF1" },
                { label: "Possession Letter", width: "60%", color: "#7C3AED" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 mb-2 last:mb-0"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-[#6B7499] w-36 shrink-0">
                    {item.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-[#E3E7F4] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: item.width, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Site Visit + WhatsApp stacked */}
          <div className="flex flex-col gap-4">
            <SimpleCard feature={features[4]} />
            <SimpleCard feature={features[5]} />
          </div>
        </div>

        {/* ── ROW 3 — AI Special Card (full width) ── */}
        <div className="mb-4">
          <div className="bg-[#0F1629] rounded-3xl border border-white/10 p-8 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#7C3AED]/20 text-[#a78bfa] text-xs font-bold px-3 py-1.5 rounded-full border border-[#7C3AED]/30 mb-4">
                  <span>
                    <Sparkles size={12} />
                  </span>{" "}
                  AI Feature · Growth + Scale
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3">
                  AI Calling, Lead Suggestions & Smart Reporting
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  AI validates every lead before your team calls. Daily priority
                  list of who to follow up with and why. Weekly AI reports that
                  diagnose your pipeline — not a dashboard, a decision engine.
                </p>
              </div>
              {/* Right — 3 mini cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    icon: <Phone size={18} />,
                    title: "AI Calling",
                    desc: "Validates every lead instantly",
                  },
                  {
                    icon: <Brain size={18} />,
                    title: "Lead Suggestions",
                    desc: "Daily ranked priority list",
                  },
                  {
                    icon: <BarChart2 size={18} />,
                    title: "Smart Reporting",
                    desc: "Diagnose + action weekly",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <div className="flex items-center justify-center mb-2 text-[#a78bfa]">
                      {item.icon}
                    </div>
                    <p className="text-white text-xs font-bold mb-1">
                      {item.title}
                    </p>
                    <p className="text-white/40 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 4 — IVR + Quotation + Mobile + Portal + RBAC + CTA ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SimpleCard feature={features[6]} />
          <SimpleCard feature={features[7]} />
          <SimpleCard feature={features[8]} />
          <SimpleCard feature={features[9]} />
          <SimpleCard feature={features[10]} />
          <CTACard />
        </div>
      </Container>
    </section>
  );
}

// ── SIMPLE CARD ──
interface PreviewItem {
  label: string;
  width: string;
  color: string;
  count?: number;
}

interface Feature {
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  iconBg: string;
  preview?: PreviewItem[];
}

// ── INVENTORY CARD WITH PIE CHART ──
const inventoryData = [
  { name: "Available", value: 50, color: "#0EA05B" },
  { name: "Sold", value: 30, color: "#3D5AF1" },
  { name: "Blocked", value: 20, color: "#F59E0B" },
];

function InventoryCard() {
  return (
    <div className="bg-white rounded-3xl border border-[#E3E7F4] hover:border-[#3D5AF1]/30 hover:shadow-[0_8px_40px_rgba(61,90,241,0.07)] transition-all duration-300 p-7 flex flex-col h-full">
      {/* TOP ROW */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-2xl bg-[#EEF1FE] flex items-center justify-center text-[#3D5AF1]">
          <Package size={20} />
        </div>
        <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#EEF1FE] text-[#3D5AF1]">
          Developer + Mandate
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-base font-extrabold text-[#0F1629] mb-2">
        Inventory Management
      </h3>

      {/* DESC */}
      <p className="text-sm text-[#4A5578] leading-relaxed mb-5">
        Project-wise, building-wise, block-wise, unit-wise. Live availability
        updated when deals close. No double bookings ever.
      </p>

      {/* PIE CHART + LEGEND */}
      <div className="bg-[#F8F9FE] rounded-2xl p-4 border border-[#E3E7F4] mt-auto">
        <div className="flex items-center justify-between gap-4">
          {/* PIE CHART */}
          <div className="shrink-0">
            <PieChart width={90} height={90}>
              <Pie
                data={inventoryData}
                cx={40}
                cy={40}
                innerRadius={25}
                outerRadius={42}
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, ""]}
                contentStyle={{
                  fontSize: "11px",
                  borderRadius: "8px",
                  border: "1px solid #E3E7F4",
                  padding: "4px 8px",
                }}
              />
            </PieChart>
          </div>

          {/* LEGEND */}
          <div className="flex flex-col gap-2 flex-1">
            {inventoryData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-xs text-[#6B7499]">{item.name}</span>
                </div>
                <span
                  className="text-xs font-extrabold"
                  style={{ color: item.color }}
                >
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TOTAL UNITS */}
        <div className="mt-3 pt-3 border-t border-[#E3E7F4] flex items-center justify-between">
          <span className="text-xs text-[#6B7499]">Total Units</span>
          <span className="text-xs font-extrabold text-[#0F1629]">
            120 Units
          </span>
        </div>
      </div>
    </div>
  );
}

// ── PAYMENT TRACKING CARD ──
const paymentStages = [
  {
    label: "Booking Amount",
    percent: 5,
    color: "#7C3AED",
    status: null,
  },
  {
    label: "On Agreement",
    percent: 10,
    color: "#7C3AED",
    status: null,
  },
  {
    label: "On Plinth Level",
    percent: 25,
    color: "#F59E0B",
    status: "due soon",
  },
  {
    label: "On Possession",
    percent: 15,
    color: "#3D5AF1",
    status: null,
  },
];

// Bottom milestone bar data
const milestones = [
  { label: "Booking 5%", position: "0%" },
  { label: "Plinth 25%", position: "40%" },
  { label: "Possession 15%", position: "82%" },
];

function PaymentCard() {
  return (
    <div className="bg-white rounded-3xl border border-[#E3E7F4] hover:border-[#3D5AF1]/30 hover:shadow-[0_8px_40px_rgba(61,90,241,0.07)] transition-all duration-300 p-7 flex flex-col h-full">
      {/* TOP ROW */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-2xl bg-[#EEF1FE] flex items-center justify-center text-[#3D5AF1]">
          <CreditCard size={20} />
        </div>
        <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#EEF1FE] text-[#3D5AF1]">
          Developer + Scale
        </span>
      </div>

      {/* TITLE */}
      <h3 className="text-base font-extrabold text-[#0F1629] mb-2">
        Stage-wise Payment Tracking
      </h3>

      {/* DESC */}
      <p className="text-sm text-[#4A5578] leading-relaxed mb-5">
        Configure milestones per project. Track every buyer's schedule. Send
        reminders with payment links.
      </p>

      {/* PAYMENT STAGES */}
      <div className="flex flex-col gap-2.5 mb-5">
        {paymentStages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-3">
            {/* Dot */}
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: stage.color }}
            />
            {/* Label + badge */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-xs text-[#4A5578]">{stage.label}</span>
              {stage.status && (
                <span className="text-[10px] font-bold text-[#F59E0B] bg-[#FEF9C3] px-2 py-0.5 rounded-full">
                  {stage.status}
                </span>
              )}
            </div>
            {/* Percent */}
            <span
              className="text-xs font-extrabold shrink-0"
              style={{ color: stage.color }}
            >
              {stage.percent}%
            </span>
          </div>
        ))}
      </div>

      {/* GRADIENT PROGRESS BAR */}
      <div className="mt-auto">
        <div className="h-2 rounded-full overflow-hidden bg-[#E3E7F4]">
          <div
            className="h-full rounded-full"
            style={{
              width: "65%",
              background:
                "linear-gradient(90deg, #7C3AED 0%, #F59E0B 50%, #3D5AF1 100%)",
            }}
          />
        </div>

        {/* MILESTONE LABELS */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-[#6B7499]">Booking 5%</span>
          <span className="text-[10px] text-[#6B7499]">Plinth 25%</span>
          <span className="text-[10px] text-[#6B7499]">Possession 15%</span>
        </div>
      </div>
    </div>
  );
}

function SimpleCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-white rounded-3xl border border-[#E3E7F4] hover:border-[#3D5AF1]/30 hover:shadow-[0_8px_40px_rgba(61,90,241,0.07)] transition-all duration-300 p-7 flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center ${feature.iconBg}`}
        >
          {feature.icon}
        </div>
        <span
          className={`text-[11px] font-bold px-3 py-1.5 rounded-full ${feature.tagColor}`}
        >
          {feature.tag}
        </span>
      </div>
      <h3 className="text-base font-extrabold text-[#0F1629] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[#4A5578] leading-relaxed flex-1">
        {feature.description}
      </p>
    </div>
  );
}

// ── CTA CARD ──
function CTACard() {
  return (
    <div className="bg-[#0F1629] rounded-3xl p-7 flex flex-col justify-between border border-white/5">
      <div>
        <div className="w-11 h-11 rounded-2xl bg-[#3D5AF1]/20 flex items-center justify-center text-white text-xl mb-5">
          <Rocket size={20} />
        </div>
        <h3 className="text-lg font-extrabold text-white leading-snug mb-3">
          See All Features in Action
        </h3>
        <p className="text-sm text-white/40 leading-relaxed">
          Book a live demo — we'll walk through every feature with your team's
          real workflow.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <a
          href=""
          className="flex items-center justify-center gap-2.5 text-center bg-[#3D5AF1] hover:bg-[#2A3FD9] text-white text-sm font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(61,90,241,0.4)] hover:-translate-y-0.5"
        >
          Start Free Trial <ArrowRight size={16} />
        </a>

        <CalendlyButton
          text="Book a Demo"
          className="block text-center bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 text-white/70 text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
        />
      </div>
    </div>
  );
}
