export default function Footer(params) {
    return (
        <div className="flex justify-between space-x-3 px-5 h-[10%] items-center border-t border-[#D1D1D1]">
            <p className="font-bold">© 2025 Cakap Digital. All rights reserved.</p>
            <div className="flex">
                <p className="border-r border-black px-2">Privacy Policy</p>
                <p className="border-r border-black px-2">Terms of Service</p>
                <p className="px-2">Sitemap</p>
            </div>
        </div>
    )
}