import type { Metadata } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hebron Automotive Products | Precision Die Casting & Machining",
  description:
    "IATF 16949 certified manufacturer of aluminium pressure die casting, gravity die casting, precision machining, and powder coating for the automotive industry. Based in Hosur, Tamil Nadu.",
  keywords: [
    "die casting",
    "aluminium die casting",
    "pressure die casting",
    "gravity die casting",
    "precision machining",
    "powder coating",
    "automotive components",
    "IATF 16949",
    "Hosur",
    "Tamil Nadu",
    "Hebron Automotive",
  ],
  openGraph: {
    title: "Hebron Automotive Products | Engineering Excellence",
    description:
      "IATF 16949 certified automotive manufacturing partner specializing in aluminium die casting, machining, and powder coating.",
    type: "website",
    locale: "en_IN",
    siteName: "Hebron Automotive Products Pvt Ltd",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

import { TransitionProvider } from "@/context/TransitionContext";
import PageLoader from "@/components/ui/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TransitionProvider>
          <PageLoader />
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {/* Added the global 400ms fade-in wrapper here */}
          <div className="global-fade-in">
            {children}
            <Footer />
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
