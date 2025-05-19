'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loading";
import axiosInstance from "@/utils/axiosInstance";
export default function DetailJawaban({ resultId, participantId }) {
    const [results, setResults] = useState([]);
    const [participant, setParticipant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingDetail, setLoadingDetail] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter()
    const fetchDataResult = async () => {
        try {
            const response = await axiosInstance.get(`/admin/results/${resultId}/question_detail`);
            setResults(response.data.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoading(false);
        }
    };
    const fetchDataParticipant = async () => {
        try {
            const response = await axiosInstance.get(`/participant/${participantId}`);
            setParticipant(response.data.data);
            setLoadingDetail(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoadingDetail(false);
        }
    };
    useEffect(() => {
        fetchDataResult();
        fetchDataParticipant();
    }, []);
    return (
        <>
            {loading || loadingDetail ? (
                <div className="flex justify-center items-center h-4/5">
                    <Loading />
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : (
                <div className="px-5 py-7 overflow-y-scroll h-[80%] space-y-5">
                    <div className="flex items-center gap-5">
                        <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold">Detail Jawaban</p>
                    </div>
                    <div className="text-sm px-5">
                        <p className="font-bold mb-5">Data Pengguna</p>
                        <div className="rounded-md flex gap-5 items-center">
                            <div className="shadow-sm w-1/2 p-3 rounded-lg">
                                <div className="border-b flex items-center gap-2 border-[#888888] pb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <p>{participant[0].name} ({participant[0].age} Tahun)</p>
                                </div>
                                <div className="flex items-center gap-2 pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>{participant[0].created_at}</p>
                                </div>
                            </div>
                            <div className="flex shadow-sm w-1/2 p-3 h-fit justify-center gap-5 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <p>{participant[0].email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {results.map((result, index) => (
                        <div className="px-5 space-y-3" key={index}>
                            <p className="p-2 px-3 bg-[#D32F2F] rounded-lg w-fit text-white font-semibold">Soal {index + 1}</p>
                            <div className="grid grid-cols-3 gap-5">
                                <div className="p-2 border border-[#D1D1D1] h-fit rounded-md">
                                    <img src={result.image_url} alt={"soal "+(index+1)} className="rounded-md" />
                                </div>
                            </div>
                            <p className="font-bold p-3 shadow-sm rounded-lg">{result.body}</p>
                            {result.answers.map((answer) => (
                                <div key={answer.id}>
                                    {answer.image_url ? (
                                        <div
                                            className={`text-center p-2 rounded-md` + (answer.answered && answer.is_correct ? " bg-[#43A047] text-white" : answer.answered ? "bg-red-500 text-white" : "text-black")}>
                                            <img src={answer.image_url} alt={answer.image_url} className="rounded-md h-36" />
                                            {answer.body}
                                        </div>) : (
                                        <div className={`text-center p-2 rounded-md` + (answer.answered && answer.is_correct ? " bg-[#43A047] text-white" : answer.answered ? "bg-red-500 text-white" : "text-black")}>
                                            {answer.body}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>)}
        </>
    );
}