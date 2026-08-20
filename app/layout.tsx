import type {Metadata} from "next";
import "./globals.css";
import "./demos.css";
import "./photo.css";
export const metadata:Metadata={
 metadataBase:new URL("https://www.nicoletrc.com"),
 title:"NicoleTrc — Client Relations & Business Development",
 description:"Nicole Costa supports client relations and business development at AmeerTrc in São Paulo.",
 alternates:{canonical:"/"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph:{
  title:"NicoleTrc — Client Relations & Business Development",
  description:"Nicole Costa supports client relations and business development at AmeerTrc in São Paulo.",
  url:"https://www.nicoletrc.com",
  siteName:"NicoleTrc",
  type:"website",
  locale:"pt_BR"
 },
 icons:{icon:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%23060807%22/><text x=%2210%22 y=%2245%22 font-size=%2240%22 fill=%22%2345e36b%22>N</text></svg>"}
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
