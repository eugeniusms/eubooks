import Head from 'next/head'
import Image from 'next/image';

const About = () => {
    return (
        <div class="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Head>
            <title>Eubooks | About</title>
            <meta name="keywords" content="book"/>
        </Head>

        <br/>

        <p class="text-center text-4xl text-white font-bold">About Eubooks</p>
        <p class="text-center text-2xl text-slate-400">Made with love by Eugenius Mario.</p>

        <br/>

        <div class="flex justify-center">
          <Image src="/eubooks.jpg" class="block opacity-30 hover:ease-in duration-300 hover:opacity-50" width={900} height={450}/>
        </div>

        <div class="flex justify-center">
            <a href="mailto:eugeniusms@gmail.com?subject=Improve Eubooks">
                <button class="flex inline bg-blue-500 shadow-lg shadow-blue-500/50 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Help Me Improve This
                </button>
            </a>
            <a href="/">
                <button class="flex inline py-4 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Back
                </button>
            </a>
        </div>

        <br/>
        
        </div>
    );
}
 
export default About;