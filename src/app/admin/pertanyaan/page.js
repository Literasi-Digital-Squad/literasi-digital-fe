'use client'
import Footer from "@/components/admin/Footer";
import ListLevel from "@/components/admin/level/ListLevel";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
export default function Pertanyaan() {
    const pathName = usePathname();
    return (
        <div className="w-screen h-screen font-poppins flex">
            <Sidebar isActive={pathName} />
            <div className="w-[85%] h-full">
                <Navbar />
                <ListLevel />
                <Footer />
            </div>
        </div>
    );
}