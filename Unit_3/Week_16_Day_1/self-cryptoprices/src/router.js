import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Main from "./pages/main";
import Currencies from "./pages/currencies";
import Price from "./pages/price";
import { priceLoader } from "./loaders";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main/>} />
            <Route path="currencies" element={<Currencies/>} />
            <Route path="price/:symbol" element={<Price/>} loader={priceLoader} />
        </Route>
    )
)

export default router
