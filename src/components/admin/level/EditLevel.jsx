import { useRouter } from "next/navigation"
export default function EditLevel({ level }) {
    const router = useRouter()
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%] space-y-5">
            <div className="flex items-center gap-5">
                <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-2xl font-bold">Ubah Level</p>
            </div>
            <div className="space-y-5">
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="namaLevel" className="text-lg font-bold">Nama Level</label>
                    <input type="text" value={level} disabled className="p-3 rounded-md border border-[#D1D1D1] bg-[#F6F6F6]" />
                </div>
                <div className="space-y-2 flex flex-col">
                    <label htmlFor="deskripsiLevel" className="text-lg font-bold">Deskripsi Level</label>
                    <textarea rows={4} type="text" className="focus:outline-none resize-none w-full border border-[#D1D1D1] p-3 rounded-md" placeholder="Masukkan Deskripsi Level.." />
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
        </div>
    )
}