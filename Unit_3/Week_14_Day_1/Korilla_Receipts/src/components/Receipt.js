function Receipt({receipt}){

    const style = {
        width: "30%",
        maxWidth: "300px",
        border: "3px solid orange",
    }

    return <div style={style}>
        <h2>{receipt.name}</h2>
        <h3>{receipt.item}</h3>
        <hr/>
        {Object.keys(receipt.ingredients).map((key, index) => {
            return <h4 key={index}>{receipt.ingredients[key]}</h4>
        })}
    </div>
}

export default Receipt