import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// ── PROBLEMS DATA ──
const problems = [
  {
    number: "01",
    heading: "Leads coming from 5 places, tracked in none of them.",
    description:
      "Meta Ads, 99acres, your website, WhatsApp referrals, site walk-ins — all going into different phones and Excel files. By Monday, three of those leads have already spoken to your competitor.",
  },
  {
    number: "02",
    heading: '"I\'ll call them tomorrow" is where deals go to die.',
    description:
      "A buyer who's interested today loses that emotional high within 48 hours if nobody follows up. When your team is juggling 60 leads manually, the hottest ones get forgotten at exactly the wrong moment.",
  },
  {
    number: "03",
    heading: "Your legal team is typing names into PDFs all week.",
    description:
      "Every deal requires KYC documents, RERA agreements, allotment letters. Someone on your team is manually typing the same buyer's name into five templates. On a 100-unit project, that's hundreds of hours.",
  },
  {
    number: "04",
    heading: "You don't know which payments are overdue right now.",
    description:
      "Ask most developers which buyers have missed their construction-stage payment this month. The honest answer involves three Excel files and a 20-minute wait. Stage-wise tracking cannot live in a spreadsheet.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-off">
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Why Indian Real Estate Teams Struggle to Scale"
          heading="Real Estate Lead Management in India Is Broken."
          headingHighlight="Overton Fixes It."
          description="Talk to any sales head at a developer firm or brokerage in India and they'll tell you the same thing. The leads are coming in — but deals keep slipping. The problem isn't effort. It's infrastructure."
          align="center"
        />

        {/* PROBLEM CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((problem) => (
            <ProblemCard key={problem.number} {...problem} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── PROBLEM CARD — Reusable ──
interface ProblemCardProps {
  number: string;
  heading: string;
  description: string;
}

function ProblemCard({ number, heading, description }: ProblemCardProps) {
  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-2xl
        p-7
        border border-border
        hover:border-brand/30
        hover:shadow-[0_8px_32px_rgba(61,90,241,0.08)]
        transition-all duration-300
      "
    >
      {/* NUMBER */}
      <span
        className="
          block
          text-4xl font-extrabold
          text-brand/10
          group-hover:text-brand/20
          font-heading
          transition-colors duration-300
          mb-4
          leading-none
        "
      >
        {number}
      </span>

      {/* HEADING */}
      <h3
        className="
          text-base sm:text-lg
          font-bold
          text-dark
          leading-snug
          mb-3
        "
      >
        {heading}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-muted leading-relaxed">{description}</p>

      {/* HOVER ACCENT LINE — left border effect */}
      <div
        className="
          absolute left-0 top-6 bottom-6
          w-[3px]
          bg-brand
          rounded-full
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />
    </div>
  );
}
