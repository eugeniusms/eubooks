// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function DataFetching() {
//     const [books, setPosts] = useState([])

//     useEffect(() => {
//         axios.get('https://www.googleapis.com/books/v1/volumes?q=python')
//             .then(res => {
//                 console.log(res)
//                 setPosts(res.data["items"])
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })    

//     return (
//         <div>
//             <ul>
//                 {
//                     books.map(book => <li key={book.id}><b>{book.volumeInfo["title"]}</b></li>)
//                 }
//             </ul>
//         </div>
//     )
// }

// export default DataFetching;