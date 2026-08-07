"use client";

import Image from "next/image";

export default function ScratchPage() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Box Pro Images Preview</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
          <h3>1.jpg</h3>
          <img src="/box-pro/1.jpg" alt="1" style={{ maxWidth: "300px", height: "auto" }} />
        </div>
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
          <h3>23304_1_kwadrat.webp</h3>
          <img src="/box-pro/23304_1_kwadrat.webp" alt="2" style={{ maxWidth: "300px", height: "auto" }} />
        </div>
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
          <h3>ai-speaker-bramka-aiot-z-asystentem-glosowym-ais-pro-1.webp</h3>
          <img src="/box-pro/ai-speaker-bramka-aiot-z-asystentem-glosowym-ais-pro-1.webp" alt="3" style={{ maxWidth: "300px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}
