import React, { Component } from "react";

const GetData = (url) => {

    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data["items"])
            let books= data["items"];
            // console.log(books)
            printHTML(books)
            })

    return (
        <div id="akuSuka">
            <p>Here comes JSX !</p>
        </div>
    );
}

function printHTML(data) {
    console.log(data)

    const getDiv = document.querySelector("#akuSuka")

    for (let i = 0; i < 10; i++) {
        const newList = document.createElement('p')
        newList.innerText = data[i].volumeInfo["title"]
        getDiv.append(newList)
    }

}

 
export default GetData;