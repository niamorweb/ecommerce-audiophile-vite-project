import React, { useState, useEffect } from "react";
import Category from "./pages/page-category/Category";
import Home from "./pages/page-home/Home";
import Product from "./pages/page-product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./data/data.json";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";
import Form from "./pages/page-form/Form";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const [dataProduct, setDataProduct] = useState([]);

  const [quantityProduct, setQuantityProduct] = useState(1);

  const [quantityCartItem, setQuantityCartItem] = useLocalStorage(
    "quantityCartItem",
    0
  );

  const [productCart, setProductCart] = useLocalStorage("cartProducts", []);

  const [cartTotalPrice, setCartTotalPrice] = useLocalStorage("totalPrice" , 0);

 
  useEffect(() => {
    setDataProduct(Data);
  }, []);


  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar
        productCart={productCart}
        setProductCart={setProductCart}
        quantityProduct={quantityProduct}
        quantityCartItem={quantityCartItem}
        setQuantityCartItem={setQuantityCartItem}
        cartTotalPrice={cartTotalPrice}
        setCartTotalPrice={setCartTotalPrice}
      />
      <Routes>
        <Route path="/" element={<Home dataProduct={dataProduct} />} />

        <Route
          path="/:NameCategory"
          element={<Category dataProduct={dataProduct} />}
        />

        <Route
          path="/product/:SlugProduct"
          element={
            <Product
              dataProduct={dataProduct}
              quantityProduct={quantityProduct}
              setQuantityProduct={setQuantityProduct}
              productCart={productCart}
              setProductCart={setProductCart}
              quantityCartItem={quantityCartItem}
              setQuantityCartItem={setQuantityCartItem}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Form
              productCart={productCart}
              cartTotalPrice={cartTotalPrice}
              setQuantityCartItem={setQuantityCartItem}
              setProductCart={setProductCart}
              setCartTotalPrice={setCartTotalPrice}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
