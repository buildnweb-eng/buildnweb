import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import BackToTop from "@/components/ui/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BuildnWeb - Launch Revenue-Driving Websites in 7 Days | ROI Guaranteed",
  description:
    "Launch high-converting websites in 7 days. We engineer revenue-driving digital experiences for SaaS, e-commerce, and service businesses. Guaranteed results or your money back.",
  keywords:
    "7 day website launch, ROI driven development, SaaS website development, conversion optimization, revenue focused web design, guaranteed results, BuildnWeb",
  authors: [{ name: "Buildnweb" }],
  creator: "Buildnweb",
  publisher: "Buildnweb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://buildnweb.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BuildnWeb - Launch Revenue-Driving Websites in 7 Days",
    description:
      "We engineer high-converting digital experiences that drive measurable revenue growth. 7-day launch guarantee.",
    url: "https://buildnweb.in",
    siteName: "BuildnWeb - ROI-Driven Development Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buildnweb - Professional Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildnWeb - Launch Revenue-Driving Websites in 7 Days",
    description:
      "High-converting websites engineered for revenue growth. 7-day launch guarantee. Measurable ROI.",
    images: ["/twitter-image.jpg"],
    creator: "@Buildnwebagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics measurementId="G-Z9EMS79RND" />
        <StructuredData />
        <ThemeProvider>
          <ToastProvider>
            {children}
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
