import {useState} from 'react'

export default function Navbar(props){
    const [title, setTitle] = useState("Search Screen")

    const handleEvent = (event) => {
        setTitle(event.target.value)
    }

    return <nav>
        <button onClick={handleEvent} value="Book Search">Book Search</button>
        <h3>{title}</h3>
        <button onClick={handleEvent} value="Shelf Catalog">Shelf Catalog</button>
    </nav>
}