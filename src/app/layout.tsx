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
  title: "TechCraft Agency - Web, Mobile & Desktop Development",
  description: "Professional web development agency specializing in web applications, Android apps, desktop applications, and college projects. Transform your ideas into powerful digital solutions.",
  keywords: "web development, mobile apps, android development, desktop applications, college projects, react, next.js, full stack development",
  authors: [{ name: "TechCraft Agency" }],
  creator: "TechCraft Agency",
  publisher: "TechCraft Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techcraftagency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TechCraft Agency - Digital Solutions That Drive Results',
    description: 'Transform your ideas into powerful digital solutions with our expert development services.',
    url: 'https://techcraftagency.com',
    siteName: 'TechCraft Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechCraft Agency - Professional Web Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechCraft Agency - Web, Mobile & Desktop Development',
    description: 'Professional development services for web, mobile, and desktop applications',
    images: ['/twitter-image.jpg'],
    creator: '@techcraftagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
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
