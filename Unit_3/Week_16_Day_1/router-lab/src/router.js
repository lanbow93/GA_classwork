import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about";
import Index from "./pages/index";
import Show from "./pages/show";
import { stockLoader } from "./loader";

const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/stocks" element={<Index/>} />
            <Route path="/stocks/:symbol" element={<Show/>} loader={stockLoader} />

        </Route>
    )
)

export default router;