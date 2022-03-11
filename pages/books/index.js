import Head from "next/head";
import BookDetails from "./BookDetails";
import Navbar from "../../comps/navbar";
import Search from "../../comps/Search";

// Mengambil data (fetch data) dari url API yang diberikan oleh user melalui Details()
const Details = ( url ) => {    

    // Melakukan fetch API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Memasukkan object data API satu buku ke dalam info untuk dipanggil melalui 
            // fungsi BookDetails yang terletakdi dalam ./BookDetails
            let info = data;
            BookDetails(info)
            })


    return (
        // Inisiasi tampilan dari index HTML ini
        <>
            {/* Inisiasi head halaman */}
            <Head>
                <title>Eubooks | Books</title>
                <meta name="keywords" content="book"/>  
            </Head>

            {/* Inisiasi navbar dan search untuk page ini */}
            <div className="border border-gray-200 dark:border-gray-700">
                    <Navbar />
                <div className="py-3 px-5 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <Search />
                </div>
            </div>

            {/* Tampilan content akan ditampilkan dalam div id="tampilan" */}
            <div id="tampilan" className="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                {/* Isi Content */}
            </div>
        </>
    )
}

export default Details;