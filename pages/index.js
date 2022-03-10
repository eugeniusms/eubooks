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
                <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
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

      <div class="container grid grid-cols-6 gap-2 mx-auto">
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" />
          </div>
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" />
          </div>
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" /> 
          </div>
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" />
          </div>
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" />
          </div>
          <div class="w-full rounded">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                  alt="image" />
          </div>
      </div>

      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <p>Lorem Ipsum</p>
      <Link href="/books">
        <a>See Book Listing</a>
      </Link>

    </div>
  );
}