export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = process.env.REACT_APP_APIKEY
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
}