"use client";

import PopupShare from "@/components/user/PopupShare";
import QuizResult from "@/components/user/QuizResult";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useQuizStore } from "@/hook/quizStore";

export default function Result() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  
  const resultId = params.resultId;
  const { resetQuiz } = useQuizStore()

  useEffect(() => {
    resetQuiz();
  }, []);
  return (
    <div className="w-screen h-screen font-poppins bg-white text-black relative">
      <div className="flex justify-between items-center border-b border-[#DDE1E6] bg-white px-10 h-1/12">
        <img src="/assets/user/LogoWarna.png" className="h-10" />
      </div>
      <QuizResult setIsOpen={setIsOpen} resultId={resultId} />
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute bg-[rgba(0,0,0,0.5)] justify-center inset-0 flex items-center`}
      >
        <PopupShare setIsOpen={setIsOpen} linkShare={"https://literasi-digital-fe-758159032383.asia-southeast1.run.app/"+pathname+"/guest"} />
      </div>
    </div>
  );
}
