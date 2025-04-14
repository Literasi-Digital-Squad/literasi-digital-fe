'use client'
import Footer from "@/components/admin/Footer";
import ListLevel from "@/components/admin/pertanyaan/ListLevel";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
export default function RekapJawaban() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const path = parts[parts.length - 1];
    return (
        <div className="w-screen h-screen font-poppins flex">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <ListLevel />
                <Footer />
            </div>
        </div>
    );
}