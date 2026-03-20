import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iampandit.in"),
  title: {
    default: "Pandit Pawar | Fullstack Developer",
    template: "%s | Pandit Pawar",
  },
  description:
    "Fullstack developer focused on scalable systems, practical engineering, and reliable products.",
  openGraph: {
    title: "Pandit Pawar | Fullstack Developer",
    description:
      "Fullstack developer focused on scalable systems, practical engineering, and reliable products.",
    type: "website",
    url: "https://iampandit.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit Pawar | Fullstack Developer",
    description:
      "Fullstack developer focused on scalable systems, practical engineering, and reliable products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(GeistMono.className)}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body className="text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Header />
          <main className="mx-auto mt-6 mb-12 max-w-3xl px-4 sm:px-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
