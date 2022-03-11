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

        // Star Rating
        const ratingStar = document.createElement('div')
        ratingStar.id = "detailList"
        ratingStar.className = "text-xs text-slate-400 font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
        
        let starCount = 0
        try {
            starCount = parseInt(info.volumeInfo["averageRating"], 10)
        } catch (e) {
            starCount = 0
        }

        if(starCount > 0) {
            ratingStar.innerHTML = generateStar(starCount)
        } else {
            ratingStar.innerText = "- Unrated -"
        }

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

        // gambar
        tampilan.append(divLapis1)

        tampilan.append(ratingStar)

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


function generateStar(activeStar) {
    let starHTML = `<ul class="flex justify-center">`
    for (let i = 0; i < activeStar; i++) {
        starHTML += generateFullStar()
    }
    
    if (activeStar < 5) {
        for (let i = 0; i < 5 - activeStar; i++) {
            starHTML +=generateEmptyStar()
        }
    }
    
    starHTML += `</ul>`

    starHTML.replace(/\r?\n|\r/g, " ")
    console.log(starHTML)
    return (starHTML)
}

function generateFullStar() {
    return (
        `<li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
        </li>`
    )
}

function generateEmptyStar() {
    return (
        `<li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
            </svg>
        </li>`
    )
}


export default BookDetails;