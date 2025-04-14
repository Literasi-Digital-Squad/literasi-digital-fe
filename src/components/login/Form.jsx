import Link from "next/link"
export default function Form() {
    return (
        <div className="relative h-screen w-screen flex justify-between font-poppins">
            <div className="absolute h-4/5 w-full flex justify-center self-center">
                <div className="w-3/4 flex justify-between">
                    <form action="" className="p-10 h-full w-2/4 flex items-center rounded-[40px] shadow">
                        <div className="w-full space-y-10">
                            <div className="space-y-5">
                                <div className=" text-2xl">Welcome to <span className=" text-[#0089ED] font-semibold">Cakap</span></div>
                                <div className=" font-bold text-4xl">Masuk</div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="p-4 rounded-lg w-full border border-[#D1D1D1] mb-5" placeholder="Masukkan Email Anda" />
                                <label htmlFor="password">Password</label>
                                <input type="text" className="p-4 rounded-lg w-full border border-[#D1D1D1]" placeholder="Masukkan Password Anda" />
                                <p className=" text-[#4285F4] text-end text-sm">Forgot Password</p>
                            </div>
                            <Link href="/admin/pertanyaan" className="w-full p-4 text-center text-lg items-center justify-center gap-3 text-white bg-primary shadow-2xl rounded-2xl flex cursor-pointer">
                                <p>Masuk</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </form>
                    <img src="/assets/login/graphic.png" alt="" className="h-full" />
                </div>
            </div>
            <div className="px-20 py-5 text-3xl font-semibold text-[#4285F4] ">LOGO</div>
            <img src="/assets/login/background.png" alt="" className="h-full" />
        </div>
    )
}