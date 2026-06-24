import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collective Audience — The Open Web Platform",
  description:
    "Collective Audience unifies media monetization, audience data, and advertising into one open platform — cookieless, scalable, and built for the open web.",
  openGraph: {
    title: "Collective Audience — The Open Web Platform",
    description:
      "Unify media monetization, audience data, and advertising into one open platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ca-dark text-ca-text">
        {children}
      </body>
    </html>
  );
}
