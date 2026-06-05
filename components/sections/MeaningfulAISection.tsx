"use client";

import { useState, useEffect } from "react";
import { Plus, Sparkles, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

/* ── CONSTANTS ──────────────────────────────────────────────────── */
const INTERVAL_MS = 4500;

const STYLES = `
  @keyframes mfFadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes mfProgress {
    from { width: 0%;   }
    to   { width: 100%; }
  }
  @keyframes mfWave {
    0%, 100% { transform: scaleY(0.3); }
    50%      { transform: scaleY(1);   }
  }
  .mf-fade { animation: mfFadeIn   0.38s ease both; }
  .mf-prog { animation: mfProgress ${INTERVAL_MS}ms linear forwards; }
  .mf-wave { animation: mfWave     1.1s ease-in-out infinite; }
`;

/* ── MOCKUPS ────────────────────────────────────────────────────── */

function EmailComposerMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070d1a]">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-[#0a1020]">
        <div className="flex gap-1.5">
          {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
        </div>
        <span className="flex-1 text-center text-[10px] text-white/25">New Email</span>
      </div>

      <div className="flex">
        {/* Editor */}
        <div className="flex-1 p-4 border-r border-white/8">
          <div className="mb-2.5">
            <p className="text-[9px] text-white/25 mb-1 uppercase tracking-widest">To</p>
            <div className="bg-white/5 border border-white/8 rounded-lg px-3 py-1.5 text-[11px] text-white/50">priya.shah@gmail.com</div>
          </div>
          <div className="mb-3">
            <p className="text-[9px] text-white/25 mb-1 uppercase tracking-widest">Subject</p>
            <div className="bg-white/5 border border-white/8 rounded-lg px-3 py-1.5 text-[11px] text-white/50">Re: 3BHK Unit — Site Visit Follow-up</div>
          </div>
          <div className="space-y-1.5">
            {[100, 80, 95, 60, 90, 70].map((w, i) => (
              <div key={i} className="h-2 rounded-full bg-white/8" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        {/* AI Panel */}
        <div className="w-44 p-3 flex flex-col">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-5 h-5 rounded-md bg-[#3D5AF1] flex items-center justify-center shrink-0">
              <Sparkles size={9} className="text-white" />
            </div>
            <span className="text-[11px] font-bold text-white">AI Assistant</span>
          </div>

          {/* Chat bubble — user */}
          <div className="bg-[#3D5AF1] rounded-xl rounded-tl-sm px-3 py-2 mb-2">
            <p className="text-[10px] text-white leading-relaxed">Write a follow-up for Priya's site visit</p>
          </div>

          {/* Chat bubble — AI reply */}
          <div className="bg-white/8 border border-white/10 rounded-xl rounded-tr-sm px-3 py-2 mb-3">
            <div className="space-y-1">
              {[100, 75, 95, 55, 80].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>

          <button className="mt-auto w-full bg-[#3D5AF1]/20 border border-[#3D5AF1]/30 rounded-lg py-1.5 text-[10px] font-bold text-[#93a8f4]">
            Insert into Email →
          </button>
        </div>
      </div>
    </div>
  );
}

function SummaryMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070d1a] p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] font-bold text-white">Lead Summary</p>
        <span className="text-[9px] font-bold bg-[#3D5AF1]/20 text-[#93a8f4] px-2 py-0.5 rounded-full border border-[#3D5AF1]/20">AI Generated</span>
      </div>

      {/* Lead pill */}
      <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[#3D5AF1]/25 flex items-center justify-center text-[11px] font-extrabold text-[#93a8f4] shrink-0">PS</div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold text-white">Priya Shah</p>
          <p className="text-[10px] text-white/35">3BHK · ₹1.1Cr · Site visit done</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[14px] font-extrabold text-[#a78bfa]">74</p>
          <p className="text-[9px] text-white/25">Score</p>
        </div>
      </div>

      {/* Summary bullets */}
      <div className="space-y-2.5">
        {[
          "3 calls completed — last on 28 May",
          "Site visit done on 12 May, positive feedback",
          "Budget: ₹95L–₹1.1Cr, prefers high floor",
          "Waiting on spouse confirmation",
          "Follow-up due: today",
        ].map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-[#3D5AF1] mt-1.5 shrink-0" />
            <p className="text-[11px] text-white/45 leading-relaxed">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QualificationMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070d1a] p-4">
      {/* Active call header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center">
            <Phone size={15} className="text-green-400" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-white">Ravi Kumar</p>
            <p className="text-[10px] text-white/35">99acres · 2BHK · ₹75L</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-bold text-green-400">Live AI Call</span>
        </div>
      </div>

      {/* Waveform */}
      <div className="flex items-center justify-center gap-0.5 h-8 bg-white/3 border border-white/8 rounded-xl mb-3">
        {[2,4,6,3,7,5,4,6,3,5,7,4,2,6,7,3,5,4,6,3].map((h, i) => (
          <div
            key={i}
            className="mf-wave rounded-full bg-green-400"
            style={{ width: 2.5, height: `${h * 2.8}px`, animationDelay: `${i * 0.07}s`, opacity: 0.6 + (i % 3) * 0.13 }}
          />
        ))}
      </div>

      {/* Checklist */}
      <div className="space-y-2">
        {[
          { q: "Budget range",   a: "₹65L–₹80L",     done: true  },
          { q: "Configuration",  a: "2BHK confirmed", done: true  },
          { q: "Possession",     a: "Ready to move",  done: true  },
          { q: "Intent score",   a: "Scoring…",       done: false },
        ].map((item) => (
          <div key={item.q} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-green-500" : "bg-white/8 border border-white/15"}`}>
                {item.done ? (
                  <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                    <path d="M1 2.5L2.8 4.2L6 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="w-1 h-1 rounded-full bg-white/30 animate-pulse" />
                )}
              </div>
              <span className="text-[11px] text-white/40">{item.q}</span>
            </div>
            <span className={`text-[11px] font-semibold ${item.done ? "text-white/65" : "text-white/25"}`}>{item.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadScorerMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070d1a] p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] font-bold text-white">Portal Lead Scores</p>
        <span className="text-[9px] font-bold bg-[#7C3AED]/20 text-[#a78bfa] px-2 py-0.5 rounded-full border border-[#7C3AED]/20">Live Scoring</span>
      </div>

      <div className="space-y-3">
        {[
          { name: "Amit Joshi",  src: "99acres",     badge: "Hot",  score: 94, bar: "#7C3AED", bc: "bg-[#7C3AED]/20 text-[#a78bfa]", sc: "text-[#a78bfa]"  },
          { name: "Neha Gupta",  src: "MagicBricks", badge: "Warm", score: 71, bar: "#3D5AF1", bc: "bg-[#3D5AF1]/20 text-[#93a8f4]", sc: "text-[#93a8f4]"  },
          { name: "Raj Patel",   src: "Housing.com", badge: "New",  score: 38, bar: "#4a5578", bc: "bg-white/8 text-white/35",        sc: "text-white/35"   },
        ].map((l) => (
          <div key={l.name}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center text-[9px] font-bold text-white/50 shrink-0">
                  {l.name.charAt(0)}
                </div>
                <div>
                  <span className="text-[12px] font-semibold text-white/75">{l.name}</span>
                  <span className="text-[10px] text-white/25 ml-1.5">{l.src}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/10 ${l.bc}`}>{l.badge}</span>
                <span className={`text-[14px] font-extrabold ${l.sc}`}>{l.score}</span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-white/5">
              <div className="h-full rounded-full" style={{ width: `${l.score}%`, background: l.bar }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-3">
        <p className="text-[10px] text-white/45 leading-relaxed">
          <span className="text-[#a78bfa] font-bold">AI: </span>
          Amit has 94% conversion probability — call within the next 2 hours for best results.
        </p>
      </div>
    </div>
  );
}

function ReportMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070d1a] p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] font-bold text-white">AI Weekly Diagnosis</p>
        <span className="text-[9px] font-bold bg-[#0EA05B]/15 text-[#6ee7b7] px-2 py-0.5 rounded-full border border-[#0EA05B]/20">Auto Report</span>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { lbl: "Conversion", val: "34%",    delta: "−3%",    neg: true,  clr: "#93a8f4" },
          { lbl: "Pipeline",   val: "78",      delta: "+5",     neg: false, clr: "#a78bfa" },
          { lbl: "Best ROI",   val: "Meta",    delta: "3 deals",neg: false, clr: "#6ee7b7" },
        ].map((k) => (
          <div key={k.lbl} className="bg-white/5 border border-white/8 rounded-xl p-2 text-center">
            <p className="text-[13px] font-extrabold mb-0.5" style={{ color: k.clr }}>{k.val}</p>
            <p className="text-[9px] text-white/25 mb-0.5">{k.lbl}</p>
            <span className={`text-[9px] font-bold ${k.neg ? "text-red-400" : "text-green-400"}`}>{k.delta}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-white/3 border border-white/8 rounded-xl p-3 mb-3">
        <p className="text-[10px] font-bold text-white/40 mb-2 uppercase tracking-widest">Lead Source ROI</p>
        {[
          { lbl: "Meta Ads",    pct: 78, clr: "#3D5AF1" },
          { lbl: "99acres",     pct: 55, clr: "#7C3AED" },
          { lbl: "MagicBricks", pct: 42, clr: "#0EA05B" },
          { lbl: "Housing.com", pct: 29, clr: "#4a5578" },
        ].map((r) => (
          <div key={r.lbl} className="flex items-center gap-2 mb-1.5 last:mb-0">
            <span className="text-[10px] text-white/30 w-20 shrink-0">{r.lbl}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/5">
              <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.clr }} />
            </div>
            <span className="text-[10px] font-bold text-white/40 w-6 text-right">{r.pct}%</span>
          </div>
        ))}
      </div>

      {/* AI insight */}
      <div className="bg-[#0EA05B]/8 border border-[#0EA05B]/20 rounded-xl p-3">
        <p className="text-[10px] text-white/45 leading-relaxed">
          <span className="text-[#6ee7b7] font-bold">AI Diagnosis: </span>
          Conversion dropped 3pts — MagicBricks leads not contacted within 4 hrs. Enable auto-call rule to fix.
        </p>
      </div>
    </div>
  );
}

/* ── DATA ───────────────────────────────────────────────────────── */
/*
  HOW TO ADD A NEW GROUP (left pill tab):
    1. Create a Mockup component above (copy any existing one as a template)
    2. Add a new object to the `groups` array below with:
       - id:       unique string
       - label:    text shown on the left pill
       - subTabs:  array of sub-tabs (can have 1 or more)

  HOW TO ADD A SUB-TAB inside an existing group:
    1. Create a Mockup component above
    2. Push a new object into that group's `subTabs` array with:
       - id, title, description, Mockup

  HOW TO REMOVE a group or sub-tab:
    - Just delete the object from the array. Everything else auto-adjusts.

  NOTE: Every sub-tab needs its own Mockup component defined above.
*/

interface SubTab {
  id: string;
  title: string;
  description: string;
  Mockup: React.FC;
}
interface Group {
  id: string;
  label: string;
  subTabs: SubTab[];
}

const groups: Group[] = [
  {
    id: "assistive",
    label: "Assistive AI",
    subTabs: [
      {
        id: "email",
        title: "AI for Emails",
        description:
          "Overton AI can summarise past email threads, proofread your drafts, or generate the entire follow-up email for you — personalised to each lead's journey and property interest.",
        Mockup: EmailComposerMockup,
      },
      {
        id: "summary",
        title: "Smart Summaries",
        description:
          "One click gives your team a full summary of any lead — calls done, visits completed, budget confirmed, last touchpoint — so nobody wastes time searching through history.",
        Mockup: SummaryMockup,
      },
    ],
  },
  {
    id: "agents",
    label: "AI Agents",
    subTabs: [
      {
        id: "qualification",
        title: "Lead Qualification Agent",
        description:
          "The moment a lead enters from 99acres, MagicBricks, or Meta Ads — Overton's AI voice agent makes the first call, qualifies budget & timeline, and hands off a scored lead to your team automatically.",
        Mockup: QualificationMockup,
      },
    ],
  },
  {
    id: "portal",
    label: "Portal AI",
    subTabs: [
      {
        id: "scorer",
        title: "Lead Scorer",
        description:
          "Every lead from 99acres, MagicBricks, and Housing.com is auto-scored the moment it enters your pipeline — so your team always works the highest-probability leads first, not the newest ones.",
        Mockup: LeadScorerMockup,
      },
    ],
  },
  {
    id: "analytics",
    label: "AI Analytics",
    subTabs: [
      {
        id: "report",
        title: "Smart Reports",
        description:
          "Instead of raw numbers, Overton's AI surfaces weekly diagnoses — why conversion dropped, which channel performs best, and exactly what action to take. Auto-generated every Monday without you asking.",
        Mockup: ReportMockup,
      },
    ],
  },
];

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function MeaningfulAISection() {
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const [activeSubIdx,   setActiveSubIdx]   = useState(0);
  const [progKey,        setProgKey]        = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const subCount = groups[activeGroupIdx].subTabs.length;
      if (activeSubIdx + 1 < subCount) {
        setActiveSubIdx(activeSubIdx + 1);
      } else {
        setActiveGroupIdx((gi) => (gi + 1) % groups.length);
        setActiveSubIdx(0);
      }
      setProgKey((k) => k + 1);
    }, INTERVAL_MS);
    return () => clearTimeout(t);
  }, [activeGroupIdx, activeSubIdx]);

  const pickGroup = (gi: number) => {
    setActiveGroupIdx(gi);
    setActiveSubIdx(0);
    setProgKey((k) => k + 1);
  };

  const pickSub = (si: number) => {
    setActiveSubIdx(si);
    setProgKey((k) => k + 1);
  };

  const group  = groups[activeGroupIdx];
  const subTab = group.subTabs[activeSubIdx];
  const { Mockup } = subTab;

  return (
    <section className="py-20 lg:py-28 bg-[#0F1629]" id="meaningful-ai">
      <style>{STYLES}</style>

      <Container>
        {/* ── HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-5 h-0.5 rounded-full bg-[#7C3AED]" />
            Built-In Intelligence
            <span className="w-5 h-0.5 rounded-full bg-[#7C3AED]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold text-white leading-tight tracking-tight mb-4">
            Meaningful AI.{" "}
            <span className="text-[#a78bfa]">Right where you need it.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-6">
            Overton includes a built-in intelligence layer that helps your team reply faster, catch up on leads instantly, and let the repetitive follow-up work run itself.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/15 border border-[#7C3AED]/25 text-[#a78bfa] text-sm font-semibold px-5 py-2.5 rounded-full">
            <Sparkles size={14} />
            No extra tools. No add-ons. Already inside Overton.
          </div>
        </div>

        {/* ── LAYOUT ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[210px_1fr] gap-5 lg:gap-8 items-start">

          {/* LEFT — GROUP TABS */}
          <div className="w-full lg:sticky lg:top-8">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {groups.map((g, gi) => {
                const isActive = gi === activeGroupIdx;
                return (
                  <button
                    key={g.id}
                    onClick={() => pickGroup(gi)}
                    style={{ minWidth: 160 }}
                    className={`shrink-0 lg:shrink lg:w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                      ${isActive
                        ? "bg-white text-[#0F1629] shadow-lg shadow-black/20"
                        : "bg-white/8 text-white/65 border border-white/10 hover:bg-white/12 hover:text-white/80"
                      }`}
                  >
                    {/* Indicator */}
                    {isActive ? (
                      <span className="w-5 h-5 rounded-full bg-[#3D5AF1]/20 border border-[#3D5AF1]/50 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#3D5AF1]" />
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full border border-white/25 flex items-center justify-center shrink-0">
                        <Plus size={9} />
                      </span>
                    )}
                    {g.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — CONTENT BOX */}
          <div
            className="w-full rounded-3xl overflow-hidden border border-[#3D5AF1]/20 shadow-[0_8px_60px_rgba(61,90,241,0.14),0_0_0_1px_rgba(61,90,241,0.06)]"
            style={{ background: "linear-gradient(145deg, rgba(61,90,241,0.07) 0%, #0c1428 60%, #0d152e 100%)" }}
          >
            {/* Sub-tabs bar (only when group has > 1 sub-tab) */}
            {group.subTabs.length > 1 && (
              <div className="flex border-b border-white/8 px-6">
                {group.subTabs.map((st, si) => {
                  const isActive = si === activeSubIdx;
                  return (
                    <button
                      key={st.id}
                      onClick={() => pickSub(si)}
                      className={`relative px-4 py-4 text-sm font-semibold transition-colors duration-200 ${
                        isActive ? "text-white" : "text-white/30 hover:text-white/55"
                      }`}
                    >
                      {st.title}
                      {/* Active underline + progress */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/8 overflow-hidden">
                          <div key={progKey} className="mf-prog h-full bg-white" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* For single-sub-tab groups: progress bar at top of box */}
            {group.subTabs.length === 1 && (
              <div className="h-0.5 w-full bg-white/5 overflow-hidden">
                <div key={progKey} className="mf-prog h-full" style={{ background: "linear-gradient(90deg, #3D5AF1, #7C3AED)" }} />
              </div>
            )}

            {/* Content */}
            <div key={`${activeGroupIdx}-${activeSubIdx}`} className="mf-fade p-6 lg:p-8">
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-2xl">
                {subTab.description}
              </p>
              <Mockup />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
