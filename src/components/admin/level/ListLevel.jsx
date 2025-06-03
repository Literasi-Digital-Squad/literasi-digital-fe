import Link from "next/link"
import { useState } from "react"
import axiosInstance from "@/utils/axiosInstance";
import { useEffect } from "react";
import Loading from "@/components/Loading";
export default function ListLevel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("/admin/levels");
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
        <div className="px-5 py-7 overflow-y-scroll h-[80%]">
            <p className="text-2xl font-bold">Level Literasi</p>
            <div className="flex space-x-1 text-sm items-center">
                <p className=" text-[#9CA3AF]">Master Data</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>Level</p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-[80%]">
                    <Loading />
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-[80%]">
                <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-lg shadow-lg mx-5 mt-7">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                        <thead className="bg-[#0A2D61] text-white">
                            <tr>
                                <th className="px-4 py-5 text-center">Nama Level</th>
                                <th className="px-4 py-5">Deskripsi Level</th>
                                <th className="px-4 py-5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((level, index) => (
                                <tr key={index} className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white">
                                    <td className="px-4 py-3 text-center">{level.level}</td>
                                    <td className="px-4 py-3">{level.description}</td>
                                    <td className="px-4 py-3 flex justify-center">
                                        <Link href={`/admin/level/${level.level}`} className="flex items-center bg-[#0056D2] space-x-2 text-white w-fit px-5 py-3 rounded-lg">
                                            <p>Ubah</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}