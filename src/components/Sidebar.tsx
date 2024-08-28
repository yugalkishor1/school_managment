import { title } from "process";
import { FaHome } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaUserCheck } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { PiExamBold } from "react-icons/pi";
import Link from "next/link";

interface Itemtype {
    title:string,
    icon:React.ReactNode,
    route:string
}

const sidebarMenu :Itemtype[] = [
    {
      title: "Home",
      icon: <FaHome/>, 
      route: "/",
    },
    {
      title: "Teachers",
      icon: <GiTeacher/>,
      route: "/teachers",
    },
    {
      title: "Students",
      icon: <PiStudentDuotone/>,
      route: "/students",
    },
    {
      title: "Parents",
      icon: <RiParentFill/>,
      route: "/parents",
    },
    {
      title: "Subjects",
      icon:<FaBook/>,
      route: "/subjects",
    },
    {
      title: "Classes",
      icon: <FaSchool/>,
      route: "/classes",
    },
    {
      title: "Lessons",
      icon: <FaClipboardList/>,
      route: "/lessons",
    },
    {
      title: "Exams",
      icon: <PiExamBold/>,
      route: "/exams",
    },
    {
      title: "Assignments",
      icon: <MdAssignmentAdd/>,
      route: "/assignments",
    },
    {
      title: "Results",
      icon: <FaChartArea/>,
      route: "/results",
    },
    {
      title: "Attendance",
      icon: <FaUserCheck/>,
      route: "/attendance",
    },
    {
      title: "Events",
      icon: <SlCalender/>,
      route: "/events",
    },
    {
      title: "Messages",
      icon: <FaRegMessage/>,
      route: "/messages",
    },
    {
      title: "Announcements",
      icon: <GrAnnounce/>,
      route: "/announcements",
    },
  ];
  
  
  function Sidebar() {
    // return (
    //     <div className=" flex flex-col gap-y-4 md:gap-y-2 ">
    //         {sidebarMenu.map((item)=>( 
    //                 <div key={item.title} className="flex items-center gap-x-2  w-full" >
    //                     <div className="flex-1 min-w-0">
    //                         <Link href={`${item.route}`}>{item.icon}</Link>
    //                     </div>
    //                     <div className=" flex-1 hidden md:block">
    //                         {item.title}
    //                     </div>
    //                 </div>
    //         ))}
    //     </div>
    //   ) 

    return (
        <div className="flex flex-col gap-y-4 md:gap-y-2 text-2xl w-full">
            {sidebarMenu.map((item) => (
                <div key={item.title} className="flex items-center px-4 gap-x-2 w-full">
                    <div className="flex justify-center items-center ">
                        <Link href={item.route}>
                            <div className="w-full flex justify-center items-center gap-x-2">{item.icon}
                                <div className="flex-1 hidden md:block truncate">
                                {item.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      );
  }
  
  export default Sidebar;



