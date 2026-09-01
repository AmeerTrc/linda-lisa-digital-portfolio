import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./demos.css";
import "./photo.css";

const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : "https://linda-lisa-digital-portfolio-production.up.railway.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Unknown",
  description: "Unknown",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: { title: "Unknown", description: "Unknown", url: siteUrl, siteName: "Unknown", type: "website", locale: "pt_BR" },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get("x-site-lang") === "en" ? "en" : "pt-BR";
  return <html lang={lang}><body>{children}</body></html>;
}
