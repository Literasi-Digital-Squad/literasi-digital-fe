'use client';
import { usePathname } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import Footer from "@/components/admin/Footer";
import FormEdit from "@/components/admin/pertanyaan/FormEdit";
export default function EditPertanyaan() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const path = parts[parts.length - 4];
    const level = parts[parts.length - 3];
    const questionId = parts[parts.length - 1];
    return (
        <div className="w-screen h-screen font-poppins flex relative">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <FormEdit level={level} questionId={questionId}/>
                <Footer />
            </div>
        </div>
    );
}