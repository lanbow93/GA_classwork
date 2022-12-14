import { useState } from "react";

export default function SearchForm(props){

    const [formData, setFormData] = useState({searchTerm: ""})
    const handleChange = (event) => {
        const newState = {...formData}
        newState.searchTerm = event.target.value
        setFormData(newState)
    };

    const handleEvent = (event) => {
        event.preventDefault();
        props.searchBooks(formData.searchTerm)
    }

    return <form onSubmit={handleEvent}>
        <h2>Please Enter Seach Term</h2>
        <input type="text" placeholder="Enter Search Term" value={formData.searchTerm} onChange={handleChange} />
        <input type="submit" value="Search" />
    </form>
}