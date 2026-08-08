import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = "Gizakura — the studio behind Resumurai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(145deg, #f9e9e5 0%, #f2c8cf 42%, #e88996 100%)",
          color: "#1a1917",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#5c5652",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background: "#c45c6a",
            }}
          />
          Studio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              fontFamily: "Georgia, serif",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 820,
              color: "#3d3834",
            }}
          >
            {site.heroLine}
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6d6561",
          }}
        >
          gizakura.com
        </div>
      </div>
    ),
    { ...size },
  );
}
