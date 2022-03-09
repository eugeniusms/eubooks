import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/books');
        }, 3000)
    }, [])

    // counting redirect to homepage
    useEffect(() => {
        setTimeout(() => {
            console.log(3)
        }, 1000)
        setTimeout(() => {
            console.log(2)
        }, 2000)
        setTimeout(() => {
            console.log(1)
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="./books"><a>Bookspage</a></Link></p>
        </div>
    );
}

export default NotFound;