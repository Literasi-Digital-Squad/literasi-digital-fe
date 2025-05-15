'use client';

import { useQuizStore } from "@/hook/quizStore";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function FormDataDiri() {
    const router = useRouter()

    const {
        summary,
        total_correct,
        theta,
        resetQuiz
    } = useQuizStore()
    
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            age: parseInt(formData.age),
            phone: formData.phone,
            email: formData.email
        };

        try {
            const res = await axiosInstance.post("/participants", payload)
            const resultParticipant = res.data
            console.log("Data Participant:", resultParticipant.data[0]);

            const payloadResult = {
                participant_id: resultParticipant.data[0].id,
                level_result: Math.floor(theta),
                total_correct: total_correct
            }

            const resResult = await axiosInstance.post("/result", payloadResult)
            const resultResult = resResult.data;
            console.log("Data Result:", resultResult.data[0])

            router.push(`/quiz/result/${resultResult.data[0].id}`)
        } catch (error) {
            // Todo: error pop up
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div className="px-10 py-5 space-y-5 h-11/12 flex flex-col">
            <div>
                <p className="text-sm">Data Diri User</p>
                <p className="mt-2 font-bold text-[#0A2D61]">
                    Isi Data Diri Anda Terlebih Dahulu
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-bold">
                        Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="border p-2 rounded-md border-[#D1D1D1]"
                        placeholder="Masukan Nama Anda..."
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="age" className="font-bold">
                        Umur <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        required
                        className="border p-2 rounded-md border-[#D1D1D1]"
                        placeholder="Masukan Umur Anda..."
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-bold">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border p-2 rounded-md border-[#D1D1D1]"
                        placeholder="Masukan Email Anda..."
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="font-bold">
                        Nomor Telepon <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        required
                        className="border p-2 rounded-md border-[#D1D1D1]"
                        placeholder="Masukan Nomor Telepon Anda..."
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-primary text-xl font-semibold flex gap-3 rounded-lg justify-center items-center text-white"
                >
                    <p>Selesai</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </form>
        </div>
    );
}
