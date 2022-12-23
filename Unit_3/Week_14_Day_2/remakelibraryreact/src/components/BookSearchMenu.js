import BookListing from "./BookListing";
import BookPresentation from "./BookPresentation";
import SearchForm from "./SearchForm";
import { useState } from "react";

export default function BookSearchMenu(props){

    const [books, setBooks] = useState(null)
    const getBooks = async (searchTerm) => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}?q=${searchTerm}`)
        const data = await response.json();
        setBooks(data.items)
    }

    const [book, setBook] = useState({
        bookInfo: {}
    })

    const showBook = (event, index) => {
        setBook(books[index])
    }

    return <>
<div className="full">
    <div className="right">
        <SearchForm searchBooks={getBooks}/>
        <BookPresentation 
        title={(book?.volumeInfo?.title) ? book.volumeInfo.title : "Unknown Title"}
        authors={(book?.volumeInfo?.authors) ? book.volumeInfo.authors : "Unknown"}
        description={(book?.volumeInfo?.description) ? (book.volumeInfo.description.length > 450) ? book.volumeInfo.description.split('').splice(0, 450).join('') + " ..." : book.volumeInfo.description : "No Description Available"}
        />
    </div>
    <div className="left">
        {(books) ? <BookListing books={books} showBook={showBook} /> : ""}
    </div>
</div>
    </>
}