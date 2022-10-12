import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products.js";
import Basket from "./pages/Basket/Basket.js";
import CardProduct from "./pages/CardProduct/CardProduct.js";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/:id" element={<CardProduct />} />
            </Routes>
        </div>
    );
}

export default App;
