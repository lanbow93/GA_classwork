export default function BookListing(props){
    return <>
        <ul>
        {props.books.map((book) => {
            return <li onClick={(event) => props.showBook(event, props.books.indexOf(book)) } key={book.id} >Title: <span className="bold" key={book.id}>{book.volumeInfo.title}</span><br/>Book Author: {book.volumeInfo.authors[0]}</li>
        })}
        </ul>
    </>
}