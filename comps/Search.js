import Link from 'next/link'

const Navbar = () => {
    return (
        <nav class="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <div>
            <div className="logo">
                <h1>eubooks</h1>
            </div>
            <div class="rounded">
                <input type="text" />
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Search
                </button>
            </div>
            <Link href="/about"><a>Log In</a></Link>
            <Link href="/books"><a>Sign Up</a></Link>
        </div>
        </nav>
    );
}
 
export default Navbar;