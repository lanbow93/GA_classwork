import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Currencies from "./pages/currencies"
import Price from "./pages/price"
import Main from "./pages/main"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main />} />
            <Route path="currencies" element={<Currencies />} />
            <Route path="price" element={<Price />} />
        </Route>
        
    )
)

export default router