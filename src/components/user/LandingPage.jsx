"use client"

import { useState } from "react";
import Link from "next/link";
import Loading from "../Loading";
import Footer from "../admin/Footer";

export default function Landing(params) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
    };
    return (
        <div className="bg-[#0056D2] text-white font-poppins h-screen overflow-scroll">
            <div className="flex justify-between items-center text-white h-1/12 px-10">
                <img src="/assets/user/Logo.png" alt="" />
            </div>
            <div className="px-10">
                <div className="text-2xl mt-5">
                    <p>Dunia digital itu luas!</p>
                    <p className="font-bold">Yuk, cari tahu seberapa cakap kamu di dalamnya 🌍</p>
                    <p className="text-base">Jelajahi dunia digital dengan lebih cerdas! Ikuti kuis ini dan temukan level literasi digitalmu</p>
                </div>
                <Link href={"/quiz"} onClick={handleClick} className="flex items-center justify-center gap-2 p-2 bg-primary text-white rounded-md my-5 cursor-pointer">
                    {loading ? 
                        <Loading/>
                        :
                        <>
                            <p className="text-lg font-bold">Mulai Tes Sekarang</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </>
                    }
                </Link>
                <div className="flex justify-center">
                    <img src="/assets/user/IlustasiBumi.png" alt="" />
                </div>
                <p className="font-semibold mb-5">Ketahui Tingkat Literasi Digitalmu! 🚀</p>
                <div className="space-y-3 text-black pb-10">
                    <div className="rounded-md p-2 bg-[#F6F6F6] flex items-center gap-3">
                        <div className="p-2 rounded-md bg-white">
                            <img src="/assets/user/IlustasiBuku.png" alt="" />
                        </div>
                        <p>Ketahui sejauh mana pemahamanmu dalam dunia digital.</p>
                    </div>
                    <div className="rounded-md p-2 bg-[#F6F6F6] flex items-center gap-3">
                        <div className="p-2 rounded-md bg-white">
                            <img src="/assets/user/IlustrasiSuccess.png" alt="" />
                        </div>
                        <p>Temukan aspek yang perlu ditingkatkan untuk lebih mahir.</p>
                    </div>
                    <div className="rounded-md p-2 bg-[#F6F6F6] flex items-center gap-3">
                        <div className="p-2 rounded-md bg-white">
                            <img src="/assets/user/IlustrasiDiploma.png" alt="" />
                        </div>
                        <p>Bangun kepercayaan diri dalam menghadapi era digital.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}