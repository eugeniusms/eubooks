import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GetData from './GetData';
import Books from './Books';

const Search = () => {

    // const router = useRouter();

    // setInterval(() => {
    //     const buttonInput = document.querySelector('#searchButton')

    //     buttonInput.addEventListener('click', function() {
    //         const isiInput = document.querySelector('#searchBook')
    //         // router.push('/books/' +isiInput.value)
    //         // router.push('https://www.googleapis.com/books/v1/volumes?q=' + isiInput.value)
    //         GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value)
    //         // DataFetching('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value)
    //     })
    // }, 1000)

    return (
        <>
        <link href="/dist/output.css" rel="stylesheet"></link>
        
        {/* new */}
                {/* Search Book */}
                    {/* <div class="block">
                    <label for="search" class="inline-flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search Book</label>
                    </div> */}
                    <div class="flex justify-between">

                        <div class="flex flex-wrap items-center">
                            <div class="justify-between items-center w-full md:flex md:w-auto">
                                <input type="text" id="searchBook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder='"Kata Kunci"'/>
                            </div>

                            <div class="flex">
                                <button id="searchButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0" onClick={searchBro}>
                                    Search
                                </button>
                            </div>
                        </div>

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
 
function searchBro() {
    console.log("SUCCESS")

    const isiInput = document.querySelector('#searchBook')

    GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
}

function sortingBro() {
    let allObj = []
    const getAllBooksOnDisplay = document.querySelectorAll('p')
    for (let p of getAllBooksOnDisplay) {
        if (p.src == "buku") {
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
            allObj.push(newObj)
        }
    }
    sortTheArray(allObj)
    console.log(allObj)
}

function sortTheArray(array) {
    // bubble sort terurut kecil -> besar
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // skip if same
            if (i == j) {
                continue
            }
            // operate swap
            let rateA = array[i].volumeInfo["averageRating"]
            let rateB = array[j].volumeInfo["averageRating"]
            if (rateB == undefined) {
                continue
            } else if ((rateA == undefined) || (rateB >= rateA)) {
                let objTmp = array[i]
                array[i] = array[j]
                array[j] = objTmp
            }
        }
    }
    // besar -> kecil
    array.reverse()
    console.log(array)
    Books(array)
}

// Set Default Page
setTimeout(() => {
    // default saat input tidak ada
    try {
    const isiInput = document.querySelector('#searchBook')
        if (isiInput.value == "") {
            // Default program
            isiInput.value = "Psychology of Money"
            GetData('https://www.googleapis.com/books/v1/volumes?q='+ "psychologyofmoney" + '&&maxResults=25')
        }
    } catch (e) {
        console.log("Welcome!")
    }
}, 10)

export default Search;