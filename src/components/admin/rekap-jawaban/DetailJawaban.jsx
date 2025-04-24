import { useRouter } from "next/navigation";
export default function DetailJawaban() {
    const router = useRouter()
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%] space-y-5">
            <div className="flex items-center gap-5">
                <div className="border border-[#E3E5E8] p-1 rounded-md cursor-pointer" onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-2xl font-bold">Detail Jawaban</p>
            </div>
            <div className="text-sm px-5">
                <p className="font-bold mb-5">Data Pengguna</p>
                <div className="rounded-md flex gap-5 items-center">
                    <div className="shadow-sm w-1/2 p-3 rounded-lg">
                        <div className="border-b flex items-center gap-2 border-[#888888] pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p>Hanif (30 Tahun)</p>
                        </div>
                        <div className="flex items-center gap-2 pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>Kamis, 27 Maret 2025 08.00</p>
                        </div>
                    </div>
                    <div className="flex shadow-sm w-1/2 p-3 h-fit justify-center gap-5 rounded-lg">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>hanif123@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p>08122222222</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 space-y-3">
                <p className="p-2 px-3 bg-[#D32F2F] rounded-lg w-fit text-white font-semibold">Soal 1</p>
                <p className="font-bold p-3 shadow-sm rounded-lg">Berikut adalah beberapa tampilan email yang diterima pengguna. Manakah yang menunjukkan tanda-tanda email phishing?</p>
                <div className="grid grid-cols-3 gap-5">
                    <div className="p-2 rounded-md bg-[#D32F2F] h-fit ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Example_bank_phishing_email.svg/1200px-Example_bank_phishing_email.svg.png" alt="" />
                    </div>
                    <div className="p-2 border border-[#D1D1D1] h-fit rounded-md">
                        <img src="https://uk.norton.com/content/dam/blogs/images/norton/am/phishing-email-examples-02.jpg" alt="" />
                    </div>
                    <div className="p-2 border border-[#D1D1D1] h-fit rounded-md">
                        <img src="https://townsquare.media/site/39/files/2017/04/key-bank-cny-scam.png?w=551&q=75" alt="" className="rounded-md" />
                    </div>
                </div>
            </div>
            <div className="px-5 space-y-3">
                <p className="p-2 px-3 bg-[#D32F2F] rounded-lg w-fit text-white font-semibold">Soal 2</p>
                <p className="font-bold p-3 shadow-sm rounded-lg">Berdasarkan email di bawah, apa yang menjadi tanda bahwa email tersebut merupakan scam atau penipuan?</p>
                <div className="grid grid-cols-3 gap-5">
                    <div className="p-2 border border-[#D1D1D1] h-fit rounded-md">
                        <img src="https://townsquare.media/site/39/files/2017/04/key-bank-cny-scam.png?w=551&q=75" alt="" className="rounded-md" />
                    </div>
                </div>
                <div className="text-center bg-[#43A047] p-2 text-white rounded-md">
                    Email menggunakan salam yang bersifat umum dan tidak mencantumkan nama penerimlihan 1
                </div>
                <div className="text-center p-2 border border-[#D1D1D1] rounded-md">
                    Email dikirim dari alamat yang terlihat resmi dan sesuai dengan institusi terkait.
                </div>
                <div className="text-center p-2 border border-[#D1D1D1] rounded-md">
                    Pesan dalam email sangat jelas dan tidak ada kesalahan tata bahasa.
                </div>
            </div>
        </div>
    );
}