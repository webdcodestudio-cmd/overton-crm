import {
  Phone,
  Brain,
  BarChart2,
  Search,
  Activity,
  Radio,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AIFeaturesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#0F1629] relative overflow-hidden"
      id="ai"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_60%)]" />
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(61,90,241,0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Container>
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-5 h-0.5 rounded-full bg-[#7C3AED]" />
            AI Features
            <span className="w-5 h-0.5 rounded-full bg-[#7C3AED]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold text-white leading-tight tracking-tight mb-4">
            The CRM That Thinks For Your Team.
            <br />
            <span className="text-[#a78bfa]">
              India's Only AI-Powered Real Estate CRM.
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/50 text-base leading-relaxed max-w-[600px] mx-auto">
            Three AI features that qualify your leads, prioritise your team's
            day, and diagnose your pipeline — automatically, every single day.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* ── BIG CARD — AI Lead Calling (spans 2 cols) ── */}
          <div className="lg:col-span-2 relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            {/* Card glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(61,90,241,0.15)_0%,transparent_65%)] pointer-events-none" />

            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 bg-[#3D5AF1]/20 text-[#93a8f4] text-xs font-bold px-3 py-1.5 rounded-full border border-[#3D5AF1]/30 mb-5">
              <span className="text-[10px]">
                <Sparkles size={12} />
              </span>{" "}
              AI Feature 01
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight mb-2">
              AI Lead Calling
            </h3>
            <p className="text-[#93a8f4] text-sm font-semibold mb-4">
              Your CRM makes the first call — before your team even logs in.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-7 max-w-lg">
              The moment a lead enters from 99acres, MagicBricks, or Meta Ads —
              Overton's AI makes an actual voice call. It verifies, qualifies
              budget & timeline, scores intent, and recommends next action.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {[
                { val: "2 min", lbl: "Avg call time" },
                { val: "94%", lbl: "Qualification accuracy" },
                { val: "24/7", lbl: "Always active" },
              ].map((s) => (
                <div
                  key={s.lbl}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-center"
                >
                  <div className="text-xl font-extrabold text-[#93a8f4] font-heading mb-1">
                    {s.val}
                  </div>
                  <div className="text-xs text-white/35">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-3">
              {[
                {
                  n: "1",
                  t: "Instant AI Call",
                  d: "Lead enters pipeline → AI calls within minutes. No delay, no manual effort.",
                },
                {
                  n: "2",
                  t: "Smart Qualification",
                  d: "AI asks budget, property type, timeline — full call recorded & attached to lead.",
                },
                {
                  n: "3",
                  t: "Intent Score",
                  d: "Every lead gets an AI score. Team only follows up on pre-qualified leads.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#3D5AF1]/25 border border-[#3D5AF1]/30 flex items-center justify-center text-[11px] font-bold text-[#93a8f4] shrink-0 mt-0.5">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold leading-snug">
                      {step.t}
                    </p>
                    <p className="text-white/35 text-xs leading-relaxed mt-0.5">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SMALL CARD — AI Priority List ── */}
          <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-7 overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            {/* Card glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_65%)] pointer-events-none" />

            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 bg-[#7C3AED]/20 text-[#a78bfa] text-xs font-bold px-3 py-1.5 rounded-full border border-[#7C3AED]/30 mb-5">
              <span className="text-[10px]">
                <Sparkles size={12} />
              </span>{" "}
              AI Feature 02
            </div>

            <h3 className="text-lg font-extrabold text-white leading-tight tracking-tight mb-2">
              AI Priority List
            </h3>
            <p className="text-[#a78bfa] text-xs font-semibold mb-3">
              Stop working a random list. Start working an AI-ranked one.
            </p>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              Every morning, AI analyses your entire pipeline and ranks leads by
              conversion probability — who to call first, and why.
            </p>

            {/* Priority List Preview */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                {
                  name: "Rohan Mehta",
                  info: "2BHK · ₹85L budget",
                  badge: "AI Hot",
                  badgeColor: "bg-[#7C3AED]/30 text-[#c4b5fd]",
                  score: "96",
                },
                {
                  name: "Priya Shah",
                  info: "3BHK · Site visit booked",
                  badge: "Warm",
                  badgeColor: "bg-[#3D5AF1]/30 text-[#93a8f4]",
                  score: "74",
                },
                {
                  name: "Amit Joshi",
                  info: "1RK · New inquiry",
                  badge: "New",
                  badgeColor: "bg-white/10 text-white/50",
                  score: "41",
                },
              ].map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center justify-between bg-white/[0.04] border border-white/[0.07] rounded-xl px-3 py-2.5"
                >
                  <div>
                    <p className="text-white text-xs font-bold">{lead.name}</p>
                    <p className="text-white/35 text-[11px]">{lead.info}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lead.badgeColor}`}
                    >
                      {lead.badge}
                    </span>
                    <span className="text-[#a78bfa] text-xs font-extrabold">
                      {lead.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/25 rounded-xl p-4">
              <p className="text-white/60 text-xs leading-relaxed">
                <span className="text-white font-semibold">Result: </span>
                Your team starts every morning with a pre-ranked list — updated
                daily on real behavioural data.
              </p>
            </div>
          </div>

          {/* ── WIDE CARD — AI Smart Reporting (spans full width) ── */}
          <div className="lg:col-span-3 relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            {/* Card glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[radial-gradient(ellipse,rgba(61,90,241,0.10)_0%,transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT */}
              <div>
                {/* Tag */}
                <div className="inline-flex items-center gap-1.5 bg-[#0EA05B]/20 text-[#6ee7b7] text-xs font-bold px-3 py-1.5 rounded-full border border-[#0EA05B]/30 mb-5">
                  <span className="text-[10px]">
                    <Sparkles size={12} />
                  </span>{" "}
                  AI Feature 03
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight mb-2">
                  AI Smart Reporting
                </h3>
                <p className="text-[#6ee7b7] text-sm font-semibold mb-4">
                  Reports that tell you what to do — not just what happened.
                </p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Instead of raw charts, Overton's AI surfaces diagnoses: "Your
                  conversion rate dropped 3 points — concentrated in leads not
                  contacted within 4 hours." That's a decision, not a report.
                  Auto-generated every week without you asking.
                </p>
              </div>

              {/* RIGHT — 3 Report Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    icon: <Search size={18} />,
                    title: "Performance Diagnosis",
                    desc: "Why it happened + what to change tomorrow. Specific, actionable.",
                    color: "border-[#3D5AF1]/30 bg-[#3D5AF1]/10",
                    textColor: "text-[#93a8f4]",
                  },
                  {
                    icon: <Activity size={18} />,
                    title: "Pipeline Health Score",
                    desc: "Will you hit target this month? Exact actions if score is low.",
                    color: "border-[#7C3AED]/30 bg-[#7C3AED]/10",
                    textColor: "text-[#a78bfa]",
                  },
                  {
                    icon: <Radio size={18} />,
                    title: "Channel ROI",
                    desc: "Meta Ads, 99acres, Google — scored on deals closed, not volume.",
                    color: "border-[#0EA05B]/30 bg-[#0EA05B]/10",
                    textColor: "text-[#6ee7b7]",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-2xl border p-5 ${card.color}`}
                  >
                    <div className="flex items-center justify-left mb-3 text-white">
                      {card.icon}
                    </div>
                    <p className={`text-sm font-bold mb-2 ${card.textColor}`}>
                      {card.title}
                    </p>
                    <p className="text-white/35 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
