"use client";

import PopupShare from "@/components/user/PopupShare";
import QuizResult from "@/components/user/QuizResult";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuizStore } from "@/hook/quizStore";

export default function Result() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  
  const resultId = params.resultId;
  const { resetQuiz } = useQuizStore()

  useEffect(() => {
    resetQuiz();
  }, []);
  return (
    <div className="w-screen h-screen font-poppins bg-white text-black relative">
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
      <QuizResult setIsOpen={setIsOpen} resultId={resultId} />
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute bg-[rgba(0,0,0,0.5)] justify-center inset-0 flex items-center`}
      >
        <PopupShare setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
