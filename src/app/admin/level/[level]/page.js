'use client'
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/admin/Footer";
import { usePathname } from "next/navigation";
import EditLevel from "@/components/admin/level/EditLevel";
export default function Level() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const level = parts[parts.length - 1];
    const path = parts[parts.length - 2];
    return (
        <div className="w-screen h-screen font-poppins flex relative">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <EditLevel level={level} />
                <Footer />
            </div>
        </div>
    );
}