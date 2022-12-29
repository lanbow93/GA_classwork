export const stockLoader = async({params}) => {
    const symbol= params.symbol;
    const apiKey = process.env.REACT_APP_APIKEY
    

    return (await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${apiKey}`))
}
