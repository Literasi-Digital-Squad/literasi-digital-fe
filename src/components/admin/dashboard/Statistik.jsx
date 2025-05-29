'use client'
import Loading from "@/components/Loading";
import DoughnutChart from "./DoughnutChart";
import LevelStats from "./LevelStats";
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

export default function Statitik() {
    const data = [{ nama: "Advance", warna: '#FFAE4C' }, { nama: "Tinggi", warna: '#FF928A' }, { nama: "Lanjut", warna: '#3CC3DF' }, { nama: "Dasar", warna: '#8979FF' }]
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [participant, setParticipant] = useState([]);
    const [participantToday, setParticipantToday] = useState([]);
    const [totalResult, setTotalResult] = useState([]);
    const [distributionLabel, setDistributionLabel] = useState([]);
    const [distributionValue, setDistributionValue] = useState([]);
    const fetchData = async () => {
        try {
            const responseParticipant = await axiosInstance.get("/admin/dashboard/participant_total");
            const responseToday = await axiosInstance.get("/admin/dashboard/participant_total_today");
            const responseResult = await axiosInstance.get("/admin/dashboard/result_total");
            const responseDistribution = await axiosInstance.get("/admin/dashboard/level_distribution");
            setParticipant(responseParticipant.data.total);
            setParticipantToday(responseToday.data.total);
            setTotalResult(responseResult.data.total);
            setDistributionLabel(responseDistribution.data.data.distribution.map(item => "Level " + item.level));
            setDistributionValue(responseDistribution.data.data.distribution.map(item => item.total));
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="px-10 py-7 overflow-y-scroll h-[80%] space-y-5">
            <div className=" grid grid-cols-3 gap-5">
                <div className="relative rounded-lg border border-primary overflow-hidden p-5">
                    <div className="flex items-center mb-7 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#0056D2]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="font-bold">Quiz Result Today</p>
                    </div>
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <p><span className="text-3xl font-bold mr-1">{totalResult}</span>kali</p>
                    )}
                    <div className="absolute w-20 h-20 rounded-full -bottom-10 -right-10 bg-primary z-40 border-4 border-white"></div>
                    <div className="absolute w-24 h-24 rounded-full -bottom-12 -right-12 bg-primary z-30"></div>
                </div>
                <div className="relative rounded-lg border border-secondary overflow-hidden p-5">
                    <div className="flex items-center mb-7 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        <p className="font-bold">New Participants Today</p>
                    </div>
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <p><span className="text-3xl font-bold mr-1">{participantToday}</span>Pengguna Hari Ini</p>
                    )}
                    <div className="absolute w-20 h-20 rounded-full -bottom-10 -right-10 bg-secondary z-40 border-4 border-white"></div>
                    <div className="absolute w-24 h-24 rounded-full -bottom-12 -right-12 bg-secondary z-30"></div>
                </div>
                <div className="relative rounded-lg border border-[#43A047] overflow-hidden p-5">
                    <div className="flex items-center mb-7 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <p className="font-bold">Total Participants</p>
                    </div>
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <p><span className="text-3xl font-bold mr-1">{participant}</span>Total Pengguna</p>
                    )}
                    <div className="absolute w-20 h-20 rounded-full -bottom-10 -right-10 bg-[#43A047] z-40 border-4 border-white"></div>
                    <div className="absolute w-24 h-24 rounded-full -bottom-12 -right-12 bg-[#43A047] z-30"></div>
                </div>
            </div>
            <div className="flex justify-between px-10 ">
                <div className="w-[40%]">
                    <p className="text-2xl font-bold">Distribusi Literasi Digital Pengguna</p>
                    {loading ? (
                        <div className="flex justify-center items-center h-[80%]">
                            <Loading />
                        </div>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <DoughnutChart labels={distributionLabel} values={distributionValue} />
                    )}
                </div>
                <div className="w-[40%]">
                    <LevelStats />
                </div>
            </div>
        </div>
    );
}