import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MITSOLPK — Intelligence. Surveillance. Security.",
  description:
    "Multi Innovative Technologies: Authorized Hikvision Partners delivering enterprise-grade CCTV and security solutions for Pakistan's homes and industries.",
  keywords: [
    "CCTV Installation",
    "Security Solutions",
    "Hikvision Pakistan",
    "Surveillance Systems",
    "AI Security",
    "MITSOLPK",
  ],
  openGraph: {
    title: "MITSOLPK — Intelligence. Surveillance. Security.",
    description:
      "Enterprise-grade security solutions by authorized Hikvision partners.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
