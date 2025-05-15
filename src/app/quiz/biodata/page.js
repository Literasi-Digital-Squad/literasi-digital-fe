"use client"

import { useEffect } from "react"
import FormDataDiri from "@/components/user/FormDataDiri";
import { useQuizStore } from "@/hook/quizStore";
import { maxQuestion } from "../page";
import { useRouter } from "next/navigation"

export default function Biodata() {
  const router = useRouter()

  const {
      theta,
      total_correct,
      summary
  } = useQuizStore()
  console.log("Theta: ", theta)
  console.log("Total Correct: ", total_correct)
  console.log("Summary Total: ", summary.length)
  console.log(summary)

  useEffect(() => {
    if (summary.length != maxQuestion) {
      router.push("/")
    }
  }, [summary, router])

  return (
    <div className="w-screen h-screen font-poppins bg-white text-black">
      <div className="flex justify-between items-center border-b border-[#DDE1E6] bg-white px-10 h-1/12">
        <img src="/assets/user/LogoWarna.png" className="h-10" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <FormDataDiri />
    </div>
  );
}
