import type {Metadata} from "next";
import {headers} from "next/headers";
import "./globals.css";
import "./demos.css";
import "./photo.css";
const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : "https://linda-lisa-digital-portfolio-production.up.railway.app";
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:"Linda Lisa — Client Relations & Business Development",
 description:"Linda Lisa supports client relations and business development at AmeerTrc in São Paulo.",
 alternates:{canonical:"/"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph:{
  title:"Linda Lisa — Client Relations & Business Development",
  description:"Linda Lisa supports client relations and business development at AmeerTrc in São Paulo.",
  url:siteUrl,
  siteName:"Linda Lisa",
  type:"website",
  locale:"pt_BR"
 },
 icons:{icon:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%23060807%22/><text x=%2210%22 y=%2245%22 font-size=%2240%22 fill=%22%2345e36b%22>L</text></svg>"}
};
export default async function Layout({children}:{children:React.ReactNode}){const h=await headers();const lang=h.get("x-site-lang")==="en"?"en":"pt-BR";return <html lang={lang}><body>{children}</body></html>}
