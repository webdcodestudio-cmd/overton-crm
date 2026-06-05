"use client";

import { useState, useEffect } from "react";
import { Phone, Search, Activity, Radio, Sparkles } from "lucide-react";

/* ── CONSTANTS ──────────────────────────────────────────────────── */
const INTERVAL_MS = 5000;

const STYLES = `
  @keyframes aiFadeIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes aiProgress {
    from { width: 0%;   }
    to   { width: 100%; }
  }
  @keyframes aiWave {
    0%, 100% { transform: scaleY(0.3); }
    50%      { transform: scaleY(1);   }
  }
  .aifs-fade { animation: aiFadeIn   0.42s ease both; }
  .aifs-prog { animation: aiProgress ${INTERVAL_MS}ms linear forwards; }
  .aifs-wave { animation: aiWave     1.15s ease-in-out infinite; }
`;

/* ── TYPES ──────────────────────────────────────────────────────── */
interface Stat {
  val: string;
  lbl: string;
}
interface Step {
  n: string;
  t: string;
  d: string;
}
interface Lead {
  name: string;
  info: string;
  badge: string;
  score: string;
  badgeCls: string;
  scoreCls: string;
  pct: number;
  barClr: string;
}
interface RCard {
  title: string;
  desc: string;
  clr: string;
}
interface Feature {
  id: string;
  tag: string;
  tagClr: string;
  navTitle: string;
  navSub: string;
  title: string;
  heading: string;
  desc: string;
  stats?: Stat[];
  steps?: Step[];
  leads?: Lead[];
  result?: string;
  cards?: RCard[];
}

/* ── DATA ───────────────────────────────────────────────────────── */
const features: Feature[] = [
  {
    id: "calling",
    tag: "AI Feature 01",
    tagClr: "#3D5AF1",
    navTitle: "AI Lead Calling",
    navSub: "Auto-qualifies every inbound lead by voice",
    title: "AI Lead Calling",
    heading: "Your CRM makes the first call — before your team even logs in.",
    desc: "The moment a lead enters from 99acres, MagicBricks, or Meta Ads — Overton's AI makes an actual voice call. It verifies, qualifies budget & timeline, scores intent, and recommends next action.",
    stats: [
      { val: "2 min", lbl: "Avg call time" },
      { val: "94%", lbl: "Qualification accuracy" },
      { val: "24/7", lbl: "Always active" },
    ],
    steps: [
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
    ],
  },
  {
    id: "priority",
    tag: "AI Feature 02",
    tagClr: "#7C3AED",
    navTitle: "AI Priority List",
    navSub: "AI-ranked leads every morning, automatically",
    title: "AI Priority List",
    heading: "Stop working a random list. Start working an AI-ranked one.",
    desc: "Every morning, AI analyses your entire pipeline and ranks leads by conversion probability — who to call first, and why.",
    leads: [
      {
        name: "Rohan Mehta",
        info: "2BHK · ₹85L budget",
        badge: "AI Hot",
        score: "96",
        badgeCls: "bg-purple-50 text-purple-600 border border-purple-200",
        scoreCls: "text-purple-600",
        pct: 96,
        barClr: "#7C3AED",
      },
      {
        name: "Priya Shah",
        info: "3BHK · Site visit booked",
        badge: "Warm",
        score: "74",
        badgeCls: "bg-blue-50 text-blue-600 border border-blue-200",
        scoreCls: "text-blue-600",
        pct: 74,
        barClr: "#3D5AF1",
      },
      {
        name: "Amit Joshi",
        info: "1RK · New inquiry",
        badge: "New",
        score: "41",
        badgeCls: "bg-gray-100 text-gray-500 border border-gray-200",
        scoreCls: "text-gray-400",
        pct: 41,
        barClr: "#9ca3af",
      },
    ],
    result:
      "Your team starts every morning with a pre-ranked list — updated daily on real behavioural data.",
  },
  {
    id: "reporting",
    tag: "AI Feature 03",
    tagClr: "#0EA05B",
    navTitle: "AI Smart Reporting",
    navSub: "Diagnoses, not just dashboards",
    title: "AI Smart Reporting",
    heading: "Reports that tell you what to do — not just what happened.",
    desc: `Instead of raw charts, Overton's AI surfaces diagnoses: "Your conversion rate dropped 3 points — concentrated in leads not contacted within 4 hours." That's a decision, not a report. Auto-generated every week without you asking.`,
    cards: [
      {
        title: "Performance Diagnosis",
        desc: "Why it happened + what to change tomorrow. Specific, actionable.",
        clr: "#3D5AF1",
      },
      {
        title: "Pipeline Health Score",
        desc: "Will you hit target this month? Exact actions if score is low.",
        clr: "#7C3AED",
      },
      {
        title: "Channel ROI",
        desc: "Meta Ads, 99acres, Google — scored on deals closed, not volume.",
        clr: "#0EA05B",
      },
    ],
  },
];

