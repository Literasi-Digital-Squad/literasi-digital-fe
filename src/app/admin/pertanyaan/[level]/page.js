'use client'
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import ListPertanyaan from "@/components/admin/pertanyaan/ListPertanyaan";
import Footer from "@/components/admin/Footer";
import { usePathname } from "next/navigation";
import PopUpDelete from "@/components/admin/pertanyaan/PopUpDelete";
import { useState } from "react";
export default function Level() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const level = parts[parts.length - 1];
    const path = parts[parts.length - 2];
    const [idDelete, setIdDelete] = useState();
    const [isDelete, setIsDelete] = useState(false);
    return (
        <div className="w-screen h-screen font-poppins flex relative">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <ListPertanyaan level={level} setIdDelete={setIdDelete} setIsDelete={setIsDelete} />
                <Footer />
            </div>
            <PopUpDelete isDelete={isDelete} setIsDelete={setIsDelete} />
        </div>
    );
}