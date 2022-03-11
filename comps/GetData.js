import React, { Component } from "react";
import Books from "./Books";

// Fungsi GetData berguna untuk mendapatkan data fetch API dari url masukan
const GetData = (url) => {

    // Melakukan fetch API dari url yang diberikan
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Memasukkan data ke dalam books untuk dicetak melalui Books()
            let books= data["items"];
            Books(books)
            })

    return (
        // Tampilan default dari GetData untuk menampilkan buku nanti
        <section class="overflow-hidden text-gray-700 flex py-3 px-5 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <div class="container px-5 py-2 mx-auto lg:pt-2 lg:px-2">
                <div id="akuSuka" class="flex flex-wrap -m-1 md:-m-2">
                </div>
            </div>
        </section>
    );
}
 
export default GetData;