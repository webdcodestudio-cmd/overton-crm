"use client";

import { MessageCircle, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import CalendlyButton from "../ui/CalendlyButton";

const faqs = [
  {
    question: "What is a real estate CRM?",
    answer:
      "A real estate CRM helps developers and brokers manage leads, follow-ups, site visits, inventory, customer communication, and sales pipelines from a single platform.",
  },

  {
    question: "Who should use Overton CRM?",
    answer:
      "Overton CRM is designed for real estate developers, brokers, mandate firms, agencies, and builder sales teams across India.",
  },

  {
    question: "Can I import existing leads into Overton CRM?",
    answer:
      "Yes. Leads can be imported from Excel files, CSV files, and other CRM systems, making migration simple and fast.",
  },

  {
    question: "Can Overton CRM capture leads from Meta Ads?",
    answer:
      "Yes. Leads generated from Facebook and Instagram lead forms can be automatically captured and assigned within the CRM.",
  },

  {
    question: "Can I manage multiple projects in one account?",
    answer:
      "Yes. Overton CRM supports multi-project management, allowing teams to manage inventory, leads, and sales activities across multiple developments.",
  },

  {
    question: "Does Overton CRM include inventory management?",
    answer:
      "Yes. Teams can manage projects, towers, floors, units, availability status, and inventory allocation from a centralized dashboard.",
  },

  {
    question: "Can I track customer payments and dues?",
    answer:
      "Yes. Overton CRM supports stage-wise payment tracking, customer payment schedules, and outstanding balance monitoring.",
  },

  {
    question: "How long does implementation take?",
    answer:
      "Most teams can get started quickly with account setup, project configuration, and lead import assistance provided during onboarding.",
  },

  {
    question: "Is training provided?",
    answer:
      "Yes. Product onboarding and training assistance are available to help teams adopt the platform effectively.",
  },

  {
    question: "Does Overton CRM support mobile access?",
    answer:
      "Yes. Sales teams can access leads, tasks, follow-ups, and project information while working remotely or on-site.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <section
      className="py-20 lg:py-28 bg-[#F8F9FE] border-y border-[#E3E7F4]"
      id="faq"
    >
      <Container>
        {/* 2 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — Sticky Header */}
          <div className="lg:sticky lg:top-24">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#3D5AF1] text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-5 h-0.5 rounded-full bg-[#3D5AF1]" />
              FAQ
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1629] leading-tight tracking-tight mb-4">
              Frequently Asked
              <br />
              <span className="text-[#3D5AF1]">Questions.</span>
            </h2>

            {/* Desc */}
            <p className="text-[#4A5578] text-base leading-relaxed mb-8">
              Everything you need to know about Overton CRM. Can't find your
              answer?
            </p>

            {/* Contact CTA */}
            <div className="bg-white border border-[#E3E7F4] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF1FE] flex items-center justify-center text-base shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#0F1629]">
                    Still have questions?
                  </p>
                  <p className="text-xs text-[#6B7499]">
                    We'll reply within 2 hours
                  </p>
                </div>
              </div>
              <CalendlyButton
                text="Book a Live Demo →"
                className="w-full bg-[#3D5AF1] hover:bg-[#2A3FD9] text-white text-sm font-bold px-5 py-2.5 rounded-xl"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { val: "2hr", label: "Avg reply time" },
                { val: "30 min", label: "Setup time" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-[#E3E7F4] rounded-2xl p-4 text-center"
                >
                  <p className="text-xl font-extrabold text-[#3D5AF1] tracking-tight mb-1">
                    {s.val}
                  </p>
                  <p className="text-xs text-[#6B7499]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── FAQ ITEM ──
interface FAQ {
  question: string;
  answer: string;
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`
        bg-white rounded-2xl border
        transition-all duration-200
        ${
          isOpen
            ? "border-[#3D5AF1]/30 shadow-[0_4px_20px_rgba(61,90,241,0.08)]"
            : "border-[#E3E7F4] hover:border-[#CDD3EC]"
        }
      `}
    >
      {/* QUESTION */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span
          className={`text-sm font-bold leading-snug transition-colors ${
            isOpen ? "text-[#3D5AF1]" : "text-[#0F1629]"
          }`}
        >
          {faq.question}
        </span>

        {/* Toggle Icon */}
        <div
          className={`
            w-7 h-7 rounded-full flex items-center justify-center shrink-0
            transition-all duration-200
            ${
              isOpen
                ? "bg-[#3D5AF1] text-white rotate-45"
                : "bg-[#F1F4FB] text-[#6B7499]"
            }
          `}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {/* ANSWER */}
      {isOpen && (
        <div className="px-6 pb-5">
          <div className="h-px bg-[#E3E7F4] mb-4" />
          <p className="text-sm text-[#4A5578] leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
