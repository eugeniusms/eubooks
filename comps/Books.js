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
            divLapis2.className = "w-full bg-white rounded-3xl shadow border p-6 w-64 hover:ease-in duration-300 hover:scale-110"
            divLapis2.id = "printList"
            // gambar
            const imageBook = document.createElement('img')
            imageBook.alt = "gallery"
            imageBook.className = "block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-6"
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
            newList.innerText = data[i].volumeInfo["title"]
            newList.className = "text-white py-8 font-mono mt-1 font-thin capitalize leading-tight text-center"
            const aHref = document.createElement('a')
            // aHref.href = '/books/' + newList.innerText
            
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
            fusion.className = "p-8 rounded-3xl flex flex-wrap md:w-1/5"
            fusion.src = data[i]["selfLink"]

            fusion.append(aHref)
            fusion.append(divLapis2)

            getDiv.append(fusion)

        } catch(e) {
            console.log("ERROR")
        }
    }
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