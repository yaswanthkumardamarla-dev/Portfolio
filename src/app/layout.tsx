import type { Metadata } from "next";
import { Playwrite_CA, Mandali, Courier_Prime } from "next/font/google";
import { profile } from "@/lib/data";
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

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
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
      <body className={`${sketchFont.variable} ${nameFont.variable} ${teluguFont.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
