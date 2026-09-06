export const dynamic = "force-static";
import { ImageResponse } from "next/og";
export const alt = "Issam Chaoui — SEO, GEO et Data web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#101210",
        color: "#f1f3eb",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, color: "#c1f568" }}>
        issam. / SEO · GEO · DATA
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
        <span>La recherche évolue.</span>
        <span style={{ color: "#c1f568" }}>Votre visibilité aussi.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#a2aa9b" }}>
        Med Issam Chaoui · Consultant indépendant
      </div>
    </div>,
    size,
  );
}
