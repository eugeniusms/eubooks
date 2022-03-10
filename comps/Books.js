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

    // <div class="flex flex-wrap w-1/5">
    //     <div class="w-full p-1 md:p-2">
    //         <img alt="gallery" class="block object-cover object-center w-50px h-50px rounded-lg"
    //           src="http://books.google.com/books/content?id=HkBlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
    //         <p>Cek Aja Bagaimana Jika Tulisannya Panjang Ya</p>
    //     </div>
    // </div>

    for (let i = 0; i < 25; i++) {
        try {
            // divlapis1
            const divLapis1 = document.createElement('div')
            divLapis1.className = "flex flex-wrap w-1/5"
            divLapis1.id = "printList"
            // divlapis2
            const divLapis2 = document.createElement('div')
            divLapis2.className = "w-full p-1 md:p-2"
            divLapis2.id = "printList"
            // gambar
            const imageBook = document.createElement('img')
            imageBook.alt = "gallery"
            imageBook.className = "block object-cover object-center w-50px h-50px rounded-lg"
            imageBook.id = "printList"
            imageBook.src = data[i].volumeInfo["imageLinks"].thumbnail
            // judul
            const newList = document.createElement('p')
            newList.id = "printList"
            newList.innerText = data[i].volumeInfo["title"]
            newList.className = "font-bold"
            // append
            divLapis2.append(imageBook)
            divLapis2.append(newList)
            divLapis1.append(divLapis2)
            getDiv.append(divLapis1)





            // -------------------- LAMA -----------------------------------
            // judul
            // const newList = document.createElement('p')
            // newList.id = "printList"
            // newList.innerText = data[i].volumeInfo["title"]
            // newList.className = "font-bold"
            // getDiv.append(newList)

            // // gambar
            // const imageBook = document.createElement('img')
            // imageBook.id = "printList"
            // imageBook.src = data[i].volumeInfo["imageLinks"].thumbnail
            // getDiv.append(imageBook)

            // // author
            // const authorBook = document.createElement('p')
            // authorBook.id = "printList"
            // authorBook.innerText = "Author : " + data[i].volumeInfo["authors"]
            // getDiv.append(authorBook)


        } catch(e) {
            console.log("ERROR")
        }
    }
}

export default Books;