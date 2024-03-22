import React, { Suspense } from "react";
import { Metadata, Viewport } from "next";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import "@turbocharger/ui/styles/shared-globals.css";
import { cn } from "@turbocharger/utils";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { display, inter } from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Providers } from "./providers";

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `%s | ${config.name}` },
  description: config.description,
  keywords: config.keywords,
  authors: config.authors,
  creator: config.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: config.description,
    siteName: config.name,
    images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [config.thumbnail],
    creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, display.variable)} suppressHydrationWarning>
        <Providers>
          <Analytics />
          <div className="relative">
            <Banner />
            <Suspense fallback={<div className="h-[64px]" />}>
              <Header />
            </Suspense>
            <div className="min-h-[calc(100vh-64px)] pb-36">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

const BackgroundTop = () => {
  return (
    <div className="absolute -top-20 z-[-1] h-[calc(100vh+162px)] w-full object-cover opacity-60 md:h-[calc(100vh+120px)]">
      <Image fill src="/images/hero.png" alt="hero" />
    </div>
  );
};

const BackgroundBottom = () => {
  return (
    <img
      src="/images/cta.png"
      alt="background"
      className="absolute bottom-[-50px] z-[-1] opacity-20"
      loading="lazy"
    />
  );
};
