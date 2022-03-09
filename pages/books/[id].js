export const getStaticPaths = async () => {

    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=python')
    const data = await res.json();

    const paths = data["items"].map(todo => {
        return {
            params: { id: todo.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + id.toString())
    const data = await res.json();

    return {
        props: { todo: data["items"]}
    }
}

const Details = ({ todo }) => {
    return (
        <div>
            <h1>success</h1>
        </div>
    );
}
 
export default Details;