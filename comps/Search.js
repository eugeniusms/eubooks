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
        <nav class="flex py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <link href="/dist/output.css" rel="stylesheet"></link>
        
        {/* new */}
        <div class="flex"> 

            <div class="flex-1">

            <div class="flex-1">
                {/* Search Book */}
                <div class="mb-6">
                    <label for="search" class="inline-flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search Book</label>
                        
                    <div class="container flex flex-wrap justify-between items-center mx-auto">
                        <div class="flex md:order-2">
                            <button id="searchButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-2 mb-0" onClick={tryAja}>
                                Search
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                            <input type="text" id="searchBook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder="Pemrograman Python 3"/>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

            <div id="meng">
            </div>
        
        </div>

        </nav>
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

export default Search;