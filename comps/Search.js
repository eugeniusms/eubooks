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
        <nav class="flex py-3 px-5 text-gray-700 bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <link href="/dist/output.css" rel="stylesheet"></link>
            <div>
                <div className="logo">
                    <p class="inline-flex text-3xl font-thin dark:text-white">Eubooks</p>
                    <Image src="/logo.png" class="inline-flex" width={40} height={40}/>
                </div>

                <div class="mb-6">
                    <label for="email" class="inline-flex mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search Book</label>
                    
                    <div class="container flex flex-wrap justify-between items-center mx-auto">
                        <div class="flex md:order-2">
                            <button id="searchButton" type="button" class="inline-flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={tryAja}>
                                Search  
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                            <input type="text" id="searchBook" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pemrograman Python 3" required />
                        </div>
                    </div>

                </div>

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
            </div>

            <div id="meng">
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
    all.append(linkNi)

    GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
}

export default Search;