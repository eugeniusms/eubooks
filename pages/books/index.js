import styles from '../../styles/Home.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();

    return {
        props: { books: data}
    }
}

const Books = ({ books }) => {
    return (
        <div>
            <h1>All Books</h1>
            {books.map(book => (
                <div key={book.id}>
                    <a className={styles.single}>
                        <h3>{ book.name }</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Books;