import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GetData from './GetData';
import Books from './Books';

// Fungsi digunakan untuk menampilkan bagian search
const Search = () => {

    return (
        <>
            <link href="/dist/output.css" rel="stylesheet"></link>
                <div class="flex justify-between">

                    {/* Komponen isian dan tombol search */}
                    <div class="flex flex-wrap items-center">
                        {/* Menyusun isian (Search Form) */}
                        <div class="justify-between items-center w-full md:flex md:w-auto">
                            <input type="text" id="searchBook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder='"Kata Kunci"'/>
                        </div>

                        {/* Menyusun tombol search yang jika diclick maka akan mengaktifkan fungsi searchBro() */}
                        <div class="flex">
                            <button id="searchButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0" onClick={searchBro}>
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Menyusun tombol untuk menata rating */}
                    <div>
                        <div class="flex">
                            <button id="sortButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0 hover:ease-in duration-300 hover:scale-110" onClick={sortingBro}>
                                Sort By Rating
                            </button>
                        </div>
                    </div>
                                
                </div>
            <br/>
        </>
    );
}
 
// Fungsi ini digunakan untuk fetch API menggunakan GetData()
function searchBro() {
    // Mengambil query searchBook untuk diambil valuenya dan di GET
    const isiInput = document.querySelector('#searchBook')
    GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
}

// Fungsi ini digunakan untuk sorting sesuai bintang yang diberikan
function sortingBro() {
    let allObj = []
    // Inisiasi untuk buku yang akan dibandingkan
    const getAllBooksOnDisplay = document.querySelectorAll('p')
    for (let p of getAllBooksOnDisplay) {
        if (p.src == "buku") {
            // Menyusun array dengan attribute sama
            const newObj = {

                "volumeInfo": {
                    "title": p.innerText.slice(1, p.innerText.length - 1),
                    "averageRating": p.rating,
                    "imageLinks": {
                        "thumbnail": p.image
                    }
                },
                "selfLink": p.link
            }
            // Menambahkan objek array sama ke allObj
            allObj.push(newObj)
        }
    }
    // Mengurutkan isi dari object
    sortTheArray(allObj)
}

// Fungsi ini digunakan untuk mengurutkan array object sesuai rating
function sortTheArray(array) {

    // Bubble Sort Algorithm Kecil -> Besar
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // Skip jika index sama
            if (i == j) {
                continue
            }
            // Inisiasi rateA dan rateB
            let rateA = array[i].volumeInfo["averageRating"]
            let rateB = array[j].volumeInfo["averageRating"]
            // Ketika memenuhi syarat maka lakukan swap
            if (rateB == undefined) {
                continue
            } else if ((rateA == undefined) || (rateB >= rateA)) {
                let objTmp = array[i]
                array[i] = array[j]
                array[j] = objTmp
            }
        }
    }
    // Ubah bentuk vektor menjadi dihitng dari belakang
    array.reverse()
    // Menampilkan ulang menggunakan Books() isi dari array baru (terurut)
    Books(array)
}

// Melakukan set default page (tampilan awal saat user pertama kali masuk)
setTimeout(() => {
    // Tampilan default saat error akan dicontinue saja
    try {
    // Mengambil query dari isian input
    const isiInput = document.querySelector('#searchBook')
        if (isiInput.value == "") {
            // isiInput akan diberi tulisan default berikut
            isiInput.value = "Psychology of Money"
            // Pencarian GetData default sebagai berikut
            GetData('https://www.googleapis.com/books/v1/volumes?q='+ "psychologyofmoney" + '&&maxResults=25')
        }
    } catch (e) {
        console.log("Welcome!")
    }
}, 10)

export default Search;