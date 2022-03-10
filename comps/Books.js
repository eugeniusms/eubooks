const Books = (data) => {
    printHTML(data)
}

function printHTML(data) {
    console.log(data)

    const getDiv = document.querySelector("#akuSuka")

    for (let i = 0; i < 10; i++) {
        try {
            const newList = document.createElement('p')
            newList.innerText = data[i].volumeInfo["title"]
            getDiv.append(newList)
        } catch(e) {
            console.log("ERROR")
        }
    }
}

export default Books;