import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import GetData from './GetData';

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
                                <button id="searchButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0" onClick={tryAja}>
                                    Search
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="flex">
                                <button id="sortButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0" onClick={tryAja}>
                                    Sort by rating
                                </button>
                            </div>
                        </div>
                            
                    </div>

            <div id="meng">
            </div>
            <br/>

        </>
    );
}
 
function tryAja() {
    console.log("SUCCESS")

    const isiInput = document.querySelector('#searchBook')

    const linkNi = document.createElement('a')
    linkNi.href = 'https://www.googleapis.com/books/v1/volumes?q=' + isiInput.value

    const coba = document.createElement('p')
    coba.innerText = 'https://www.googleapis.com/books/v1/volumes?q=' + isiInput.value

    const all = document.querySelector('#meng')
    
    linkNi.append(coba)
    // all.append(linkNi)

    GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
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