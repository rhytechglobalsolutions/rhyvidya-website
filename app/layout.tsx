import type { Metadata, Viewport } from "next";
import { Lora, Plus_Jakarta_Sans, Noto_Sans_Devanagari, Noto_Sans_Tamil } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE } from "./data";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600"],
  variable: "--font-hindi",
});
const tamil = Noto_Sans_Tamil({ subsets: ["tamil"], weight: ["500", "600"], variable: "--font-tamil" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RhyVidya — Learn Live with Expert Teachers",
    template: "%s | RhyVidya",
  },
  description:
    "Learn live online with experienced teachers across many subjects — starting with Hindi by Saraswathi; Tamil, Physics, and Mathematics coming next. First month free.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "RhyVidya",
    url: SITE.url + "/",
    title: "RhyVidya — Learn Live with Expert Teachers",
    description:
      "Learn live online with experienced teachers across many subjects — starting with Hindi by Saraswathi; Tamil, Physics, and Mathematics coming next. First month free.",
    images: [
      {
        url: SITE.logo,
        width: 1600,
        height: 1600,
        alt: SITE.logoAlt,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RhyVidya — Learn Live with Expert Teachers",
    description:
      "Learn live online with experienced teachers across many subjects — starting with Hindi by Saraswathi; Tamil, Physics, and Mathematics coming next. First month free.",
    images: [SITE.logo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jakarta.variable} ${devanagari.variable} ${tamil.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
