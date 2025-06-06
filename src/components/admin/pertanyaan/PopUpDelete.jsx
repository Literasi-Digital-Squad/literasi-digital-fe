'use client';
import Loading from "@/components/Loading";
import axiosInstance from "@/utils/axiosInstance";
import { useState } from "react";
export default function PopUpDelete({ isDelete, setIsDelete, data }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleDelete = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.delete(`/admin/questions/${data?.id}`);
            setIsDelete(false);
        } catch (error) {
            setError("Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {isDelete == true ? (
                <div className="absolute w-screen h-screen bg-[#c1c6c678] flex items-center justify-center">
                    <div className="p-5 rounded-lg bg-white w-lg relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 end-5 absolute cursor-pointer" onClick={() => setIsDelete(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <div className="flex flex-col items-center text-center mt-10">
                            <div className="bg-[#FBCDCD] p-3 w-min rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#932121]">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="font-bold text-xl mt-5">Apakah Anda yakin ingin menghapus pertanyaan ini ?</p>
                            <p className="text-[#909DAD]">Menghapus pertanyaan ini akan mengakibatkan Anda tidak dapat mengaksesnya lagi. Tindakan ini tidak dapat dibatalkan.</p>
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="flex mt-5 gap-3">
                            <button type="button" className="rounded-sm p-2 border border-secondary text-secondary cursor-pointer w-full" onClick={() => setIsDelete(false)}>Kembali</button>
                            <button type="button" className="rounded-sm p-2 bg-secondary text-white cursor-pointer w-full flex justify-center" onClick={() => handleDelete()}>
                                {loading ? (<Loading />) : "Ya, Hapus"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : ""}
        </>
    )
}