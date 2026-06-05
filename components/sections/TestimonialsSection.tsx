import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Within a week of Overton, we could see every single lead, where it came from, and who was following up. We closed 4 deals in the first month we couldn't have tracked before.",
    name: "Rajesh Patel",
    role: "Sales Head",
    company: "Patel Developers, Ahmedabad",
    initials: "RP",
    avatarBg: "#3D5AF1",
    rating: 5,
  },
  {
    quote:
      "The RERA-compliant document generation alone paid for the entire year's subscription. Our legal team was spending 3-4 hours per deal. Now it takes 45 seconds.",
    name: "Sunita Mehta",
    role: "Director",
    company: "Mehta Realty, Mumbai",
    initials: "SM",
    avatarBg: "#7C3AED",
    rating: 5,
  },
  {
    quote:
      "I manage 12 brokers across two offices. Before Overton, I genuinely didn't know what my team was doing until a deal was either won or lost. Now I see every lead, every follow-up, every stage.",
    name: "Ankit Joshi",
    role: "Managing Director",
    company: "Joshi Properties, Surat",
    initials: "AJ",
    avatarBg: "#0EA05B",
    rating: 5,
  },
  {
    quote:
      "The AI priority list changed everything. My team used to start the day asking 'who do I call?' Now Overton tells them exactly — with reasons. Conversion went up 40% in 2 months.",
    name: "Priya Shah",
    role: "Broker Owner",
    company: "Shah & Associates, Pune",
    initials: "PS",
    avatarBg: "#F97316",
    rating: 5,
  },
  {
    quote:
      "99acres leads used to sit uncontacted for 2-3 days. With Overton's AI calling, they're qualified within minutes. Our cost per qualified lead dropped by half.",
    name: "Kiran Desai",
    role: "Marketing Head",
    company: "Desai Constructions, Baroda",
    initials: "KD",
    avatarBg: "#0891B2",
    rating: 5,
  },
  {
    quote:
      "Setup took 25 minutes. I connected Meta Ads, 99acres, and our website form — all leads flowing in automatically by end of day one. No IT team, no consultant.",
    name: "Mohit Agarwal",
    role: "Co-Founder",
    company: "Agarwal Homes, Jaipur",
    initials: "MA",
    avatarBg: "#D97706",
    rating: 5,
  },
];

// ── STATS ──
const stats = [
  { value: "500+", label: "Developers & Brokers" },
  { value: "4.8", label: "Average Rating" },
  { value: "127", label: "Verified Reviews" },
  { value: "40%", label: "Avg Conversion Lift" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="testimonials">
      <Container>
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Testimonials"
          heading="500+ Real Estate Teams Trust Overton."
          headingHighlight="Here's What They Say."
          description="From individual brokers to large developer firms across India — real results, real teams, real numbers."
          align="center"
        />

        {/* STATS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-extrabold text-[#3D5AF1] font-heading mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#6B7499] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* BOTTOM TRUST NOTE */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#F8F9FE] border border-[#E3E7F4] rounded-2xl px-6 py-3">
            <div className="flex -space-x-2">
              {["#3D5AF1", "#7C3AED", "#0EA05B", "#F97316", "#0891B2"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white"
                    style={{ background: color }}
                  />
                ),
              )}
            </div>
            <p className="text-sm text-[#4A5578]">
              Joined by{" "}
              <span className="font-bold text-[#0F1629]">500+ teams</span>{" "}
              across India this year
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── TESTIMONIAL CARD ──
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="
      break-inside-avoid
      bg-white
      border border-[#E3E7F4]
      hover:border-[#3D5AF1]/25
      hover:shadow-[0_8px_32px_rgba(61,90,241,0.08)]
      rounded-3xl
      p-7
      transition-all duration-300
      mb-5
    "
    >
      {/* STARS */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-[#F59E0B]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* QUOTE */}
      <p className="text-sm text-[#4A5578] leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>

      {/* AUTHOR */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: testimonial.avatarBg }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-extrabold text-[#0F1629]">
            {testimonial.name}
          </p>
          <p className="text-xs text-[#6B7499]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
