import {
  Phone,
  Mail,
  Table2,
  FileSpreadsheet,
  Smartphone,
  Target,
  Zap,
  Bot,
  Link2,
  ArrowRight,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const integrations: Integration[] = [
  {
    type: "logo",
    logo: "/images/integrations/99acres.jpg",
    name: "99acres",
    desc: "Lead capture",
    color: "bg-white",
    border: "hover:border-[#E8411E]/30",
  },
  {
    type: "logo",
    logo: "/images/integrations/magicbricks.jpg",
    name: "MagicBricks",
    desc: "Lead capture",
    color: "bg-white",
    border: "hover:border-[#E8001C]/30",
  },
  {
    type: "logo",
    logo: "/images/integrations/Housing.jpg",
    name: "Housing.com",
    desc: "Lead capture",
    color: "bg-white",
    border: "hover:border-[#0066FF]/30",
  },
  {
    type: "icon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#1877f2"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
        />
      </svg>
    ),
    name: "Meta Ads",
    desc: "Lead capture",
    color: "bg-[#EEF1FE]",
    border: "hover:border-[#3D5AF1]/30",
  },
  {
    type: "icon",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 250.9 312.8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.9 28.6c2.4-6.3 5.7-12.1 10.6-16.8 19.6-19.1 52-14.3 65.3 9.7 10 18.2 20.6 36 30.9 54l51.6 89.8c14.3 25.1-1.2 56.8-29.6 61.1-17.4 2.6-33.7-5.4-42.7-21l-45.4-78.8c-.3-.6-.7-1.1-1.1-1.6-1.6-1.3-2.3-3.2-3.3-4.9L88.8 62.2c-3.9-6.8-5.7-14.2-5.5-22 .3-4 .8-8 2.6-11.6"
          fill="#3c8bd9"
        />

        <path
          d="M85.9 28.6c-.9 3.6-1.7 7.2-1.9 11-.3 8.4 1.8 16.2 6 23.5l32.9 56.9c1 1.7 1.8 3.4 2.8 5l-18.1 31.1-25.3 43.6c-.4 0-.5-.2-.6-.5-.1-.8.2-1.5.4-2.3 4.1-15 .7-28.3-9.6-39.7-6.3-6.9-14.3-10.8-23.5-12.1-12-1.7-22.6 1.4-32.1 8.9-1.7 1.3-2.8 3.2-4.8 4.2-.4 0-.6-.2-.7-.5l14.3-24.9L85.2 29.7c.2-.4.5-.7.7-1.1"
          fill="#fbbc05"
        />

        <path
          d="M11.8 158l5.7-5.1c24.3-19.2 60.8-5.3 66.1 25.1 1.3 7.3.6 14.3-1.6 21.3-.1.6-.2 1.1-.4 1.7-.9 1.6-1.7 3.3-2.7 4.9-8.9 14.7-22 22-39.2 20.9C20 225.4 4.5 210.6 1.8 191c-1.3-9.5.6-18.4 5.5-26.6 1-1.8 2.2-3.4 3.3-5.2"
          fill="#34a853"
        />
      </svg>
    ),
    name: "Google Ads",
    desc: "Lead capture",
    color: "bg-[#FEF9C3]",
    border: "hover:border-[#EAB308]/30",
  },
  {
    type: "icon",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
    name: "WhatsApp",
    desc: "Communication",
    color: "bg-[#F0FDF4]",
    border: "hover:border-[#22C55E]/30",
  },
  {
    type: "icon",
    icon: <Phone size={20} />,
    name: "IVR System",
    desc: "Calling",
    color: "bg-[#EEF1FE]",
    border: "hover:border-[#3D5AF1]/30",
  },
  {
    type: "icon",
    icon: <Mail size={20} />,
    name: "Email",
    desc: "Communication",
    color: "bg-[#FFF7ED]",
    border: "hover:border-[#F97316]/30",
  },
  {
    type: "icon",
    icon: <Table2 size={20} />,
    name: "Google Sheets",
    desc: "Import/Export",
    color: "bg-[#F0FDF4]",
    border: "hover:border-[#22C55E]/30",
  },
  {
    type: "icon",
    icon: <FileSpreadsheet size={20} />,
    name: "Excel / CSV",
    desc: "Import/Export",
    color: "bg-[#EFF6FF]",
    border: "hover:border-[#3B82F6]/30",
  },
  {
    type: "icon",
    icon: <Globe size={20} />,
    name: "Website Form",
    desc: "Lead capture",
    color: "bg-[#F3EFFE]",
    border: "hover:border-[#7C3AED]/30",
  },
  {
    type: "icon",
    icon: <Smartphone size={20} />,
    name: "Mobile App",
    desc: "iOS + Android",
    color: "bg-[#EEF1FE]",
    border: "hover:border-[#3D5AF1]/30",
  },
];

