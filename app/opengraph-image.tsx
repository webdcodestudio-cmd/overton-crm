import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Overton CRM — India's #1 AI Real Estate CRM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(145deg, #1a1060 0%, #251680 28%, #3525a8 55%, #0F1629 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GRID OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 60%)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          padding: "0 80px",
        }}
      >
        {/* BADGE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 100,
            padding: "6px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#a78bfa", fontSize: 14, fontWeight: 700 }}>
            ✦ India's Only AI-Powered Real Estate CRM
          </span>
        </div>

        {/* MAIN HEADING */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          Overton CRM
        </div>

        {/* SUB HEADING */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 40,
            letterSpacing: "-0.5px",
          }}
        >
          AI Leads · RERA Docs · 99acres + MagicBricks
        </div>

        {/* FEATURES ROW */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {[
            "🤖 AI Lead Calling",
            "📄 RERA Documents",
            "💬 WhatsApp CRM",
            "📊 Smart Reporting",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: "10px 20px",
                color: "rgba(255,255,255,0.85)",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#3D5AF1",
              borderRadius: 14,
              padding: "14px 32px",
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Start Free for 30 Days →
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
            }}
          >
            overton.in
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
