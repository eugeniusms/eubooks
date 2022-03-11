import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav class="flex justify-between py-3 px-5 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            
            <div>
                <p class="inline-flex text-3xl font-thin dark:text-white">Eubooks</p>
                <Image src="/logo.png" class="inline-flex hover:ease-in duration-300 hover:rotate-45" width={40} height={40}/>
            </div>

            {/* <div><Link href="/"><a>Home</a></Link></div>
            <div><Link href="/about"><a>About</a></Link></div>
            <div><Link href="/books"><a>Book Listing</a></Link></div> */}

            {/* <div class="invisible md:visible">
                <button type="button">
                    Log In
                </button>
                <button type="button">
                    Sign Up
                </button>
            </div> */}

            <div class="invisible md:visible">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <Link href="/login">
                        <button type="button" class="inline-flex items-center py-2 px-4 text-sm text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                            Log In
                        </button>
                    </Link>

                    <Link href="/login">
                        <button type="button" class="inline-flex items-center py-2 px-4 text-sm text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
                        
        </nav>
    );
}
 
export default Navbar;