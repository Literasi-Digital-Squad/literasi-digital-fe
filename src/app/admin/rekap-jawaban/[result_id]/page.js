'use client'
import Footer from "@/components/admin/Footer";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import DetailJawaban from "@/components/admin/rekap-jawaban/DetailJawaban";
import { usePathname } from "next/navigation";
export default function Jawaban() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const path = parts[parts.length - 1];
    return (
        <div className="w-screen h-screen font-poppins flex">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <DetailJawaban />
                <Footer />
            </div>
        </div>
    );
}