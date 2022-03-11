import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/books');
        }, 3000)
    }, [])

    // counting redirect to homepage
    useEffect(() => {
        setTimeout(() => {
            console.log(3)
        }, 1000)
        setTimeout(() => {
            console.log(2)
        }, 2000)
        setTimeout(() => {
            console.log(1)
        }, 3000)
    }, [])

    return (
        <div class="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Head>
            <title>Eubooks | About</title>
            <meta name="keywords" content="book"/>
        </Head>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       

        <p class="text-center text-4xl text-white font-bold">Oops...</p>
        <p class="text-center text-2xl text-slate-400">This page was not found, <br/> 
        but you can stay and have a drink.
        </p>

        <br/>

        <div class="flex justify-center">
          <Image src="/beer.jpg" class="block opacity-30 hover:ease-in duration-300 hover:opacity-50" width={600} height={300}/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        </div>
    );
}

export default NotFound;