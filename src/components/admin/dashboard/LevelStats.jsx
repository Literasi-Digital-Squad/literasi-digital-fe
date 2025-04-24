'use client'
import { useState } from "react";

export default function LevelStats() {
    const [levelData, setLevelData] = useState([
        { nama: "level 1", numberParticipant: 100, averageScore: 560, averageTime: 560 },
        { nama: "level 2", numberParticipant: 200, averageScore: 560, averageTime: 560 },
        { nama: "level 3", numberParticipant: 300, averageScore: 560, averageTime: 560 }
    ])
    const [isActive, setIsActive] = useState(0)
    const [isDrop, setIsDrop] = useState(false)
    const handleDropdown = (indexlevel) => {
        setIsDrop(!isDrop)
        setIsActive(indexlevel)
    }
    return (
        <div>
            <div className="flex justify-between mb-5">
                <p className="text-2xl font-bold">Level Stats</p>
                <div className="relative">
                    <div className="flex gap-5 items-center cursor-pointer border rounded-md py-1 px-4 justify-between" onClick={() => setIsDrop(!isDrop)}>
                        <p>{levelData[isActive].nama}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div id="dropdown" className={`${isDrop ? "" : ("hidden")} bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 absolute w-full`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {levelData.map((level, index) => (
                                <li key={index}>
                                    <div onClick={() => handleDropdown(index)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{level.nama}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-4 shadow-sm rounded-lg">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full h-fit bg-[#ECF9FF] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p>Level Name</p>
                        <p className="text-xl font-bold mt-1 capitalize">{levelData[isActive].nama}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full h-fit bg-[#0A2D61] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p>Number of Participant</p>
                        <p className="text-xl font-bold mt-1">{levelData[isActive].numberParticipant}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full h-fit bg-[#F57C00] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p>Average Score</p>
                        <p className="text-xl font-bold mt-1">{levelData[isActive].averageScore}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full h-fit bg-[#932121] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p>Average Time</p>
                        <p className="text-xl font-bold mt-1">{levelData[isActive].averageTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}