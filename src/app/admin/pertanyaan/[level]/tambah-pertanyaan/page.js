'use client'
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';
import Footer from '@/components/admin/Footer';
import { usePathname } from 'next/navigation';
import FormTambah from '@/components/admin/pertanyaan/FormTambah';
export default function TambahPertanyaan() {
    const pathName = usePathname();
    const parts = pathName.split("/");
    const path = parts[parts.length - 3];
    const level = parts[parts.length - 2];
    return (
        <div className="w-screen h-screen overflow-hidden font-poppins flex relative">
            <Sidebar isActive={path} />
            <div className="w-[85%] h-full">
                <Navbar />
                <FormTambah level={level}/>
                <Footer />
            </div>
        </div>
    );
}
