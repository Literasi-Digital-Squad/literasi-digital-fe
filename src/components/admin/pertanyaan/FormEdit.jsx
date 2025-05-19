"use client"
import { useState, useEffect } from "react";
import InputFoto from "./InputFoto";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import Loading from "@/components/Loading";
export default function FormEdit({ level, questionId }) {
    const router = useRouter()
    const [pertanyaan, setPertanyaan] = useState("")
    const [image, setImage] = useState("");
    const [imageInput, setImageInput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [jawaban, setJawaban] = useState([])
    const tambahJawaban = () => {
        setJawaban([
            ...jawaban,
            { jawaban: "", image: "", isTrue: false }
        ]);
    };
    const handlePertanyaanChange = (e) => {
        setPertanyaan(e.target.value);
    };
    const handleJawabanChange = (index, e) => {
        const { name, value } = e.target;
        const newJawaban = [...jawaban];
        newJawaban[index][name] = value;
        setJawaban(newJawaban);
    }
    const handleJawabanImageChange = (index, file) => {
        const newJawaban = [...jawaban];
        newJawaban[index].image_url = file;
        setJawaban(newJawaban);
    };
    const toggleIsTrue = (index) => {
        setJawaban(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, is_correct: !item.is_correct }
                    : item
            )
        );
    };
    const fetchQuestion = async () => {
        try {
            const response = await axiosInstance.get(`/admin/questions/${questionId}`);
            setPertanyaan(response.data.data.body);
            setImageInput(response.data.data.image_url);
            setImage(response.data.data.image_url);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoading(false);
        }
    };
    const fetchAnswer = async () => {
        try {
            const response = await axiosInstance.get(`/admin/questions/${questionId}/answers`);
            console.log(response.data.data)
            setJawaban(response.data.data)
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan saat mengambil data.");
            setLoading(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(level, pertanyaan, imageInput, jawaban)
        try {
            const formData = new FormData();
            formData.append("level_id", level);
            formData.append("body", pertanyaan);
            if (imageInput && imageInput !== image) formData.append("image", imageInput);
            const questionRes = await axiosInstance.put(`/admin/questions/${questionId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            for (let i = 0; i < jawaban.length; i++) {
                if (jawaban[i].jawaban !== "") {
                    const formData = new FormData();
                    formData.append("body", pertanyaan);
                    formData.append("is_correct", jawaban[i].is_correct.toString());
                    if (jawaban[i].image_url && jawaban[i].image_url !== image) formData.append("image", jawaban[i].image_url);
                    const answerRes = await axiosInstance.put(`/admin/questions/${questionId}/answers/${jawaban[i].id}`, formData, {
                        headers: { "Content-Type": "multipart/form-data" }
                    });
                    console.log(answerRes.data)
                }
            }
            router.back()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchQuestion();
        fetchAnswer();
    }, []);
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%] space-y-5">
            {loading ? (
                <div className="flex justify-center items-center h-[80%]">
                    <Loading />
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-[80%] text-red-500">
                    <p>{error}</p>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-5">
                        <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold">Level Literasi</p>
                    </div>
                    <form onSubmit={handleSubmit} method="post" className="space-y-5">
                        <div className="grid grid-cols-5 gap-5 p-5 rounded-md shadow-md h-max">
                            <div className="col-span-1 flex flex-col gap-2">
                                <label htmlFor="inputFoto" aria-required className="text-lg font-bold">Gambar</label>
                                <InputFoto setImageInput={setImageInput} imageInput={imageInput} />
                            </div>
                            <div className="col-span-4 flex flex-col gap-2">
                                <label htmlFor="pertanyaan" aria-required className="text-lg font-bold">Pertanyaan</label>
                                <textarea
                                    className="flex-grow w-full border-2 p-2 rounded-md border-[#D1D1D1]"
                                    placeholder="Masukkan Pertanyaan.."
                                    value={pertanyaan}
                                    onChange={handlePertanyaanChange}
                                />
                            </div>
                        </div>
                        <div className="p-5 rounded-md shadow-md flex flex-col gap-2">
                            <label htmlFor="jawaban" className="text-lg font-bold">Jawaban</label>
                            <div className="grid grid-cols-3 gap-5">
                                {jawaban.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center col-span-1 gap-3 border-dashed border-2 border-[#D1D1D1] p-5 rounded-lg">
                                        <div className="flex justify-between w-full">
                                            <div className={`p-2 rounded-full w-min cursor-pointer ${item.is_correct ? 'bg-[#9CD99E]' : 'bg-[#F6F6F6]'}`} onClick={() => toggleIsTrue(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                </svg>
                                            </div>
                                        </div>
                                        <InputFoto
                                            setImageInput={(file) => handleJawabanImageChange(index, file)}
                                            imageInput={jawaban[index].image_url}
                                        />
                                        <textarea
                                            name="body"
                                            rows={3}
                                            className="focus:outline-none resize-none w-full text-center"
                                            placeholder="Masukkan Jawaban"
                                            onChange={(e) => handleJawabanChange(index, e)}
                                            value={item.body}
                                        />
                                    </div>
                                ))}
                                <div className="flex flex-col items-center col-span-1 gap-3 border-dashed h-min border-2 border-[#D1D1D1] p-5 rounded-lg cursor-pointer" onClick={() => tambahJawaban()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 text-[#5D5D5D]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>Tambah Jawaban</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end items-center">
                            <button type="button" onClick={() => router.back()} className="cursor-pointer flex items-center border-2 border-[#0056D2] w-min space-x-2 text-secondary px-5 py-3 rounded-lg font-bold">
                                <p>Batal</p>
                            </button>
                            <button type="submit" className="cursor-pointer flex items-center bg-[#0056D2] w-fit space-x-2 text-white px-5 py-3 rounded-lg font-bold">
                                <p>Simpan Pertanyaan</p>
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}