'use client'
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
export default function ListPertanyaan({ level, setDataDelete, setIsDelete }) {
    const router = useRouter()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(`/admin/questions?level=${level}`);
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
    const handleDelete = (data) => {
        setDataDelete(data)
        setIsDelete(true)
    }
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%]">
            <div className="flex items-center gap-5">
                <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-2xl font-bold">Bank Soal {level}</p>
            </div>
            <div className="flex space-x-1 text-sm items-center mt-2">
                <p className=" text-[#9CA3AF]">Pertanyaan</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p className=" text-[#9CA3AF]">List Level</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>List Pertanyaan</p>
            </div>
            <div className="flex w-full mt-2">
                <div className="border-[#E3E5E8] border rounded-lg px-3 py-2 flex items-center mr-3">
                    <input type="text" className="focus:outline-none text-sm" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#9CA3AF]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <button type="button" className="flex items-center border border-[#E3E5E8] text-[#9CA3AF] space-x-2 px-3 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    <p>Filter</p>
                </button>
                <Link href={`/admin/pertanyaan/${level}/tambah-pertanyaan`} className="flex items-center bg-[#0056D2] space-x-2 text-white px-3 py-2 rounded-lg ml-auto text-sm shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p>Tambah Pertanyaan</p>
                </Link>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>{
                    data == 0 ? (
                        <div className=" mt-12 flex-col flex items-center text-sm">
                            <img src="/assets/admin/bg-no-question.png" alt="" className="h-auto w-auto" />
                            <p className="font-bold mt-5">Belum Ada Pertanyaan yang Ditambahkan</p>
                            <p className="text-[#546881]">Isi Formulir yang Tersedia untuk Menambahkan Pertanyaan Baru dalam Bank Soal</p>
                        </div>
                    ) : (
                        <div className="overflow-hidden rounded-lg shadow-lg mx-5 mt-7">
                            <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                                <thead className="bg-[#0A2D61] text-white">
                                    <tr>
                                        <th className="px-4 py-5">Gambar Pertanyaan</th>
                                        <th className="px-4 py-5">Deskripsi Level</th>
                                        <th className="px-4 py-5 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((pertanyaan) => (
                                        <tr key={pertanyaan.id} className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white items-center">
                                            <td className="px-4 py-3"><img src={pertanyaan.image_url} alt="" className="w-32" /></td>
                                            <td className="px-4 py-3">{pertanyaan.body}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-2">
                                                    <Link href={`/admin/pertanyaan/${level}/tambah-pertanyaan`} className="flex items-center bg-[#FFB332] text-white p-3 rounded-lg cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </Link>
                                                    <button type="button" className="flex items-center bg-[#D32F2F] text-white p-3 rounded-lg cursor-pointer" onClick={() => handleDelete(pertanyaan)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                }</>
            )}
        </div>
    );
}