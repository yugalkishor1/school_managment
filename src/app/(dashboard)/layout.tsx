
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return ( 
        <div className=" bg-gradient-to-t from-black to-blue-500 h-screen flex "> 
            <div className="w-1/6 bg-green-600">left</div>
            <div className="w-5/6 bg-red-700">right</div>
        </div>       
    );
}
