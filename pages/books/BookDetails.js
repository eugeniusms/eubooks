const BookDetails = (data) => {

    // For Trying again if error
    try {
        PrintDynamic(data)
    } catch (e) {
        PrintDynamicWithoutReset(data)
    }
}

function PrintDynamic(info) {

    // just show only one
    const allDetails = document.querySelectorAll('#detailList')
    for (let list of allDetails) {
        list.remove()
    }

    const tampilan = document.querySelector('#tampilan')

    // Heading Title 
    const heading = document.createElement('h2')
    heading.id = "detailList"
    heading.innerText = info.volumeInfo["title"]
    
    // Heading Subtitle (bisa ada dan tidak (undefined))
    const subheading = document.createElement('h3')
    subheading.id = "detailList"
    subheading.innerText = info.volumeInfo["subtitle"] 

    // Authors
    const author = document.createElement('p')
    author.id = "detailList"
    author.innerText = info.volumeInfo["authors"]

    // Description
    const description = document.createElement('p')
    description.id = "detailList"
    description.innerHTML = info.volumeInfo["description"]

    tampilan.append(heading)
    tampilan.append(subheading)
    tampilan.append(author)
    tampilan.append(description)
}

function PrintDynamicWithoutReset(info) {

    const tampilan = document.querySelector('#tampilan')

    // Heading Title 
    const heading = document.createElement('h2')
    heading.id = "detailList"
    heading.innerText = info.volumeInfo["title"]

    // Heading Subtitle (bisa ada dan tidak (undefined))
    const subheading = document.createElement('h3')
    subheading.id = "detailList"
    subheading.innerText = info.volumeInfo["subtitle"] 

    // Authors
    const author = document.createElement('p')
    author.id = "detailList"
    author.innerText = info.volumeInfo["authors"]

    // Description
    const description = document.createElement('p')
    description.id = "detailList"
    description.innerHTML = info.volumeInfo["description"]

    tampilan.append(heading)
    tampilan.append(subheading)
    tampilan.append(author)
    tampilan.append(description)
}



export default BookDetails;