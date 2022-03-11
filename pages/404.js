import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';


const NotFound = () => {
    const router = useRouter();

    // Ketika NotFound maka user akan diarahkan ke '/books/' dalam 3 detik
    useEffect(() => {
        setTimeout(() => {
            router.push('/books');
        }, 3000)
    }, [])

    return (
        // Tampilan dari halaman error 404
        <div className="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            
            {/* Inisiasi head halaman */}
            <Head>
                <title>Eubooks | 404 Error</title>
                <meta name="keywords" content="book"/>
            </Head>

            <br/><br/><br/><br/><br/>
        
            {/* Menampilkan tulisan untuk dibaca oleh user saat error */}
            <p className="text-center text-4xl text-white font-bold">Oops...</p>
            <p className="text-center text-2xl text-slate-400">This page was not found, <br/> 
            but you can stay and have a drink.
            </p>

            <br/>

            {/* Menampilkan gambar beer.jpg untuk dilihat user */}
            <div className="flex justify-center">
            <Image src="/beer.jpg" className="block opacity-30 hover:ease-in duration-300 hover:opacity-50" width={600} height={300}/>
            </div>

            <br/><br/> <br/><br/><br/>

        </div>
    );
}

export default NotFound;