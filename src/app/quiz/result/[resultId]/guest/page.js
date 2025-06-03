"use client";

import PopupShare from "@/components/user/PopupShare";
import QuizResult from "@/components/user/QuizResult";
import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useQuizStore } from "@/hook/quizStore";
import QuizResultGuest from "@/components/user/QuizResultGuest";

export default function Result() {
  const params = useParams();
  
  const resultId = params.resultId;
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
      <QuizResultGuest resultId={resultId} />
    </div>
  );
}
