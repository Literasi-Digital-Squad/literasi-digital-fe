'use client'
import Footer from "@/components/admin/Footer";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import Statitik from "@/components/admin/dashboard/Statistik";
export default function Dashboard() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const path = parts[parts.length - 1];
    return (
        <div className="w-screen h-screen font-poppins flex">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <Statitik />
                <Footer />
            </div>
        </div>
    );
}