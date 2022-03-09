import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <link href="/dist/output.css" rel="stylesheet"></link>

      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <p>Lorem Ipsum</p>
      <Link href="/books">
        <a>See Book Listing</a>
      </Link>

    </div>
  );
}