import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AutomateQ — AI & Automation Tools for Everyone",
    template: "%s | AutomateQ",
  },
  description:
    "Free and affordable AI automation tools for beginners and everyday users. No PhD required.",
  metadataBase: new URL("https://automateq.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automateq.io",
    siteName: "AutomateQ",
    title: "AutomateQ — AI & Automation Tools for Everyone",
    description:
      "Free and affordable AI automation tools for beginners and everyday users. No PhD required.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateQ — AI & Automation Tools for Everyone",
    description:
      "Free and affordable AI automation tools for beginners and everyday users. No PhD required.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
