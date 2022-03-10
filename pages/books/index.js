import BookDetails from "./BookDetails";
import Navbar from "../../comps/navbar";
import Search from "../../comps/Search";

const Details = ( url ) => {

    for (let i = 0; i < 10; i++) {
        console.log(url)
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data["items"])
            let info = data;
            // console.log(books)
            BookDetails(info)
            })


    return (
        <>
        <div class="border border-gray-200 dark:border-gray-700">
                <Navbar />
                <Search />
        </div>
        <div id="tampilan" class="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {/* Isi Content */}
        </div>
        </>
    )
}


export default Details;