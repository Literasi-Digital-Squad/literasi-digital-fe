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
      </div>
      <FormDataDiri />
    </div>
  );
}
