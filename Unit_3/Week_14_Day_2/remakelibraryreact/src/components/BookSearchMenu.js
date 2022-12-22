import BookListing from "./BookListing";
import BookPresentation from "./BookPresentation";
import SearchForm from "./SearchForm";

export default function BookSearchMenu(props){

    
    return <>
<div className="full">
    <div className="left">
        <BookListing />
    </div>
    <div className="right">
        <SearchForm />
        <BookPresentation />
    </div>
</div>
    </>
}