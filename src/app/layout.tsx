import type { Metadata } from "next";
import { Playwrite_CA, Mandali, Courier_Prime, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sketchFont = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sketch",
});

const nameFont = Playwrite_CA({
  variable: "--font-name",
});

const teluguFont = Mandali({
  weight: "400",
  subsets: ["telugu"],
  variable: "--font-telugu",
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
};

// Applies the saved theme before first paint to avoid a flash.
const themeInitScript = `
try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${sketchFont.variable} ${nameFont.variable} ${teluguFont.variable} ${bodyFont.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
