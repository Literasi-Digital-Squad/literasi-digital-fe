'use client'
import { useState } from "react"
import Link from "next/link"
export default function ListHasil() {
    const [listHasil, setListHasil] = useState([
        { nama_user: "Hanif", email: "hanif123@gmail.com", nomor_telepon: "08122222222", waktu_kuis: "Kamis, 27 Maret 2025 08.00", result_level: "Level 1" },
        { nama_user: "Hanif", email: "hanif123@gmail.com", nomor_telepon: "08122222222", waktu_kuis: "Kamis, 27 Maret 2025 08.00", result_level: "Level 1" },
        { nama_user: "Hanif", email: "hanif123@gmail.com", nomor_telepon: "08122222222", waktu_kuis: "Kamis, 27 Maret 2025 08.00", result_level: "Level 1" },
        { nama_user: "Hanif", email: "hanif123@gmail.com", nomor_telepon: "08122222222", waktu_kuis: "Kamis, 27 Maret 2025 08.00", result_level: "Level 1" }
    ])
    return (
        <div className="px-5 py-7 overflow-y-scroll h-[80%]">
            <p className="text-2xl font-bold">Rekap Jawaban</p>
            <div className="flex space-x-1 text-sm items-center mt-2">
                <p className=" text-[#9CA3AF]">Rekap Jawaban</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 text-[#9CA3AF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <p>List User</p>
            </div>
            <div className="flex w-full mt-2">
                <div className="border-[#E3E5E8] border rounded-lg px-3 py-2 flex items-center mr-3">
                    <input type="text" className="focus:outline-none text-sm" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-[#9CA3AF]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <button type="button" className="flex items-center border border-[#E3E5E8] text-[#9CA3AF] space-x-2 px-3 py-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    <p>Filter</p>
                </button>
            </div>
            {listHasil.length == 0 ? (
                <div className=" mt-12 flex-col flex items-center text-sm">
                    <img src="/assets/admin/bg-no-question.png" alt="" className="h-auto w-auto" />
                    <p className="font-bold mt-5">Belum Ada Hasil Jawaban</p>
                    <p className="text-[#546881]">Silahkan menunggu hasil jawaban dari user</p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-lg shadow-lg mx-5 mt-7">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                        <thead className="bg-[#0A2D61] text-white">
                            <tr>
                                <th className="px-4 py-5">Nama User</th>
                                <th className="px-4 py-5">Email</th>
                                <th className="px-4 py-5">Nomor Telepon</th>
                                <th className="px-4 py-5">Waktu Kuis</th>
                                <th className="px-4 py-5">Result Level</th>
                                <th className="px-4 py-5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listHasil.map((hasil, index) => (
                                <tr key={index} className="hover:bg-gray-100 odd:bg-gray-100 even:bg-white items-center">
                                    <td className="px-4 py-3">{hasil.nama_user}</td>
                                    <td className="px-4 py-3">{hasil.email}</td>
                                    <td className="px-4 py-3">{hasil.nomor_telepon}</td>
                                    <td className="px-4 py-3">{hasil.waktu_kuis}</td>
                                    <td className="px-4 py-3">{hasil.result_level}</td>
                                    <td className="px-4 py-3">
                                        <Link href={`/admin/rekap-jawaban/${index}`} className="flex items-center bg-[#0056D2] space-x-2 text-white px-5 py-3 rounded-lg w-fit cursor-pointer">
                                            <p>Detail</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}