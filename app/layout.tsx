import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={
 title:"NicoleTrc — Client Relations & Business Development",
 description:"Nicole Costa supports client relations and business development at AmeerTrc in São Paulo.",
 robots:{index:false,follow:false,nocache:true,googleBot:{index:false,follow:false,noimageindex:true}},
 icons:{icon:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%23060807%22/><text x=%2210%22 y=%2245%22 font-size=%2240%22 fill=%22%2345e36b%22>N</text></svg>"}
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
