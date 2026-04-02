// Reusable eyebrow badge — har section mein use hoga
// Props kya hain? Parent component se data receive karne ka tarika!
export default function SectionBadge({ text, dark = false }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: dark ? "rgba(255,255,255,0.12)" : "#eef1fe",
        color: dark ? "#ffffff" : "#3e68ff",
        fontSize: "0.68rem",
        fontWeight: 700,
        padding: "5px 14px",
        borderRadius: "100px",
        marginBottom: "20px",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontFamily: "var(--font-instrument)",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          background: dark ? "white" : "#3e68ff",
          borderRadius: "50%",
          display: "inline-block",
          flexShrink: 0,
        }}
      ></span>
      {text}
    </div>
  );
}