'use client'
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/admin/Footer";
import { usePathname } from "next/navigation";
import EditLevel from "@/components/admin/level/EditLevel";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
export default function Level() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const level = parts[parts.length - 1];
    const path = parts[parts.length - 2];
    const [data, setData] = useState({ level: "", description: "" })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`/admin/levels/${level}`);
            setData(response.data.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [data]);
    return (
        <div className="w-screen h-screen font-poppins flex relative">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <EditLevel levelData={data} />
                <Footer />
            </div>
        </div>
    );
}