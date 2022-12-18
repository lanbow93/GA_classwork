import { useState } from "react"
function InputDisplay(props) {
    console.log("InputDisplay Rendered")

    const [input, setInput] = useState("")

    function updateInput(event){
        setInput(event.target.value)
    }

    return <>
        <h1>{input}</h1>
        <input type="text" onChange={updateInput} />
    </>
}

export default InputDisplay