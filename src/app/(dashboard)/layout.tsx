import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return ( 
        <div className="  h-screen flex"> 
            <div className="w-[10%]  md:w-[15%] flex  flex-col items-center gap-x-4 m-4 gap-y-8 ">
                <div>
                    <Link href={"/"} className="flex gap-2  justify-center items-center border h-full w-full">
                        <Image 
                            src={"/school-image.jpg"}
                            height={32}
                            width={32}
                            alt="shcoolimage"
                            className="rounded-full h-8 v-8"
                        />                      
                        <p className="text-2xl hidden md:block">logo</p>
                    </Link>
                </div>
                <Sidebar/>
            </div>
            <div className="w-[90%] md:w-[85%]  overflow-scroll ">
                <Navbar/>
                {children}
            </div>
        </div>      
        
    );
}
