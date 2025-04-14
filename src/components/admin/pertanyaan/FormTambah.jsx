import InputFoto from "./InputFoto";
export default function FormTambah() {
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%]">
            <div className="flex items-center gap-5">
                <div className="border border-[#E3E5E8] p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-2xl font-bold">Level Literasi</p>
            </div>
            <form action="">
                <div className="grid grid-cols-5 gap-5 p-5 rounded-md shadow-md h-max">
                    <div className=" col-span-1">
                        <label htmlFor="inputFoto" aria-required className="text-lg font-bold">Gambar</label>
                        <InputFoto />
                    </div>
                    <div className="col-span-4 flex flex-col">
                        <label htmlFor="inputFoto" aria-required className="text-lg font-bold">Pertanyaan</label>
                        <textarea name="" id="" className="flex-grow w-full border-2 p-2 rounded-md border-[#D1D1D1]" placeholder="Masukkan Pertanyaan.."></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}