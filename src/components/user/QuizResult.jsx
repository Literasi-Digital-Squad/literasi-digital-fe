import { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { set } from "zod";
import Loading from "../Loading";

export default function QuizResult({ setIsOpen, resultId }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchResult = async () => {
    try {
      const res = await axiosInstance.get(`/result/${resultId}`)
      setResult(res.data.data[0]);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data hasil.");
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-11/12">
          <Loading />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-11/12">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <div className="px-10 py-5 space-y-5 h-11/12 flex flex-col">
          <div className="text-center">
            <img src="/assets/user/IlustrasiResult.png" alt="Ilustrasi Result" />
            <p className="text-sm mb-1">Level Anda</p>
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
            <Link href="/" className="p-3 h-fit w-1/2 border-2 border-secondary cursor-pointer text-xl text-secondary rounded-lg text-center">
              Beranda
            </Link>
            <div
              className="p-3 h-fit w-1/2 border-2 border-primary bg-primary cursor-pointer text-xl font-semibold flex gap-3 rounded-lg justify-center items-center text-white"
              onClick={() => setIsOpen(true)}
            >
              <p>Bagikan</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
