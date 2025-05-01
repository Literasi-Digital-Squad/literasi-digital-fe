import Link from "next/link";

export default function FormDataDiri() {
    return (
        <div className="px-10 py-5 space-y-5 h-11/12 flex flex-col">
            <div>
                <p className="text-sm">Data Diri User</p>
                <p className="mt-2 font-bold text-[#0A2D61]">
                    Isi Data Diri Anda Terlebih Dahulu
                </p>
            </div>
            <form className="space-y-3 flex flex-col grow h-max justify-between">
                <div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nama" className="font-bold">
                            Nama <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="nama"
                            name="nama"
                            type="nama"
                            required
                            className="border p-2 rounded-md border-[#D1D1D1]"
                            placeholder="Masukan Nama Anda..."
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
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nomor_telepon" className="font-bold">
                            Nomor Telepon <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="nomor_telepon"
                            name="nomor_telepon"
                            required
                            className="border p-2 rounded-md border-[#D1D1D1]"
                            placeholder="Masukan Nomor Telepon Anda..."
                        />
                    </div>
                </div>
                <Link href={"/quiz/result"} className="w-full p-3 bg-primary cursor-pointer text-xl font-semibold flex gap-3 rounded-lg justify-center items-center text-white">
                    <p>Selesai</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </form>
        </div>
    )
}