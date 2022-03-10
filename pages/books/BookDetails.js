import GetData from "../../comps/GetData"

const BookDetails = (data) => {
    PrintDynamic(data)
    deleteAllSearchResult()
}

function PrintDynamic(info) {

    // just show only one
    const allDetails = document.querySelectorAll('#detailList')
    for (let list of allDetails) {
        list.remove()
    }

    try {
        const tampilan = document.querySelector('#tampilan')

        // Heading Title 
        const heading = document.createElement('h2')
        heading.id = "detailList"
        heading.innerText = info.volumeInfo["title"]
        
        // Heading Subtitle (bisa ada dan tidak (undefined))
        const subheading = document.createElement('h3')
        subheading.id = "detailList"
        subheading.innerText = info.volumeInfo["subtitle"] 

        // Authors
        const author = document.createElement('p')
        author.id = "detailList"
        author.innerText = info.volumeInfo["authors"]

        // Description
        const description = document.createElement('p')
        description.id = "detailList"
        description.innerHTML = info.volumeInfo["description"]

        tampilan.append(heading)
        tampilan.append(subheading)
        tampilan.append(author)
        tampilan.append(description)
    
    } catch (e) {
        console.log("ERROR")
    }
}

function deleteAllSearchResult() {
    const allSearchResult = document.querySelectorAll('#printList')
    for (let list of allSearchResult) {
        list.remove()
    }

    // create new button for back
    const backButton = document.createElement('button')
    backButton.id = "printList"
    backButton.innerText = "Back"
    const isiInput = document.querySelector('#searchBook')

    const getDiv = document.querySelector("#tampilan")
    getDiv.append(backButton)

    backButton.addEventListener('click', function() {
        GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
    })
}

export default BookDetails;