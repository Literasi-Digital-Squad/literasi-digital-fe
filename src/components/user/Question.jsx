"use client"
import Link from "next/link"
import { useState } from "react"
export default function Question({nomor_soal}) {
    const [listJawaban, setlistJawaban] = useState([
        { desc: "listJawaban 1", img: "" },
        { desc: "listJawaban 2", img: "" },
        { desc: "listJawaban 3", img: "" },
        { desc: "listJawaban 4", img: "" },
        { desc: "listJawaban 5", img: "" }
    ])
    const [selectedJawaban, setSelectedJawaban] = useState()
    return (
        <>
            <div className="rounded-md overflow-hidden">
                <img src="/assets/user/ContohSoal.png" alt="" />
            </div>
            <div className="shadow-md font-bold p-3 rounded-md">
                <p>Berdasarkan email di atas, apa yang menjadi tanda bahwa email tersebut merupakan scam atau penipuan?</p>
            </div>
            <div className="space-y-5 pb-5">
                <p className="font-bold text-[#0A2D61]">Pilihlah Jawaban:</p>
                <div className="space-y-3">
                    {listJawaban.map((jawaban, index) => (
                        <div className={`text-center p-3 rounded-md w-full shadow-sm  ${selectedJawaban == index ? "bg-[#0A2D61] text-white" : ""}`} onClick={() => setSelectedJawaban(index)} key={index}>
                            {jawaban.desc}
                        </div>
                    ))}
                </div>
                <Link href={`${nomor_soal == 20 ? "/quiz/biodata":(`/quiz/${nomor_soal+1}`)}`} className="p-3 bg-primary cursor-pointer text-xl font-semibold flex gap-3 w-full rounded-lg justify-center items-center text-white">
                    <p>Selanjutnya</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </>
    )
}