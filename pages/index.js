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

      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <p>Lorem Ipsum</p>
      <div class="p-8 bg-white rounded-3xl shadow border p-6 w-64">
        <p class="text-center font-bold text-purple-700 text-opacity-75">The quick brown fox ...</p>
        <p class="font-mono text-sky-400">APA INI FONT</p>
      </div>
      <button class="block m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        coba
      </button>

      <Link href="/books">
        <a>See Book Listing</a>
      </Link>

    </div>
  );
}