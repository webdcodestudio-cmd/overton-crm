import { Calendar, ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import CalendlyButton from "../ui/CalendlyButton";

const trustPoints = [
  "Free for 30 days",
  "No credit card required",
  "Setup in 30 minutes",
  "Onboarding support included",
  "Cancel anytime",
];

export default function CTASection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0F1629]"
      id="cta"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(61,90,241,0.18)_0%,transparent_65%)]" />
        {/* Top right purple */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_65%)]" />
        {/* Bottom left blue */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle,rgba(61,90,241,0.12)_0%,transparent_65%)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D5AF1]/50 to-transparent" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D5AF1]/30 to-transparent" />
      </div>

      <Container>
        <div className="relative flex flex-col items-center text-center">
          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#3D5AF1]/15 border border-[#3D5AF1]/30 text-[#93a8f4] text-xs font-bold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93a8f4] animate-pulse" />
            India's #1 AI-Powered Real Estate CRM — Free Trial Active
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-4xl">
            The Best Real Estate CRM in India.
            <br />
            <span className="text-[#93a8f4]">Try It Free for 30 Days.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            Built for modern real estate developers and brokers. Overton CRM
            automates lead qualification with AI, generates RERA documents
            instantly, and connects seamlessly with 99acres and MagicBricks.
            Streamline your sales process, close deals faster, and start free
            today.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <Link
              href=""
              className="
                group relative
                inline-flex items-center gap-2
                bg-[#3D5AF1] hover:bg-[#2A3FD9]
                text-white text-base font-bold
                px-8 py-4 rounded-2xl
                transition-all duration-200
                shadow-[0_0_30px_rgba(61,90,241,0.45)]
                hover:shadow-[0_0_50px_rgba(61,90,241,0.6)]
                hover:-translate-y-0.5
              "
            >
              Start Free for 30 Days
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <CalendlyButton
              text="Book a Live Demo →"
              className="inline-flex items-center gap-2
                bg-white/[0.07] hover:bg-white/[0.12]
                border border-white/15 hover:border-white/25
                text-white/80 hover:text-white
                text-base font-semibold
                px-8 py-4 rounded-2xl
                transition-all duration-200"
            />
          </div>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-14">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-1.5 text-white/40 text-sm"
              >
                <Check
                  className="w-3.5 h-3.5 text-[#0EA05B] shrink-0"
                  size={18}
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
