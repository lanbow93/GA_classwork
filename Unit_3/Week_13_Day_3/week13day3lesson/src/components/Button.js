function Button(props){

    const ButtonStyle = {
        border: "none",
        padding: "6px",
        fontSize: "1.2em",
        backgroundColor: props.bg,
        color: "white",
        margin: "3px"
    }
    
    console.log("Button " + props.label)
    return <button onClick={props.click} style={ButtonStyle}>
        {props.label}
        </button>
}

export default Button