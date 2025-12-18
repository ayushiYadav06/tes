



// Version 2 

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import  CustomCursor  from "../components/CustomCursor"


export const metadata: Metadata = {
  metadataBase: new URL("https://teslaindia.co"),
  title: "Tesla Transformers (India) Limited - Power Transformer Manufacturer",
  description:
    "Leading manufacturer of power transformers, distribution transformers, and electrical equipment in India since 1972. Serving utilities, industries, and infrastructure projects.",
  keywords: [
    "power transformers",
    "distribution transformers",
    "electrical equipment",
    "India transformer manufacturer",
    "Tesla Transformers",
    "EHV transformers",
    "dry type transformers",
    "auto transformers"
  ],
  authors: [{ name: "Tesla Transformers (India) Limited" }],
  creator: "Tesla Transformers (India) Limited",
  publisher: "Tesla Transformers (India) Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tesla Transformers (India) Limited - Power Transformer Manufacturer",
    description: "Leading manufacturer of power transformers, distribution transformers, and electrical equipment in India since 1972.",
    url: "/",
    siteName: "Tesla Transformers (India) Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 493,
        height: 259,
        alt: "Tesla Transformers (India) Limited Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla Transformers (India) Limited",
    description: "Leading manufacturer of power transformers, distribution transformers, and electrical equipment in India since 1972.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "493x259", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "493x259", type: "image/png" },
    ],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload important images for faster LCP */}
        <link rel="preload" as="image" href="/plant 3.jpg" />
        <link rel="preload" as="image" href="/plant 2.jpg" />
        <link rel="preload" as="image" href="/plant 1.jpg" />
        <link rel="preload" as="image" href="/airport.jpg" />
        <link rel="preload" as="image" href="/industrial-electrical-manufacturing-facility.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CustomCursor /> {/* Add this line */}
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>

  )
}
