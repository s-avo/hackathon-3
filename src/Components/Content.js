import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Catagories from "../Pages/Catagories";
import Home from "../Pages/Home";
import Category1 from "./Category1";
import Item from "./Item";

function Content() {
    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catagories" element={<Catagories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category1" element={<Category1 />} />
                <Route path="/item1" element={<Item />} />
            </Routes>
        </div>
    )
}

export default Content;