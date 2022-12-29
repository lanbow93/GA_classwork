import { useLoaderData } from "react-router-dom"

const Price = (props) =>{
    // Uses the data we passed with the loader on the router.js
    const coin = useLoaderData();

    return (
        <div>
            {console.log(coin)}
            <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
        </div>
    )
}

export default Price