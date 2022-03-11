import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
      return (
      // Tampilan homepage
      <div className="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">

          {/* Inisiasi head halaman  */}
          <Head>
                <title>Eubooks | Landing</title>
                <meta name="keywords" content="book"/>  
          </Head>
          <link href="/dist/output.css" rel="stylesheet"></link>
          
          <br/>

          {/* Mencetak selamat datang dan slogan */}
          <p className="text-center text-4xl text-white font-bold">Welcome to Eubooks!</p>
          <p className="text-center text-2xl text-slate-400">We will serve you by providing our best service.</p>

          <br/>

          {/* Mencetak gambar landing */}
          <div className="flex justify-center">
              <Image src="/macbook.jpg" className="block opacity-30 hover:ease-in duration-300 hover:opacity-50" width={1000} height={500}/>
          </div>

          <br/>

          {/* Inisiasi indexPage untuk menyusun random quote di sini */}
          <div id="indexPage"></div>

          <br/>

          {/* Menyusun dua tombol utama */}
          <div className="flex justify-center">
            <a href="/books">
              {/* Tombol ini menuju ke program utama pencarian buku */}
              <button className="flex inline bg-blue-500 shadow-lg shadow-blue-500/50 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get Started
              </button>
            </a>
            {/* Tombol ini menuju about page */}
            <a href="/about">
              <button className="flex inline py-4 px-8 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Learn More
              </button>
            </a>
          </div>

          <br/>

          {/* Menyusun slogan by slogan */}
          <p className="text-center text-4xl text-white font-bold">Built exclusively for you</p>
          <p className="text-center text-2xl text-slate-400">We made this to help facilitate literacy access for everyone</p>

      </div>
  );
}

// Fungsi ini digunakan untuk mengembalikan isi array -> book quotes secara acak
function getQuote() {
    const quoteText = [
      "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.",
      "Many people, myself among them, feel better at the mere sight of a book.",
      "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
      "When I have a little money, I buy books; and if I have any left, I buy food and clothes.",
      "If you don’t like to read, you haven’t found the right book.",

      "A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.",
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
      "Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book.",
      "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.",
      "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",

      "I love books. I adore everything about them. I love the feel of the pages on my fingertips. They are light enough to carry, yet so heavy with worlds and ideas. I love the sound of the pages flicking against my fingers. Print against fingerprints. Books make people quiet, yet they are so loud.",
      "Books were my pass to personal freedom.",
      "No man can be called friendless who has God and the companionship of good books.",
      "A half-read book is a half-finished love affair.",
      "If you would tell me the heart of a man, tell me not what he reads, but what he rereads.",

      "A children’s story that can only be enjoyed by children is not a good children’s story in the slightest.",
      "Wear the old coat and buy the new book.",
      "The best books… are those that tell you what you know already.",
      "I cannot remember the books I’ve read any more than the meals I have eaten; even so, they have made me.",
      "I owe everything I am and everything I will ever be to books."
    ]
    return (quoteText[Math.floor(Math.random()*20)]) // random quote
}

setInterval(() => {
    // Memilih query p
    const quoteDel = document.querySelectorAll('p')
    // Lakukan remove quote disaat id merupakan quoteId
    for (let quote of quoteDel) {
      if (quote.id == "quoteId") {
        quote.remove()
      }
    }

    // Mengambil query p hal ini digunakan untuk menyusun quote yang ditampilkan ke layar
    const quoteDiv = document.createElement('p')
    quoteDiv.id = "quoteId"
    quoteDiv.className = "italic text-center text-xl text-slate-400"
    quoteDiv.innerText = '"' + getQuote() + '"'

    // Quote akan ditampilkan dengan cara append ke indexPage
    const indexPg = document.querySelector('#indexPage')
    indexPg.append(quoteDiv)
}, 3141) // Berubah setiap 3141 ms | Funfact I choose this because (3.141 -> pi number)