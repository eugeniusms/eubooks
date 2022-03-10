import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div class="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <Head>
            <title>Eubooks | Home</title>
            <meta name="keywords" content="book"/>  
      </Head>
      <link href="/dist/output.css" rel="stylesheet"></link>
      
      <p class="text-center text-4xl text-white font-bold">Welcome to Eubooks!</p>
      <p class="text-center text-2xl text-slate-400">We will serve you by providing our best service.</p>

      {/* <Image src="https://jooinn.com/images/macbook-pro-on-brown-wooden-desk.jpg" class="bg-auto" /> */}

      <br/>
      <div class="flex justify-center">
          <Image src="/macbook.jpg" class="block opacity-30 hover:ease-in duration-300 hover:opacity-50" width={1000} height={500}/>
      </div>

      <br/>

      <div class="flex justify-center">
        <a href="/books">
          <button class="flex inline bg-blue-500 shadow-lg shadow-blue-500/50 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Start
          </button>
        </a>
        <a href="/about">
          <button class="flex inline bg-blue-500 shadow-lg shadow-blue-500/50 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Learn More
          </button>
        </a>
      </div>

      <p class="text-center text-4xl text-white font-bold">Built exclusively for you</p>
      <p class="text-center text-2xl text-slate-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
      <p  class="text-center text-2xl text-slate-400">mollit laborum — semper quis lectus nulla.</p>
      






























      {/* <section class="overflow-hidden text-gray-700 ">
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

      <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>  

      <div class="flex justify-end bg-gradient-to-r from-indigo-500">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <div class="block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-125">
        AKU
      </div>
      <div class="justify-items-center block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-45">
        AKUAA
      </div>
      <div class="block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110">
        AKU
      </div>

      <div class="flex justify-center ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>

      <Link href="/books">
        <a>See Book Listing</a>
      </Link>

      <div>
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <Link href="/about">
                        <button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                            Log In
                        </button>
                    </Link>

                    <Link href="/books">
                        <button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div> */}

    </div>
  );
}