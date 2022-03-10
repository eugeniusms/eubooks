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
        <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-2 lg:px-2">
                <div id="akuSuka" class="flex flex-wrap -m-1 md:-m-2">
                </div>
            </div>
        </section>
    );
}
 
export default GetData;