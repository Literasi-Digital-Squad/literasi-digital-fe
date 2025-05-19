'use client'
import Footer from "@/components/admin/Footer";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import DetailJawaban from "@/components/admin/rekap-jawaban/DetailJawaban";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function Jawaban() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const parts = pathName.split("/");
    const path = parts[parts.length - 2];
    const resultId = parts[parts.length - 1];
    const participantId = searchParams.get("participant_id");
    return (
        <div className="w-screen h-screen font-poppins flex">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <DetailJawaban resultId={resultId} participantId={participantId}/>
                <Footer />
            </div>
        </div>
    );
}