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
            PrintDynamic(info)
            })

    return (
        <div id="tampilan">
            <h1>Details Page</h1>
        </div>
    )
}

function PrintDynamic(info) {

    // just show only one
    const allDetails = document.querySelectorAll('#detailList')
    for (let list of allDetails) {
        list.remove()
    }

    const tampilan = document.querySelector('#tampilan')

    const heading = document.createElement('h2')
    heading.id = "detailList"
    heading.innerText = info.volumeInfo["title"]

    tampilan.append(heading)
}


export default Details;