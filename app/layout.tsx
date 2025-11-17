import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Chivo,
  Chivo_Mono,
  IBM_Plex_Mono,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Pandit Pawar",
  description:
    "A modern minimal cool looking portfolio website built with Next.js and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Pandit" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrains.variable} ${chivo.variable} ${chivoMono.variable} ${ibmPlexMono.variable} dark text-primary-foreground/80 font-mono antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
