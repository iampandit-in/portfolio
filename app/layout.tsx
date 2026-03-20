import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const geistMonoHeading = Geist_Mono({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const mono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iampandit.in"),
  title: {
    default: "Pandit Pawar | Backend Developer",
    template: "%s | Pandit Pawar",
  },
  description:
    "Backend developer focused on scalable systems, practical engineering, and reliable products.",
  openGraph: {
    title: "Pandit Pawar | Backend Developer",
    description:
      "Backend developer focused on scalable systems, practical engineering, and reliable products.",
    type: "website",
    url: "https://iampandit.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit Pawar | Backend Developer",
    description:
      "Backend developer focused on scalable systems, practical engineering, and reliable products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable, geistMonoHeading.variable)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Header />
          <main className="mx-auto mt-24 mb-16 max-w-4xl px-4 sm:px-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
