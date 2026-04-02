export default function Container({ children, className = "" }) {
  return (
    <div
      className={className}
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 clamp(1.2rem, 4vw, 2.5rem)",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}