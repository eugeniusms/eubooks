import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <Head>
            <title>Eubooks | Home</title>
            <meta name="keywords" content="book"/>  
      </Head>
      <link href="/dist/output.css" rel="stylesheet"></link>


      <section class="overflow-hidden text-gray-700 ">
    <div class="container px-5 py-2 mx-auto lg:pt-2 lg:px-2">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block m-auto object-cover object-center w-25px h-25px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          <p>Cek Aja Bagaimana Jika Tulisannya Panjang Ya</p>
          </div>
        </div>
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
        </div>
        <div class="flex flex-wrap w-1/5">
          <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
              src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
          </div>
        </div>
      </div>
    </div>
  </section>

      <div class="wrapper bg-gray-400 antialiased text-gray-900">
        <div>
            
            <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />    
            
        <div class="relative px-4 -mt-16  ">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
              <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            2 baths  &bull; 3 rooms
          </div>  
            </div>
            
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
        
          <div class="mt-1">
            $1800
            <span class="text-gray-600 text-sm">   /wk</span>
          </div>
          <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
          </div>  
          </div>
        </div>
          
        </div>
      </div>

      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <p>Lorem Ipsum</p>
      <div class="p-8 bg-white rounded-3xl shadow border p-6 w-64 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        <p class="py-8 text-sm text-center font-bold text-purple-700 text-opacity-75">The quick brown fox ...</p>
        <p class="font-mono text-sky-400">APA INI FONT</p>
      </div>
      <button class="block m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        coba
      </button>
      <button class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        coba2
      </button>
      <button class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        coba3
      </button>

      <Link href="/books">
        <a>See Book Listing</a>
      </Link>

    </div>
  );
}