// ── FLOW STEPS ──
const flowSteps = [
  {
    icon: <Link2 size={16} />,
    label: "Lead Source",
    desc: "99acres / Meta / Website",
  },
  {
    icon: <Zap size={16} />,
    label: "Auto-Capture",
    desc: "Instant pipeline entry",
  },
  {
    icon: <Bot size={16} />,
    label: "AI Qualifies",
    desc: "Score + priority assign",
  },
  {
    icon: <Target size={16} />,
    label: "Team Acts",
    desc: "Call → Visit → Close",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="integrations">
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Integrations"
          heading="Works With Every Tool Your Team Already Uses."
          headingHighlight="No Manual Work. Ever."
          description="Overton connects directly with Indian property portals, Meta Ads, WhatsApp, and your website — leads flow in automatically from the moment you connect."
          align="center"
        />

        {/* FLOW BAR */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 flex-wrap">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              {/* Step */}
              <div className="flex items-center gap-2.5 bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl px-4 py-3">
                <span className="flex items-center text-[#3D5AF1]">
                  {step.icon}
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[#0F1629] leading-none mb-0.5">
                    {step.label}
                  </p>
                  <p className="text-[11px] text-[#6B7499]">{step.desc}</p>
                </div>
              </div>
              {/* Arrow */}
              {i < flowSteps.length - 1 && (
                <svg
                  className="w-4 h-4 text-[#CDD3EC] shrink-0 hidden sm:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* INTEGRATIONS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {integrations.map((item) => (
            <IntegrationCard key={item.name} item={item} />
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {/* Avatars row */}
            <div className="flex -space-x-2">
              {["#3D5AF1", "#7C3AED", "#0EA05B", "#F97316"].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: color }}
                >
                  {["99", "MB", "WA", "M"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#0F1629]">
                All your lead sources. One pipeline.
              </p>
              <p className="text-xs text-[#6B7499] mt-0.5">
                Connect in under 5 minutes — no developer needed.
              </p>
            </div>
          </div>
          <a
            href=""
            className="flex items-center gap-2.5 shrink-0 bg-[#3D5AF1] hover:bg-[#2A3FD9] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(61,90,241,0.35)] hover:-translate-y-0.5"
          >
            Connect Your Sources <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}

// ── INTEGRATION CARD ──
interface Integration {
  type: "logo" | "icon";
  logo?: string;
  icon?: React.ReactNode;
  name: string;
  desc: string;
  color: string;
  border: string;
}

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <div
      className={`
        group
        bg-white
        border border-[#E3E7F4]
        ${item.border}
        hover:shadow-[0_4px_20px_rgba(61,90,241,0.08)]
        rounded-2xl
        p-4
        flex flex-col
        items-center
        text-center
        transition-all duration-200
        hover:-translate-y-0.5
        cursor-default
      `}
    >
      {/* Icon */}
      {item.type === "logo" ? (
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white border border-[#E3E7F4] p-1.5">
          <Image
            src={item.logo!}
            alt={item.name}
            width={22}
            height={22}
            className="object-contain rounded-xl w-full h-full "
          />
        </div>
      ) : (
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}
        >
          {item.icon}
        </div>
      )}
      {/* Name */}
      <p className="text-xs font-extrabold text-[#0F1629] mb-1">{item.name}</p>
      {/* Desc */}
      <p className="text-[11px] text-[#6B7499]">{item.desc}</p>
    </div>
  );
}
