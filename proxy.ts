import {NextRequest,NextResponse} from "next/server";
export function proxy(request:NextRequest){
 const requestHeaders=new Headers(request.headers);
 requestHeaders.set("x-site-lang",request.nextUrl.pathname.startsWith("/en")?"en":"pt-BR");
 return NextResponse.next({request:{headers:requestHeaders}});
}
export const config={matcher:["/pt/:path*","/en/:path*"]};
