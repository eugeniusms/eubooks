import BookDetails from "./BookDetails";

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
        <div id="tampilan" class="py-3 px-5 text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h1>Details Page</h1>
        </div>
    )
}


export default Details;