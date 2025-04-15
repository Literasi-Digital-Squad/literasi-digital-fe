import { useState } from "react";
import InputFoto from "./InputFoto";
import { useRouter } from "next/navigation";
export default function FormTambah() {
    const router = useRouter()
    const [jawaban, setJawaban] = useState([{ jawaban: "", image: "", isTrue: false }])

    const tambahJawaban = () => {
        setJawaban([
            ...jawaban,
            { jawaban: "", image: "", isTrue: false }
        ]);
    };
    const toggleIsTrue = (index) => {
        setJawaban(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, isTrue: !item.isTrue }
                    : item
            )
        );
    };


    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%] space-y-5">
            <div className="flex items-center gap-5">
                <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-2xl font-bold">Level Literasi</p>
            </div>
            <form action="" className="space-y-5">
                <div className="grid grid-cols-5 gap-5 p-5 rounded-md shadow-md h-max">
                    <div className="col-span-1 flex flex-col gap-2">
                        <label htmlFor="inputFoto" aria-required className="text-lg font-bold">Gambar</label>
                        <InputFoto />
                    </div>
                    <div className="col-span-4 flex flex-col gap-2">
                        <label htmlFor="pertanyaan" aria-required className="text-lg font-bold">Pertanyaan</label>
                        <textarea name="" id="" className="flex-grow w-full border-2 p-2 rounded-md border-[#D1D1D1]" placeholder="Masukkan Pertanyaan.."></textarea>
                    </div>
                </div>
                <div className="p-5 rounded-md shadow-md flex flex-col gap-2">
                    <label htmlFor="jawaban" className="text-lg font-bold">Jawaban</label>
                    <div className="grid grid-cols-3 gap-5">
                        {jawaban.map((item, index) => (
                            <div key={index} className="flex flex-col items-center col-span-1 gap-3 border-dashed border-2 border-[#D1D1D1] p-5 rounded-lg">
                                <div className="flex justify-between w-full">
                                    <div className='p-2 bg-[#ECF9FF] rounded-full w-min'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-secondary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </div>
                                    <div className={`p-2 rounded-full w-min cursor-pointer ${item.isTrue ? 'bg-[#9CD99E]' : 'bg-[#F6F6F6]'}`} onClick={() => toggleIsTrue(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                </div>
                                <textarea name="" id="" rows={3} className="focus:outline-none resize-none w-full text-center" placeholder="Masukkan Jawaban" />
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
                    <button type="button" onClick={() => router.back()} className="cursor-pointer flex items-center bg-[#0056D2] w-fit space-x-2 text-white px-5 py-3 rounded-lg font-bold">
                        <p>Simpan Pertanyaan</p>
                    </button>
                </div>
            </form>
        </div>
    )
}