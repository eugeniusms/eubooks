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
            const newList = document.createElement('p')
            newList.id = "printList"
            newList.innerText = data[i].volumeInfo["title"]
            getDiv.append(newList)
        } catch(e) {
            console.log("ERROR")
        }
    }
}

export default Books;