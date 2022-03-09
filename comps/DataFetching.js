import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
   
    const [books, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=python&&maxResults=25') // use max for per page and connect q to search
            .then(res => {
                console.log(res)
                setPosts(res.data["items"])
            })
            .catch(err => {
                console.log(err)
            })
    })    

    return (
        <div>
            <ul>
                {
                    books.map(book => 
                        <li key={book.id}>
                            <b>{book.volumeInfo["title"]}</b>
                            <p>{book.volumeInfo["subtitle"]}</p>
                            <img src={book.volumeInfo["imageLinks"].thumbnail} />
                            <p>Author : {book.volumeInfo["authors"]}</p>
                            <hr />
                        </li>
                        )
                }
            </ul>
        </div>
    )
}

export default DataFetching;