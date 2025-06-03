import { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import Loading from "../Loading";

export default function QuizResultGuest({ resultId }) {
    const [result, setResult] = useState();
    const [participant, setParticipant] = useState();
    const [loadingResult, setLoadingResult] = useState(true);
    const [errorResult, setErrorResult] = useState("");
    const fetchResult = async () => {
        try {
            const res = await axiosInstance.get(`/result/${resultId}`)
            setResult(res.data.data[0])
        } catch (error) {
            setErrorResult("Terjadi kesalahan saat mengambil data hasil.");
        }
        finally {
            setLoadingResult(false);
        }
    }
    const [loadingParticipant, setLoadingParticipant] = useState(true);
    const [errorParticipant, setErrorParticipant] = useState("");
    const fetchDataParticipant = async () => {
        try {
            const response = await axiosInstance.get(`/participant/${result?.participant_id}`);
            setParticipant(response.data.data[0]);
        } catch (err) {
            console.error(err);
            setErrorParticipant("Terjadi kesalahan saat mengambil data.");
        }
        finally {
            setLoadingParticipant(false);
        }
    };

    useEffect(() => {
        if (result) {
            fetchDataParticipant();
        } else {
            fetchResult();
        }
    }, [result]);

    return (
        <>
            {
                loadingResult || loadingParticipant ? (
                    <div className="flex justify-center items-center h-11/12" >
                        <Loading />
                    </div>
                ) : errorResult || errorParticipant ? (
                    <div className="flex justify-center items-center h-11/12">
                        <p className="text-red-500">{errorResult}</p>
                    </div>
                ) : (
                    <div className="px-10 py-5 space-y-5 h-11/12 flex flex-col">
                        <div className="text-center">
                            <img src="/assets/user/IlustrasiResult.png" alt="Ilustrasi Result" />
                            <p className="text-sm mb-1">Level <span className="font-bold">{participant.name}</span></p>
                            <p className="font-bold text-[#0A2D61] text-xl mb-5">
                                Level {result.level_result}
                            </p>
                            <p className="text-2xl font-bold text-secondary mb-1">Congratulations</p>
                            <p className="text-[#697077] mb-5">{result.description}</p>

                            <div className="bg-gradient-to-tr from-[#D4DEEF] to-[#F3E3D5] flex justify-center gap-3 rounded-xl p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-300">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p>
                                    <span className="text-xl font-bold">{result.total_correct}</span>/20
                                </p>
                            </div>
                        </div>
                        <div className="grow flex items-end gap-3">
                            <Link href="/" className="p-3 h-fit w-full border-2 border-secondary cursor-pointer text-xl text-secondary rounded-lg text-center">
                                Beranda
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
}
