import Link from "next/link"
export default function ListLevel() {
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%]">
            <p className="text-2xl font-bold">Level Literasi</p>
            <div className="flex space-x-1 text-sm items-center">
                <p className=" text-[#9CA3AF]">Pertanyaan</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>Level Literasi</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg mx-5 mt-7">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                    <thead className="bg-[#0A2D61] text-white">
                        <tr>
                            <th className="px-4 py-5">Nama Level</th>
                            <th className="px-4 py-5">Deskripsi Level</th>
                            <th className="px-4 py-5">Jumlah Pertanyaan</th>
                            <th className="px-4 py-5 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white">
                            <td className="px-4 py-3">Level 1</td>
                            <td className="px-4 py-3">Pernah tahu produk teknologi tingkat dasar, tapi belum pernah pakai atau sangat jarang menggunakan</td>
                            <td className="px-4 py-5 text-center">100</td>
                            <td className="px-4 py-3">
                                <Link href="/admin/pertanyaan/level-1" className="flex items-center bg-[#0056D2] space-x-2 text-white px-5 py-3 rounded-lg">
                                    <p>Detail</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white">
                            <td className="px-4 py-3">Level 2</td>
                            <td className="px-4 py-3">Paham produk teknologi tingkat dasar, dan sudah menggunakan meskipun jarang</td>
                            <td className="px-4 py-5 text-center">100</td>
                            <td className="px-4 py-3">
                                <Link href="/admin/pertanyaan/level-2" className="flex items-center bg-[#0056D2] space-x-2 text-white px-5 py-3 rounded-lg">
                                    <p>Detail</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white">
                            <td className="px-4 py-3">Level 3</td>
                            <td className="px-4 py-3">Paham produk teknologi tingkat dasar, dan sudah menggunakan secara regular/harian</td>
                            <td className="px-4 py-5 text-center">100</td>
                            <td className="px-4 py-3">
                                <Link href="/admin/pertanyaan/level-3" className="flex items-center bg-[#0056D2] space-x-2 text-white px-5 py-3 rounded-lg">
                                    <p>Detail</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}