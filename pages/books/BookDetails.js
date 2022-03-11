import GetData from "../../comps/GetData"

// Fungsi ini mengambil data (berupa object dari API satu buku)
const BookDetails = (data) => {
    // Kemudian dicetak melalui fungsi PrintDynamic()
    PrintDynamic(data)
    // Dan hapus juga search result (buku-buku halaman book search)
    deleteAllSearchResult()
}

// Fungsi ini digunakan untuk mencetak secara dinamis objek-objek dalam API buku
function PrintDynamic(info) {

    // Setiap pengambilan data -> info akan direset terlebih dahulu sehingga hanya
    // satu buku saja yang akan diidentifikasi di dalam halaman
    const allDetails = document.querySelectorAll('#detailList')
    for (let list of allDetails) {
        list.remove()
    }

    // Pembuatan object HTML dimulai untuk membentuk halaman, perlu menjadi catatan jika
    // error maka yang terjadi adalah data berlipat, hal ini tidak perlu diperhatikan
    try {
        // Mengambil query #tampilan di dalam halaman
        const tampilan = document.querySelector('#tampilan')

        // Menyusun Heading Title 
        const heading = document.createElement('h2')
        heading.id = "detailList"
        heading.innerText = info.volumeInfo["title"]
        heading.className = "font-bold text-3xl text-center text-white"
        
        // Menyusun Heading Subtitle (bisa ada dan tidak (undefined))
        const subheading = document.createElement('h3')
        subheading.id = "detailList"
        subheading.innerText = '"' + info.volumeInfo["subtitle"] + '"'
        subheading.className = "text-center text-white"

        // Menyusun Image beserta komponen pengurungnya
        const image = document.createElement('img')
        image.id = "detailList"
        image.src = info.volumeInfo["imageLinks"].thumbnail
        image.className = "block m-auto object-cover object-center w-30px h-30px rounded-lg hover:ease-in duration-300 hover:scale-110 hover:rotate-6"
        const divLapis1 = document.createElement('div')
        divLapis1.className = "flex justify-center p-8 rounded-3xl"
        divLapis1.id = "detailList"
        const divLapis2 = document.createElement('div')
        divLapis2.className = "w-full bg-white rounded-3xl shadow border p-6 w-64 hover:ease-in duration-300 hover:scale-110"
        divLapis2.id = "detailList"
        // Memasukkan komponen menjadi satu bagian saja
        divLapis2.append(image)
        divLapis1.append(divLapis2)

        // Menyusun Star Rating
        const ratingStar = document.createElement('div')
        ratingStar.id = "detailList"
        ratingStar.className = "text-xs text-slate-400 font-medium rounded-lg px-5 py-2.5 text-center hover:ease-in duration-300 hover:text-sm"
        // Akan dihitung ratingnya ada berapa sesuai rating buku, jika rating error (undefined)
        // Maka beri nilai 0 pada starCount
        let starCount = 0
        try {
            starCount = parseInt(info.volumeInfo["averageRating"], 10)
        } catch (e) {
            starCount = 0
        }
        // Saat tidak nol maka ada bintang, generate bintang tersebut melalui generateStar()
        // Saat nol berarti undefined -> cetak unrated
        if(starCount > 0) {
            ratingStar.innerHTML = generateStar(starCount)
        } else {
            ratingStar.innerText = "- Unrated -"
        }

        // Menyusun Authors
        const author = document.createElement('p')
        author.id = "detailList"
        author.innerText = "Author : " + info.volumeInfo["authors"]
        author.className = "text-center text-white"

        // Menyusun Description
        const divDesc = document.createElement('div')
        divDesc.className = "box-content h-100 w-100 p-4 border-2 rounded-xl"
        divDesc.id = "detailList"
        const description = document.createElement('p')
        description.id = "detailList"
        description.innerHTML = info.volumeInfo["description"]
        description.className = "text-center text-white antialiased"

        // Menyusun baris-baris yang akan digunakan dalam halaman
        const newLine0 = document.createElement('br')
        newLine0.id = "detailList"
        const newLine = document.createElement('br')
        newLine.id = "detailList"
        const newLine2 = document.createElement('br')
        newLine2.id = "detailList"

        // Memulai penambahan elemen ke halaman dan pengecekan error tidaknya
        tampilan.append(newLine0)
        // Menambahkan heading
        tampilan.append(heading)
        // Menambahkan subheading, saat tak ada maka lewati penambahan object HTML
        if (subheading.innerText != '"undefined"') {
            tampilan.append(subheading)
        }
        // Menambahkan gambar, saat tak ada maka lewati penambahan object HTML
        tampilan.append(divLapis1)
        // Menambahkan rating
        tampilan.append(ratingStar)
        // Menambahkan authors, saat tak ada maka lewati penambahan object HTML
        if (author.innerText != "undefined") {
            tampilan.append(author)
        }
        tampilan.append(newLine2)
        // Menambahkan description saat tak ada maka lewati penambahan object HTML
        if (description.innerText != "undefined") {
            divDesc.append(description)
            tampilan.append(divDesc)
        }
        tampilan.append(newLine)
    
    } catch (e) {
        // Saat object tereplikasi beberapa kali
        // continue if error
    }
}

// Fungsi untuk menghapus semua elemen halaman book search
function deleteAllSearchResult() {
    // Hapus semua objek yang ada di dalam halaman book search
    const allSearchResult = document.querySelectorAll('#printList')
    for (let list of allSearchResult) {
        list.remove()
    }

    // Membuat tombol baru untuk kembali ke book search
    const backButton = document.createElement('button')
    backButton.id = "printList"
    backButton.innerText = "Back"
    backButton.className = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    
    // Ketika tombol back dipencet maka akan mereset bagian detailList -> buku API satu-satu
    setInterval(() => {
        backButton.addEventListener('click', function() {
            const detail = document.querySelectorAll("#detailList")
            for (let det of detail) {
                det.remove()
            }
        })
    }, 1000)

    // Inisiasi backDiv
    const backDiv = document.createElement('div')
    backDiv.id = "printList"
    backDiv.className = "flex justify-center"

    // Mengambil query #searchBoook (isi form search)
    const isiInput = document.querySelector('#searchBook')
    // Mengambil query #tampilan
    const getDiv = document.querySelector("#tampilan")
    // Menambahkan tombol ke tampilan
    backDiv.append(backButton)
    getDiv.append(backDiv)

    // Ketika tombol back diklik maka akan dikembalikan lagi data dari input search terakhir
    backButton.addEventListener('click', function() {
        GetData('https://www.googleapis.com/books/v1/volumes?q='+isiInput.value + '&&maxResults=25')
    })
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


export default BookDetails;