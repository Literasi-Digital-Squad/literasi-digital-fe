'use client';
import Link from "next/link";
export default function Sidebar({ isActive }) {
    return (
        <div className="w-[15%] h-full flex flex-col border-r border-[#D1D1D1]">
            <div className="flex items-center justify-center h-[10%] space-x-2">
                <div className="h-10 w-10 bg-black rounded-2xl"></div>
                <p className="text-secondary font-bold text-xl">Cakap Digital</p>
            </div>
            <div className="pt-5">
                <Link href="/admin/dashboard" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "/admin/dashboard" ? "text-secondary font-bold border-l-4 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <img src="/assets/admin/dashboard-icon.svg" alt="" className="size-6" />
                    <p>Dashboard</p>
                </Link>
                <div className="flex space-x-5 py-3 px-5 items-center text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    <p>Master Data</p>
                </div>
                <Link href="/admin/level" className={`flex space-x-5 mx-5 my-2 px-5 py-2 items-center rounded-md ${isActive === "/admin/level" ? "bg-[#ECF9FF] font-bold" : "text-black"}`}>
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <div>Level</div>
                </Link>
                <Link href="/admin/pertanyaan" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "/admin/pertanyaan" ? "text-secondary font-bold border-l-2 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <img src="/assets/admin/pertanyaan-icon.svg" alt="" />
                    <p>Pertanyaan</p>
                </Link>
                <Link href="/admin/rekap-jawaban" className={`flex space-x-5 py-3 px-5 items-center text-lg ${isActive === "/admin/rekap-jawaban" ? "text-secondary font-bold border-l-2 border-secondary bg-[#ECF9FF]" : "text-black"}`}>
                    <img src="/assets/admin/jawaban-icon.svg" alt="" className="size-6" />
                    <p>Rekap Jawaban</p>
                </Link>
            </div>
            <button type="button" className=" rounded-xl p-3 m-5 flex items-center justify-center space-x-2 bg-[#F6F6F6] mt-auto">
                <p>Logout</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
            </button>
        </div>
    )
}