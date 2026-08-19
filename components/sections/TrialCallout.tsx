import { Clock12Icon } from "lucide-react";
import Container from "@/components/ui/Container";
import TrialButton from "@/components/ui/TrialButton";

export default function TrialCallout() {
  return (
    <div className="w-full z-999 fixed bottom-0 overflow-hidden bg-[#0f1629] py-4 border-y border-white/10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(99,102,241,0.08)_50%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D5AF1]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D5AF1]/60 to-transparent" />
      </div>

      <Container>
        <div className="hidden md:flex relative items-center justify-between gap-4">
          {/* LEFT — Badge + Offer */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            {/* Live Badge */}
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5 shrink-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-green-400 text-xs font-bold tracking-wide uppercase">
                Live Offer
              </span>
            </div>

            {/* Offer Text */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
              <span className="text-white font-bold text-sm">Overton CRM</span>
              <span className="text-white/40 text-sm hidden sm:inline">—</span>
              <span className="text-green-400 font-extrabold text-sm">
                30 Days FREE
              </span>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                No Credit Card
              </span>
              <span className="text-white/50 text-xs sm:text-sm">
                · ₹599/mo after
              </span>
            </div>
          </div>

          {/* RIGHT — CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <p className="text-white text-xs hidden md:flex gap-2 items-center">
              <Clock12Icon size={12} className="shrink-0" />
              Limited slots this month
            </p>
            <TrialButton
              className="inline-flex items-center gap-2 bg-[#3D5AF1] hover:bg-[#2A3FD9] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap 
               relative overflow-hidden animate-glow"
            >
              Start Free Now →
            </TrialButton>
          </div>
        </div>

        {/* MOBILE STICKY BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f1629] border-t border-white/10 px-4 py-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-green-400 text-xs font-bold">30 Days FREE</p>
              <p className="text-white/60 text-[11px]">
                No Credit Card Required
              </p>
            </div>

            <a
              href="https://crm.overton.in/#/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3D5AF1] text-white text-xs font-bold px-4 py-2 rounded-lg whitespace-nowrap animate-glow"
            >
              Start Free →
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
