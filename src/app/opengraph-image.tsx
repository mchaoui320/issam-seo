export const dynamic = "force-static";
import { ImageResponse } from "next/og";
export const alt = "MIC SIGNAL — SEO, GEO, LLMO et Data web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(circle at 80% 10%, #30267a 0, #070812 45%, #04050a 100%)",
        color: "#f5f7ff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, color: "#00e5ff" }}>
        MIC SIGNAL / ORGANIC SEARCH INTELLIGENCE
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        <span>Devenez la marque</span>
        <span style={{ color: "#9b83ff" }}>que les moteurs recommandent.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#929ab2" }}>
        SEO · GEO / LLMO · LOCAL · DATA
      </div>
    </div>,
    size,
  );
}