/* ── VISUAL MOCKUPS ─────────────────────────────────────────────── */

function CallingMockup() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#3D5AF1]/10 flex items-center justify-center">
              <Phone size={16} className="text-[#3D5AF1]" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#0F1629]">Ravi Kumar</p>
              <p className="text-[11px] text-[#6b7499]">
                MagicBricks · 2BHK ₹80L
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-bold text-green-600">
              Live AI Call
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-0.5 h-10 my-1">
          {[3, 5, 8, 6, 10, 7, 4, 9, 5, 8, 6, 10, 4, 7, 9, 5, 8, 6, 4, 7].map(
            (h, i) => (
              <div
                key={i}
                className="aifs-wave rounded-full bg-[#3D5AF1]"
                style={{
                  width: 3,
                  height: `${h * 3}px`,
                  animationDelay: `${i * 0.06}s`,
                  opacity: 0.45 + (i % 3) * 0.18,
                }}
              />
            ),
          )}
        </div>
        <p className="text-[11px] text-center text-[#6b7499] mt-1">
          AI: "What configuration do you prefer?"
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4">
        <p className="text-[12px] font-bold text-[#0F1629] mb-3">
          Live Qualification
        </p>
        {[
          { lbl: "Budget confirmed", val: "₹75L–₹90L", done: true },
          { lbl: "Property type", val: "2BHK preferred", done: true },
          { lbl: "Timeline", val: "Asking now…", done: false },
        ].map((item) => (
          <div
            key={item.lbl}
            className="flex items-center justify-between mb-2.5 last:mb-0"
          >
            <div className="flex items-center gap-2">
              {item.done ? (
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path
                      d="M1 3L3 5L7 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <span className="w-4 h-4 rounded-full border-2 border-[#e3e7f4] flex items-center justify-center shrink-0">
                  <span className="w-1 h-1 rounded-full bg-[#6b7499] animate-pulse" />
                </span>
              )}
              <span className="text-[12px] text-[#6b7499]">{item.lbl}</span>
            </div>
            <span
              className={`text-[12px] font-semibold ${item.done ? "text-[#0F1629]" : "text-[#6b7499]"}`}
            >
              {item.val}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { val: "2 min", lbl: "Call time" },
          { val: "94%", lbl: "Accuracy" },
          { val: "24/7", lbl: "Active" },
        ].map((s) => (
          <div
            key={s.lbl}
            className="bg-white rounded-xl border border-[#e3e7f4] p-3 text-center"
          >
            <p className="text-[15px] font-extrabold text-[#3D5AF1]">{s.val}</p>
            <p className="text-[10px] text-[#6b7499] mt-0.5">{s.lbl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriorityMockup() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-bold text-[#0F1629]">
            Today's AI Priority List
          </p>
          <p className="text-[11px] text-[#6b7499]">
            Ranked by conversion probability
          </p>
        </div>
        <span className="text-[10px] font-bold bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full border border-purple-100">
          9:00 AM
        </span>
      </div>

      {[
        {
          rank: 1,
          name: "Rohan Mehta",
          info: "2BHK · ₹85L budget",
          badge: "AI Hot",
          score: "96",
          bc: "bg-purple-50 text-purple-600 border border-purple-200",
          sc: "text-purple-600",
          pct: "96%",
          bar: "#7C3AED",
        },
        {
          rank: 2,
          name: "Priya Shah",
          info: "3BHK · Site visit booked",
          badge: "Warm",
          score: "74",
          bc: "bg-blue-50 text-blue-600 border border-blue-200",
          sc: "text-blue-600",
          pct: "74%",
          bar: "#3D5AF1",
        },
        {
          rank: 3,
          name: "Amit Joshi",
          info: "1RK · New inquiry",
          badge: "New",
          score: "41",
          bc: "bg-gray-100 text-gray-500 border border-gray-200",
          sc: "text-gray-400",
          pct: "41%",
          bar: "#9ca3af",
        },
      ].map((l) => (
        <div
          key={l.rank}
          className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4"
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-lg bg-[#f1f4fb] text-[#6b7499] text-xs font-bold flex items-center justify-center shrink-0">
                {l.rank}
              </span>
              <div>
                <p className="text-[13px] font-bold text-[#0F1629] leading-tight">
                  {l.name}
                </p>
                <p className="text-[11px] text-[#6b7499]">{l.info}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${l.bc}`}
              >
                {l.badge}
              </span>
              <span className={`text-[15px] font-extrabold ${l.sc}`}>
                {l.score}
              </span>
            </div>
          </div>
          <div className="h-1.5 rounded-full bg-[#f1f4fb]">
            <div
              className="h-full rounded-full"
              style={{ width: l.pct, background: l.bar }}
            />
          </div>
        </div>
      ))}

      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4">
        <p className="text-[12px] text-[#6b7499] leading-relaxed">
          <span className="font-bold text-purple-600">AI Insight: </span>
          Call Rohan first — highest conversion probability based on budget
          match and engagement.
        </p>
      </div>
    </div>
  );
}

function ReportingMockup() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-bold text-[#0F1629]">
            Weekly AI Report
          </p>
          <p className="text-[11px] text-[#6b7499]">
            Auto-generated · Week of 26 May
          </p>
        </div>
        <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 rounded-full border border-green-200">
          Auto
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          {
            lbl: "Conversion",
            val: "34%",
            delta: "−3pts",
            neg: true,
            clr: "#3D5AF1",
          },
          { lbl: "Health", val: "78", delta: "+5", neg: false, clr: "#7C3AED" },
          {
            lbl: "Best ROI",
            val: "Meta",
            delta: "3 deals",
            neg: false,
            clr: "#0EA05B",
          },
        ].map((k) => (
          <div
            key={k.lbl}
            className="bg-white rounded-xl border border-[#e3e7f4] p-3 text-center"
          >
            <p className="text-[15px] font-extrabold" style={{ color: k.clr }}>
              {k.val}
            </p>
            <p className="text-[10px] text-[#6b7499] my-0.5">{k.lbl}</p>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${k.neg ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}
            >
              {k.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#e3e7f4] shadow-sm p-4">
        <p className="text-[12px] font-bold text-[#0F1629] mb-3">
          Lead Source Performance
        </p>
        {[
          { lbl: "Meta Ads", pct: 78, clr: "#3D5AF1" },
          { lbl: "99acres", pct: 55, clr: "#7C3AED" },
          { lbl: "MagicBricks", pct: 42, clr: "#0EA05B" },
          { lbl: "Housing.com", pct: 29, clr: "#9ca3af" },
        ].map((r) => (
          <div key={r.lbl} className="flex items-center gap-2 mb-2 last:mb-0">
            <span className="text-[11px] text-[#6b7499] w-20 shrink-0">
              {r.lbl}
            </span>
            <div className="flex-1 h-2 rounded-full bg-[#f1f4fb]">
              <div
                className="h-full rounded-full"
                style={{ width: `${r.pct}%`, background: r.clr }}
              />
            </div>
            <span className="text-[11px] font-bold text-[#0F1629] w-8 text-right">
              {r.pct}%
            </span>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
        <p className="text-[12px] text-[#6b7499] leading-relaxed">
          <span className="font-bold text-green-600">AI Diagnosis: </span>
          Conversion dropped 3pts — MagicBricks leads not contacted within 4
          hrs. Set auto-call rule to fix.
        </p>
      </div>
    </div>
  );
}

const MOCKUPS = [CallingMockup, PriorityMockup, ReportingMockup];

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function AIFeaturesShowcase() {
  const [active, setActive] = useState(0);
  const [progKey, setProgKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const t = setTimeout(() => {
      setActive((i) => (i + 1) % features.length);
      setProgKey((k) => k + 1);
    }, INTERVAL_MS);

    return () => clearTimeout(t);
  }, [active, progKey, isHovered]);

  const pick = (i: number) => {
    if (i === active) return;
    setActive(i);
    setProgKey((k) => k + 1);
  };

  const f = features[active];
  const Mockup = MOCKUPS[active];

  return (
    <section className="py-20 lg:py-28 bg-white" id="ai-features-showcase">
      <style>{STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#3D5AF1] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-5 h-px bg-[#3D5AF1] rounded-full" />
            AI Features
            <span className="w-5 h-px bg-[#3D5AF1] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F1629] leading-tight tracking-tight mb-3">
            The CRM That Thinks For Your Team.
          </h2>
          <p className="text-xl font-bold text-[#3D5AF1] mb-4">
            India's Only AI-Powered Real Estate CRM.
          </p>
          <p className="text-[#6b7499] text-base leading-relaxed">
            Three AI features that qualify your leads, prioritise your team's
            day, and diagnose your pipeline — automatically, every single day.
          </p>
        </div>

        {/* ── LAYOUT ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-10 items-start">
          {/* LEFT — NAV TABS */}
          <div className="w-full lg:sticky lg:top-8">
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
              {features.map((feat, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={feat.id}
                    onClick={() => pick(i)}
                    style={{ minWidth: 200 }}
                    className={`shrink-0 lg:shrink lg:w-full text-left rounded-2xl transition-all duration-300 overflow-hidden
                      ${
                        isActive
                          ? "bg-white border border-[#e3e7f4] shadow-[0_4px_20px_rgba(61,90,241,0.10)]"
                          : "bg-white border border-[#e3e7f4] hover:border-[#c8d0f0] hover:shadow-sm"
                      }`}
                  >
                    <div className="p-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2.5"
                        style={{
                          background: `${feat.tagClr}15`,
                          color: feat.tagClr,
                        }}
                      >
                        <Sparkles size={10} />
                        {feat.tag}
                      </span>
                      <p
                        className={`text-sm font-extrabold leading-tight transition-colors ${isActive ? "text-[#0F1629]" : "text-[#4a5578]"}`}
                      >
                        {feat.navTitle}
                      </p>
                      <p
                        className={`text-[11px] mt-0.5 leading-relaxed hidden lg:block transition-colors ${isActive ? "text-[#6b7499]" : "text-[#9ca3af]"}`}
                      >
                        {feat.navSub}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="h-0.75 w-full bg-[#f1f4fb]">
                      {isActive && (
                        <div
                          key={progKey}
                          className={`aifs-prog h-full rounded-full ${
                            isHovered ? "aifs-prog-paused" : ""
                          }`}
                          style={{ background: feat.tagClr }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div
            key={`content-${active}`}
            className="aifs-fade w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start">
              {/* Text */}
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
                  style={{ background: `${f.tagClr}12`, color: f.tagClr }}
                >
                  <Sparkles size={12} />
                  {f.tag}
                </span>

                <h3 className="text-2xl sm:text-[1.75rem] font-extrabold text-[#0F1629] leading-tight tracking-tight mb-2">
                  {f.title}
                </h3>
                <p
                  className="text-sm font-bold mb-4"
                  style={{ color: f.tagClr }}
                >
                  {f.heading}
                </p>
                <p className="text-[#6b7499] text-sm leading-relaxed mb-8 max-w-lg">
                  {f.desc}
                </p>

                {/* Stats */}
                {f.stats && (
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {f.stats.map((s) => (
                      <div
                        key={s.lbl}
                        className="bg-[#fafbff] border border-[#e3e7f4] rounded-2xl p-4 text-center"
                      >
                        <p
                          className="text-xl font-extrabold mb-1"
                          style={{ color: f.tagClr }}
                        >
                          {s.val}
                        </p>
                        <p className="text-[11px] text-[#6b7499]">{s.lbl}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Steps */}
                {f.steps && (
                  <div className="flex flex-col gap-3">
                    {f.steps.map((step) => (
                      <div
                        key={step.n}
                        className="flex items-start gap-3 bg-[#fafbff] border border-[#e3e7f4] rounded-xl px-4 py-3.5"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={{
                            background: `${f.tagClr}18`,
                            color: f.tagClr,
                            border: `1px solid ${f.tagClr}35`,
                          }}
                        >
                          {step.n}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0F1629] leading-tight mb-0.5">
                            {step.t}
                          </p>
                          <p className="text-xs text-[#6b7499] leading-relaxed">
                            {step.d}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Leads */}
                {f.leads && (
                  <div className="flex flex-col gap-3">
                    {f.leads.map((lead) => (
                      <div
                        key={lead.name}
                        className="flex items-center justify-between bg-[#fafbff] border border-[#e3e7f4] rounded-xl px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-bold text-[#0F1629]">
                            {lead.name}
                          </p>
                          <p className="text-xs text-[#6b7499]">{lead.info}</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${lead.badgeCls}`}
                          >
                            {lead.badge}
                          </span>
                          <span
                            className={`text-base font-extrabold ${lead.scoreCls}`}
                          >
                            {lead.score}
                          </span>
                        </div>
                      </div>
                    ))}
                    {f.result && (
                      <div
                        className="rounded-xl p-4 mt-1"
                        style={{
                          background: `${f.tagClr}0D`,
                          border: `1px solid ${f.tagClr}28`,
                        }}
                      >
                        <p className="text-xs text-[#6b7499] leading-relaxed">
                          <span className="font-semibold text-[#0F1629]">
                            Result:{" "}
                          </span>
                          {f.result}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Report cards */}
                {f.cards && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {f.cards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl p-5"
                        style={{
                          background: `${card.clr}0D`,
                          border: `1px solid ${card.clr}30`,
                        }}
                      >
                        <p
                          className="text-sm font-bold mb-2"
                          style={{ color: card.clr }}
                        >
                          {card.title}
                        </p>
                        <p className="text-xs text-[#6b7499] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual Mockup */}
              <div className="bg-[#fafbff] rounded-3xl border border-[#e3e7f4] p-5 shadow-[0_4px_32px_rgba(61,90,241,0.05)]">
                <Mockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
