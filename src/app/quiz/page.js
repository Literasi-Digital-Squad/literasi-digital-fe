"use client"

import { useEffect } from "react"
import Question from "@/components/user/Question"
import { useQuizStore } from "@/hook/quizStore"

export const maxQuestion = 20

export default function Quiz() {
  const { summary } = useQuizStore()
  const currentQuestion = Math.min(summary.length + 1, maxQuestion);
  return (
    <div className="w-screen h-screen font-poppins bg-white text-black">
      <div className="flex justify-between items-center border-b border-[#DDE1E6] bg-white px-10 h-1/12">
        <img src="/assets/user/LogoWarna.png" className="h-10" />
      </div>
      <div className="px-10 py-5 space-y-5 h-11/12">
        <div>
          <p className="text-sm">Pertanyaan</p>
          <p className="text-xl mt-2">
            <span className="font-bold text-secondary">{currentQuestion}</span>/{maxQuestion}
          </p>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden bg-[#ECF9FF]">
          <div
            className="bg-secondary h-full transition-all duration-300"
            style={{ width: `${(currentQuestion / maxQuestion) * 100}%` }}
          />
        </div>
        <Question 
          nomor_soal={currentQuestion}
          />
      </div>
    </div>
  );
}
