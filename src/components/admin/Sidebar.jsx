'use client';

import Link from "next/link";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Loading from "../Loading";

export default function Sidebar({ isActive }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isDrop, setIsDrop] = useState(true);

    const handleLogout = () => {
        setLoading(true);
        Cookies.remove('token');
        router.push('/login');
    };
    return (
        <div className="w-[15%] h-full flex flex-col border-r border-[#f6e0e0]">
            <div className="flex items-center h-[10%] space-x-2 px-5">
                <img src="/assets/user/LogoWarna.png" alt="" className="h-10"/>
            </div>
            <div className="pt-5">
                <Link href="/admin/dashboard" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "dashboard" ? "text-secondary font-bold border-l-4 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <img src="/assets/admin/dashboard-icon.svg" alt="" className="size-6" />
                    <p>Dashboard</p>
                </Link>
                <div>
                    <div className="flex justify-between py-3 px-5 items-center cursor-pointer" onClick={() => setIsDrop(!isDrop)}>
                        <div className="flex space-x-5 items-center text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            <p>Master Data</p>
                        </div>
                        {isDrop ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        )}
                    </div>
                    <Link href="/admin/level" className={`flex space-x-5 mx-5 my-2 px-5 py-2 ${isDrop ? "" : "hidden"} items-center rounded-md ${isActive === "level" ? "bg-[#ECF9FF] font-bold" : "text-black"}`}>
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <div>Level</div>
                    </Link>
                </div>
                <Link href="/admin/pertanyaan" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "pertanyaan" ? "text-secondary font-bold border-l-2 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <img src="/assets/admin/pertanyaan-icon.svg" alt="" />
                    <p>Pertanyaan</p>
                </Link>
                <Link href="/admin/rekap-jawaban" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "rekap-jawaban" ? "text-secondary font-bold border-l-2 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p>Rekap Jawaban</p>
                </Link>
            </div>
            <button
                type="button"
                onClick={handleLogout}
                disabled={loading}
                className="cursor-pointer rounded-xl p-3 m-5 flex items-center justify-center space-x-2 bg-[#F6F6F6] mt-auto"
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <p>Logout</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    </>
                )}
            </button>
        </div>
    )
}