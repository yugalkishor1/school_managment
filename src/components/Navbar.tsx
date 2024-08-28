import { FaUserCircle } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

function Navbar() {
  return (
    <div className='m-2 flex  items-center justify-end  gap-x-4 md:justify-between '>
        <input type="text" placeholder='Search.......'  className='rounded-full text-sm bg-gray-200  p-1 hidden md:block ring-2 ring-gray-500 outline-none'/>
        <div className="text-2xl flex gap-x-2 justify-center items-center ">
            <Link href={"/messages"}><FaRegMessage/></Link>
            
            <div className="relative">
                <Link href={"/announcements"}><GrAnnounce/></Link>
                <div className="absolute -top-4 -right-3 w-5 h-5 flex items-center justify-center bg-purple-600 rounded-full text-xs text-white">1</div>
            </div>
            
            <div className="flex flex-col text-xl mx-4 items-start  leading-3 font-medium">
                username
                <div className="text-sm text-gray-500">userRole</div>
            </div>
            <Link href={"/user"}><FaUserCircle/></Link>
        </div>
    </div>
  )
}

export default Navbar