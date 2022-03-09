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

export async function getStaticProps({ params }) {
    console.log(params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
}

const Details = ({ todo }) => {
    return (
        <div>
            <h1>success</h1>
        </div>
    );
}
 
export default Details;