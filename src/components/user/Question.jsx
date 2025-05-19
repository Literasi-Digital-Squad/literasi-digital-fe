"use client"

import { useState, useEffect } from "react"
import { useQuizStore } from "@/hook/quizStore"
import Loading from "@/components/Loading"
import { maxQuestion } from "@/app/quiz/page"
import axiosInstance from "@/utils/axiosInstance"
import { useRouter } from "next/navigation"

export default function Question({ nomor_soal }) {
    const router = useRouter()
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    const [selectedJawaban, setSelectedJawaban] = useState(null)
    const [loading, setLoading] = useState(false)
    const [lastQuestionId, setLastQuestionId] = useState(null)

    const {
        theta,
        correct_streak,
        wrong_streak,
        total_correct,
        setTheta,
        setCorrectStreak,
        setWrongStreak,
        setTotalCorrect,
        summary,
        addSummary,
    } = useQuizStore()

    useEffect(() => {
        const fetchInitial = async () => {
            try {
                const res = await axiosInstance.get('/initial-question');
                const data = res.data;
                setQuestion(data.data);
                setLastQuestionId(data.data.id);
                fetchAnswers(data.data.id);
            } catch (err) {
                // Todo: error pop up
                console.error("Error fetching initial question:", err)
            }
        }

        if (nomor_soal === 1) {
            fetchInitial()
        }
    }, [nomor_soal])

    const fetchAnswers = async (questionId) => {
        try {
            const res = await axiosInstance.get(`/questions/${questionId}/answers`)
            console.log(res.data.data)
            setAnswers(res.data.data)
        } catch (err) {
            // Todo: error pop up
            console.error("Error fetching answers:", err)
        }
    }

    const handleNext = async () => {
        if (!selectedJawaban) {
            return
        } else {
            setLoading(true)
            try {
                const payload = {
                    theta: theta || 3,
                    question_id: lastQuestionId,
                    answer_id: selectedJawaban,
                    correct_streak,
                    wrong_streak,
                    total_correct,
                }

                const res = await axiosInstance.post("/questions", payload);
                const { data } = res.data;

                setTheta(data.theta)
                setCorrectStreak(data.correct_streak)
                setWrongStreak(data.wrong_streak)
                setTotalCorrect(data.total_correct)

                addSummary({
                    question_id: lastQuestionId,
                    answer_id: selectedJawaban,
                })

                setQuestion(data.question)
                setLastQuestionId(data.question.id)
                fetchAnswers(data.question.id)
                setSelectedJawaban(null)
                setLoading(false)

            } catch (err) {
                // Todo: error pop up
                console.error("Error posting answer:", err)
            }
        }
    }

    if (!question || loading) return <Loading />

    return (
        <>
            {question.image_url && (
                <div className="rounded-md overflow-hidden">
                    <img src={question.image_url} alt="gambar soal" />
                </div>
            )}
            <div className="shadow-md font-bold p-3 rounded-md">
                <p>{question.body}</p>
            </div>
            <div className="space-y-5 pb-5">
                <p className="font-bold text-[#0A2D61]">Pilihlah Jawaban:</p>
                <div className="space-y-3">
                    {answers.map((answer) => (
                        <div
                            key={answer.id}
                            onClick={() => setSelectedJawaban(answer.id)}
                            className={`p-3 rounded-md w-full shadow-sm cursor-pointer border ${selectedJawaban === answer.id ? "bg-[#0A2D61] text-white" : "bg-white"
                                }`}
                        >
                            {answer.image_url && (
                                <div className="mb-2">
                                    <img src={answer.image_url} alt="gambar jawaban" className="max-h-48 mx-auto" />
                                </div>
                            )}
                            {answer.body && <p className="text-center font-semibold">{answer.body}</p>}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!selectedJawaban || loading}
                    className="p-3 bg-primary text-xl font-semibold flex gap-3 w-full rounded-lg justify-center items-center text-white disabled:opacity-50 cursor-pointer"
                >
                    <p>{loading ? <Loading /> : ("Selanjutnya")}</p>
                    {!loading && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    )
}
