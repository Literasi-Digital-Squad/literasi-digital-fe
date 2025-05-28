'use client'
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import Loading from "@/components/Loading";

export default function LevelStats() {
    const levelData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [isActive, setIsActive] = useState(1)
    const [isDrop, setIsDrop] = useState(false)

    const handleDropdown = (indexlevel) => {
        setIsDrop(!isDrop)
        setIsActive(indexlevel)
    }
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`/admin/dashboard/level_stats/${isActive}`);
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
    }, [isActive]);
    return (
        <div className="space-y-5">
            <div className="flex justify-between mb-5">
                <p className="text-2xl font-bold">Level Stats</p>
                <div className="relative">
                    <div className="flex gap-5 items-center cursor-pointer border rounded-md py-1 px-4 justify-between" onClick={() => setIsDrop(!isDrop)}>
                        <p>Level {isActive}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div id="dropdown" className={`${isDrop ? "" : ("hidden")} bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 absolute w-full`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {levelData.map((level) => (
                                <li key={level}>
                                    <div onClick={() => handleDropdown(level)} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Level {level}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-4/5">
                    <Loading />
                </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <div className="flex items-center gap-5 bg-[#E3F5E3] p-3 rounded-lg">
                        <div className="p-3 rounded-full h-fit bg-[#9CD99E] text-[#43A047]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                            </svg>
                        </div>
                        <div>
                            <p>Level Name</p>
                            <p className="text-xl font-bold mt-1 capitalize">Level {isActive}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 bg-[#ECF9FF] p-3 rounded-lg">
                        <div className="p-3 rounded-full h-fit bg-[#0A2D61] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p>Number of Participant</p>
                            <p className="text-xl font-bold mt-1">{data?.total_participant}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 bg-[#FFFAEC] p-3 rounded-lg">
                        <div className="p-3 rounded-full h-fit bg-[#F57C00] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                        <div>
                            <p>Average Correct</p>
                            <p className="text-xl font-bold mt-1">{data?.correct_avg}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 bg-[#FBCDCD] p-3 rounded-lg">
                        <div className="p-3 rounded-full h-fit bg-[#932121] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p>Average Age</p>
                            <p className="text-xl font-bold mt-1">{data?.age_avg}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}