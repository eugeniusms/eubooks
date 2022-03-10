import BookDetails from "./BookDetails";

const Details = ( url ) => {

    // setTimeout(() => {
    //     console.log(url)
    // }, 3000)

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
        <div id="tampilan">
            <h1>Details Page</h1>
        </div>
    )
}


export default Details;