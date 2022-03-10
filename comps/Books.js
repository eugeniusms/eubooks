const Books = (data) => {
    printHTML(data)
}

function printHTML(data) {
    console.log(data)

    const allList = document.querySelectorAll('#printList')
    for (let list of allList) {
        list.remove()
    }


    const getDiv = document.querySelector("#akuSuka")

    for (let i = 0; i < 25; i++) {
        try {
            // judul
            const newList = document.createElement('p')
            newList.id = "printList"
            newList.innerText = data[i].volumeInfo["title"]
            newList.className = "font-bold"
            getDiv.append(newList)

            // gambar
            const imageBook = document.createElement('img')
            imageBook.id = "printList"
            imageBook.src = data[i].volumeInfo["imageLinks"].thumbnail
            getDiv.append(imageBook)

            // author
            const authorBook = document.createElement('p')
            authorBook.id = "printList"
            authorBook.innerText = "Author : " + data[i].volumeInfo["authors"]
            getDiv.append(authorBook)


        } catch(e) {
            console.log("ERROR")
        }
    }
}

export default Books;