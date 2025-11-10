import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Linux Box - Alternatywa dla Raspberry Pi",
  description:
    "Twój kompaktowy domowy serwer Ubuntu. Gotowy do pracy od razu po wyjęciu z pudełka. Tylko 199 zł!",
  keywords: [
    "Raspberry Pi",
    "alternatywa dla Raspberry Pi",
    "Home Assistant",
    "serwer domowy",
    "Ubuntu",
    "Docker",
    "Amlogic S905X3",
    "Mini PC",
    "CoreELEC",
    "Batocera",
    "Domoticz",
    "SUPLA",
    "OpenHAB",
    "Pi-hole",
    "Nextcloud",
    "self-hosting",
    "tani serwer",
    "kompaktowy serwer",
    "serwer multimedialny",
    "konsola retro",
  ],
  authors: [{ name: "Linux Box" }],
  openGraph: {
    title: "Linux Box - Alternatywa dla Raspberry Pi",
    description:
      "Twój kompaktowy domowy serwer Ubuntu. Gotowy do pracy od razu po wyjęciu z pudełka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
