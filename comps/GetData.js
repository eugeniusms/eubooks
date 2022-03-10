import React, { Component } from "react";
import Books from "./Books";

const GetData = (url) => {

    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data["items"])
            let books= data["items"];
            // console.log(books)
            Books(books)
            })

    return (
        <div id="akuSuka">
            <p>Here comes JSX !</p>
        </div>
    );
}
 
export default GetData;