"use client";
import Link from "next/link";
import logo from "../../public/assets/go.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const router = usePathname();

  return (
    <div className="w-[240px] bg-white fixed left-0 px-4 h-full border-r shadow-lg text-gray-500">
      <div className="w-full justify-center flex pt-10">
        <Image src={logo} height={100} width={100} alt="logo" />
      </div>
      <nav className="mt-10">
        <ul className="space-y-2">
          <Link href="/">
            {" "}
            <li
              className={`px-4 py-2 rounded-[40px] transition-all duration-300 cursor-pointer mb-2 ${
                router === "/"
                  ? "bg-[#a72036] text-white"
                  : "hover:bg-[#a72036] hover:text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/food">
            {" "}
            <li
              className={`px-4 py-2 rounded-[40px] transition-all duration-300 cursor-pointer mb-2 ${
                router === "/food"
                  ? "bg-[#a72036] text-white"
                  : "hover:bg-[#a72036] hover:text-white"
              }`}
            >
              Food
            </li>
          </Link>
          <Link href="/notification">
            {" "}
            <li
              className={`px-4 py-2 rounded-[40px] transition-all duration-300 cursor-pointer mb-2 ${
                router === "/notification"
                  ? "bg-[#a72036] text-white"
                  : "hover:bg-[#a72036] hover:text-white"
              }`}
            >
              Notification
            </li>
          </Link>
          <Link href="/order">
            {" "}
            <li
              className={`px-4 py-2 rounded-[40px] transition-all duration-300 cursor-pointer mb-2 ${
                router === "/order"
                  ? "bg-[#a72036] text-white"
                  : "hover:bg-[#a72036] hover:text-white"
              }`}
            >
              Order
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
