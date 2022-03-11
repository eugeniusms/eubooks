import { getStaticProps } from "../pages/books/[id]"
import Details from "../pages/books"

const Books = (data) => {
    printHTML(data)
}

function printHTML(data) {
    console.log(data)

    // just show only one
    const allList = document.querySelectorAll('#printList')
    for (let list of allList) {
        list.remove()
    }

    const getDiv = document.querySelector("#akuSuka")

    for (let i = 0; i < 25; i++) {
        try {
            // divHref
            const divHref = document.createElement('div')
            divHref.id = "printList"
            divHref.class = data[i]["selfLink"]
            const divLapis2 = document.createElement('div')
            divLapis2.className = "w-full bg-white rounded-3xl shadow border p-6 w-64 hover:ease-in duration-300 hover:bg-slate-400"
            divLapis2.id = "printList"
            // gambar
            const imageBook = document.createElement('img')
            imageBook.alt = "gallery"
            imageBook.className = "block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-6 hover:-translate-y-6 hover:translate-x-6"
            imageBook.id = "printList"
            imageBook.src = data[i].volumeInfo["imageLinks"].thumbnail
            // judul
            const buttonTitle = document.createElement('button')
            buttonTitle.id = "printList"
            buttonTitle.className = "text-xs hover:text-white font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
            // buttonTitle.className = "block m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            // buttonTitle.innerText = data[i].volumeInfo["title"]
            const newList = document.createElement('p')
            newList.id = "printList"
            newList.innerText = '"' + data[i].volumeInfo["title"] + '"'
            newList.className = "text-white py-8 font-mono mt-1 font-thin capitalize leading-tight text-center"
            // send to sorting (src -> validation) (title, rating, image, link)
            newList.src = "buku"
            newList.rating = data[i].volumeInfo["averageRating"]
            newList.image = data[i].volumeInfo["imageLinks"].thumbnail
            newList.link = data[i]["selfLink"]
            
            const aHref = document.createElement('a')


            // aHref.href = '/books/' + newList.innerText

            // rating
            // const rating = document.createElement('p')
            // rating.id = "printList"
            // rating.innerText = data[i].volumeInfo["averageRating"]
            // generate rating star
            const ratingStar = document.createElement('div')
            ratingStar.id = "printList"
            ratingStar.className = "text-xs text-slate-400 font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
            
            let starCount = 0
            try {
                starCount = parseInt(data[i].volumeInfo["averageRating"], 10)
            } catch (e) {
                starCount = 0
            }

            if(starCount > 0) {
                ratingStar.innerHTML = generateStar(starCount)
            } else {
                ratingStar.innerText = "- Unrated -"
            }


            
            // to send url
            buttonTitle.class = data[i]["selfLink"]

            // append
            divLapis2.append(imageBook)

            buttonTitle.append(newList)
            aHref.append(buttonTitle)

            divLapis2.append(divHref)
            // divHref.append(divLapis1)

            const fusion = document.createElement('div')
            fusion.id = "printList"
            fusion.className = "justify-center p-8 rounded-3xl flex flex-wrap md:w-1/5"
            fusion.src = data[i]["selfLink"]

            fusion.append(aHref)
            fusion.append(divLapis2)
            // fusion.append(rating)
            fusion.append(ratingStar)

            getDiv.append(fusion)

        } catch(e) {
            console.log("ERROR")
        }
    }
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

// select semua button
setInterval(() => {
    // usefusion
    const allButton = document.querySelectorAll('button')
    for (let buton of allButton) {
        if (buton.id == "printList") {
            buton.addEventListener('click', function() {
                console.log(this.class)

                const tampilanDiv = document.createElement('div')
                tampilanDiv.id = "tampilan"
                
                Details(this.class)
            })
        }
    }

    // use fusion
    const allDiv = document.querySelectorAll('div')
    for (let divi of allDiv) {
        if (divi.id == "printList") {
            divi.addEventListener('click', function() {
                console.log(this.src)

                const tampilanDiv = document.createElement('div')
                tampilanDiv.id = "tampilan"
                
                Details(this.src)
            })
        }
    }
}, 1000)


export default Books;