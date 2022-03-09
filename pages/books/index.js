// import Link from 'next/link';

// export const getStaticProps = async () => {

//     const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=python&&maxResults=25')
//     const data = await res.json();

//     return {
//         props: { books: data["items"] }
//     }

// }

// const Book = ({ books }) => {
//     return (
//         <div>
//             <h1>All ToDo</h1>
//             {books.map(todo => (
//                 <Link href={'/book/' + book.id} key={book.id}>
//                     <h3>{ book.volumeInfo["title"] }</h3>
//                 </Link>
//             ))}
//         </div>
//     );
// }
 
// export default Book;