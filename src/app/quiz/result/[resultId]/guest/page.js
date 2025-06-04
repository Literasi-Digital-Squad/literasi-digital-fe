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
      </div>
      <QuizResultGuest resultId={resultId} />
    </div>
  );
}
