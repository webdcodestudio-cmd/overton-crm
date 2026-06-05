interface SectionHeaderProps {
  eyebrow?: string; // Small text upar — jaise "AI FEATURES"
  eyebrowColor?: "blue" | "ai" | "green";
  heading: string; // Main heading
  headingHighlight?: string; // Blue colored part of heading
  description?: string; // Description neeche
  align?: "center" | "left"; // Center ya left aligned
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  eyebrowColor = "blue",
  heading,
  headingHighlight,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  // Eyebrow color decide karna
  const eyebrowColors = {
    blue: "text-brand",
    ai: "text-ai",
    green: "text-green",
  };

  // Eyebrow line color
  const lineColors = {
    blue: "bg-brand",
    ai: "bg-ai",
    green: "bg-green",
  };

  const isCenter = align === "center";

  return (
    <div
      className={`
        mb-8 sm:mb-12
        ${isCenter ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {/* EYEBROW — Small label upar */}
      {eyebrow && (
        <div
          className={`
            inline-flex items-center gap-2
            text-xs font-bold tracking-widest uppercase
            mb-3
            ${eyebrowColors[eyebrowColor]}
          `}
        >
          <span
            className={`w-5 h-0.5 rounded-full ${lineColors[eyebrowColor]}`}
          />
          {eyebrow}
        </div>
      )}

      {/* MAIN HEADING */}
      <h2
        className={`
          text-3xl sm:text-4xl lg:text-[2.7rem]
          font-extrabold
          text-dark
          leading-tight
          tracking-tight
          mb-4
          ${isCenter ? "mx-auto" : ""}
        `}
      >
        {heading}
        {/* Highlighted part alag line pe */}
        {headingHighlight && (
          <>
            <br />
            <span className="text-brand">{headingHighlight}</span>
          </>
        )}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p
          className={`
            text-base sm:text-lg
            text-slate
            leading-relaxed
            max-w-[640px]
            ${isCenter ? "mx-auto" : ""}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
