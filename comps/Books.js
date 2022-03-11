import { getStaticProps } from "../pages/books/[id]"
import Details from "../pages/books"

// Fungsi Books digunakan untuk mengalihkan data yang dipanggil ke cetak HTML
const Books = (data) => {
    // Pencetakan HTML dilakukan oleh printHTML()
    printHTML(data)
}

// Fungsi ini berperan mencetak susunan HTML dari hasil pencarian user
function printHTML(data) {
    // Lakukan reset hasil setiap kali user melakukan pencarian
    const allList = document.querySelectorAll('#printList')
    for (let list of allList) {
        list.remove()
    }

    // Mengambil query #akuSuka
    const getDiv = document.querySelector("#akuSuka")

    // Untuk 25 object dalam array (25 buku) akan dilakukan pencetakan dengan object HTML berikut
    for (let i = 0; i < 25; i++) {
        try {
            // Menyusun link menuju fetch per buku dengan divHref
            const divHref = document.createElement('div')
            divHref.id = "printList"
            divHref.class = data[i]["selfLink"]
            const divLapis2 = document.createElement('div')
            divLapis2.className = "w-full bg-white rounded-3xl shadow border p-6 w-64 hover:ease-in duration-300 hover:bg-slate-400"
            divLapis2.id = "printList"

            // Menyusun gambar buku
            const imageBook = document.createElement('img')
            imageBook.alt = "gallery"
            imageBook.className = "block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-6 hover:-translate-y-6 hover:translate-x-6"
            imageBook.id = "printList"
            imageBook.src = data[i].volumeInfo["imageLinks"].thumbnail
            
            // Menyusun judul buku
            const buttonTitle = document.createElement('button')
            buttonTitle.id = "printList"
            buttonTitle.className = "text-xs hover:text-white font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
            buttonTitle.class = data[i]["selfLink"]
            // Menyusun isi judul buku dan stylenya
            const newList = document.createElement('p')
            newList.id = "printList"
            newList.innerText = '"' + data[i].volumeInfo["title"] + '"'
            newList.className = "text-white py-8 font-mono mt-1 font-thin capitalize leading-tight text-center"
            // Inisiasi object property untuk send to sorting (src -> validation) (title, rating, image, link) *terkait dengan pengurutan rating
            newList.src = "buku"
            newList.rating = data[i].volumeInfo["averageRating"]
            newList.image = data[i].volumeInfo["imageLinks"].thumbnail
            newList.link = data[i]["selfLink"]
    
            // Generate rating star
            const ratingStar = document.createElement('div')
            ratingStar.id = "printList"
            ratingStar.className = "text-xs text-slate-400 font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
            // Default nilai bintang adalah 0, ketika error -> undefined juga 0
            let starCount = 0
            try {
                starCount = parseInt(data[i].volumeInfo["averageRating"], 10)
            } catch (e) {
                starCount = 0
            }
            // Saat masih 0 maka statusnya adalah unrated, jika tidak maka generate bintangnya
            if(starCount > 0) {
                ratingStar.innerHTML = generateStar(starCount)
            } else {
                ratingStar.innerText = "- Unrated -"
            }

            // Memasukkan imageBook ke divLapis2
            divLapis2.append(imageBook)
            // Judul akan dimasukkan ke dalam button 
            buttonTitle.append(newList)
            // kemmudian divHref akan dimasukkan ke dalam divLapis2 juga
            divLapis2.append(divHref)

            // Fusion digunakan untuk menggabungkan semua komponen buku menjadi 1
            const fusion = document.createElement('div')
            fusion.id = "printList"
            fusion.className = "justify-center p-8 rounded-3xl flex flex-wrap md:w-1/5"
            fusion.src = data[i]["selfLink"]

            // Fusion menambahkan setiap komponen yang akan dicetak
            fusion.append(aHref)
            fusion.append(divLapis2)
            fusion.append(ratingStar)

            // Setelah semua didapati maka tambahkan fusion ke dalam getDiv
            getDiv.append(fusion)

        } catch(e) {
            console.log("ERROR")
        }
    }
}

// Fungsi untuk menggenerate banyaknya bintang dan susunannya
function generateStar(activeStar) {
    // Inisiasi div dari kumpulan bintang
    let starHTML = `<ul class="flex justify-center">`

    // Untuk bintang yang aktif panggilkan generateFullStar()
    for (let i = 0; i < activeStar; i++) {
        starHTML += generateFullStar()
    }

    // Untuk bintang yang tidak aktif panggilkan generateEmptyStar()
    if (activeStar < 5) {
        for (let i = 0; i < 5 - activeStar; i++) {
            starHTML +=generateEmptyStar()
        }
    }
    
    // Akhiri div
    starHTML += `</ul>`
    // Melakukan regex replace newline
    starHTML.replace(/\r?\n|\r/g, " ")

    // Mengembalikan susunan HTML yang telah terbentuk
    return (starHTML)
}

// Fungsi untuk mengembalikan HTML code bintang penuh
function generateFullStar() {
    return (
        `<li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
        </li>`
    )
}

// Fungsi untuk mengembalikan HTML code bintang kosong
function generateEmptyStar() {
    return (
        `<li>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
            </svg>
        </li>`
    )
}

// Set Interval untuk mengambil input click dari user ingin membuka buku yang mana
setInterval(() => {
    // Pada setiap button yang ada jika button itu adalah printList maka saat diklik
    // Akan mengambil Details
    const allButton = document.querySelectorAll('button')
    for (let buton of allButton) {
        if (buton.id == "printList") {
            // Mengambil info apakah button diklik
            buton.addEventListener('click', function() {
                // Menyusun tampilan
                const tampilanDiv = document.createElement('div')
                tampilanDiv.id = "tampilan"
                // Mengambil fetch data dengan Details()
                Details(this.class)
            })
        }
    }

    // Pada setiap div yang ada jika div itu adalah "printList" maka saat diklik
    // akan mengambil Details juga
    const allDiv = document.querySelectorAll('div')
    for (let divi of allDiv) {
        if (divi.id == "printList") {
            // Mengambil info apakah div diklik
            divi.addEventListener('click', function() {
                // Menyusun tampilan
                const tampilanDiv = document.createElement('div')
                tampilanDiv.id = "tampilan"
                // Mengambil fetch data dengan Details()
                Details(this.src)
            })
        }
    }
}, 1000)

export default Books;