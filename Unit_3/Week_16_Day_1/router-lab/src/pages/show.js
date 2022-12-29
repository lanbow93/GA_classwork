import {useLoaderData} from "react-router-dom"

const Show = (props) => {
    const stock = useLoaderData();
    const stockSpecifics = Object.values(stock["Weekly Time Series"]).shift();



    return <div>
        <h1>{stock["Meta Data"]["2. Symbol"]}</h1>

        <h3>Open: ${stockSpecifics["1. open"]}</h3>
        <h3>High: ${stockSpecifics["2. high"]}</h3>
        <h3>Low: ${stockSpecifics["3. low"]}</h3>
        <h3>Close: ${stockSpecifics["4. close"]}</h3>


    </div>
};

export default Show;