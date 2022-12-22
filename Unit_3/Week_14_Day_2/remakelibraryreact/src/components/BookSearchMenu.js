import BookListing from "./BookListing";
import BookPresentation from "./BookPresentation";
import SearchForm from "./SearchForm";
import { useState } from "react";

export default function BookSearchMenu(props){

    const [books, setBooks] = useState(null)
    const getBooks = async (searchTerm) => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}?q=${searchTerm}`)
        const data = await response.json();
        setBooks(data)
        console.log(data.items)
    }

    return <>
<div className="full">
    <div className="left">
        <BookListing />
    </div>
    <div className="right">
        <SearchForm searchBooks={getBooks}/>
        <BookPresentation />
    </div>
</div>
    </>
}