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
        heading.className = "font-bold text-3xl text-center text-white"
        
        // Heading Subtitle (bisa ada dan tidak (undefined))
        const subheading = document.createElement('h3')
        subheading.id = "detailList"
        subheading.innerText = '"' + info.volumeInfo["subtitle"] + '"'
        subheading.className = "text-center text-white"

        // Image
        const image = document.createElement('img')
        image.id = "detailList"
        image.src = info.volumeInfo["imageLinks"].thumbnail
        image.className = "block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-6"
        const divLapis1 = document.createElement('div')
        divLapis1.className = "flex justify-center p-8 rounded-3xl"
        divLapis1.id = "detailList"
        // divlapis2
        const divLapis2 = document.createElement('div')
        divLapis2.className = "w-full bg-white rounded-3xl shadow border p-6 w-64 hover:ease-in duration-300 hover:scale-110"
        divLapis2.id = "detailList"
        
        divLapis2.append(image)
        divLapis1.append(divLapis2)

        // Authors
        const author = document.createElement('p')
        author.id = "detailList"
        author.innerText = "Author : " + info.volumeInfo["authors"]
        author.className = "text-center text-white"

        // Description
        const divDesc = document.createElement('div')
        divDesc.className = "box-content h-100 w-100 p-4 border-2 rounded-xl"
        divDesc.id = "detailList"
        const description = document.createElement('p')
        description.id = "detailList"
        description.innerHTML = info.volumeInfo["description"]
        description.className = "text-center text-white antialiased"

        // newLine
        const newLine0 = document.createElement('br')
        newLine0.id = "detailList"
        const newLine = document.createElement('br')
        newLine.id = "detailList"
        const newLine2 = document.createElement('br')
        newLine2.id = "detailList"

        // append dan validasi 

        tampilan.append(newLine0)
        tampilan.append(heading)

        //saat undefined maka tidak akan diappend
        if (subheading.innerText != '"undefined"') {
            tampilan.append(subheading)
        }

        tampilan.append(divLapis1)
        if (author.innerText != "undefined") {
            tampilan.append(author)
        }

        tampilan.append(newLine2)

        if (description.innerText != "undefined") {
            divDesc.append(description)
            tampilan.append(divDesc)
        }

        tampilan.append(newLine)
    
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
    backButton.className = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    
    setInterval(() => {
        backButton.addEventListener('click', function() {
            const detail = document.querySelectorAll("#detailList")
            for (let det of detail) {
                det.remove()
            }
        })
    }, 1000)

    const backDiv = document.createElement('div')
    backDiv.id = "printList"
    backDiv.className = "flex justify-center"

    const isiInput = document.querySelector('#searchBook')

    const getDiv = document.querySelector("#tampilan")

    backDiv.append(backButton)
    getDiv.append(backDiv)

    backButton.addEventListener('click', function() {
        GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
    })
}

export default BookDetails;