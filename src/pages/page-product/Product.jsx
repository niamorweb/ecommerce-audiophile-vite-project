import React, { useEffect } from "react";

import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";
import { useParams } from "react-router-dom";
import PresentationProduct from "./product-presentation/PresentationProduct";

export default function Product({
  dataProduct,
  quantityProduct,
  setQuantityProduct,
  productCart,
  setProductCart,
  quantityCartItem,
  setQuantityCartItem,
}) {
  const { SlugProduct } = useParams();

  //   const {NameCategory} = useParams()

  return (
    <>
      <main className="main-product">
        <PresentationProduct
          dataProduct={dataProduct}
          SlugProduct={SlugProduct}
          quantityProduct={quantityProduct}
          setQuantityProduct={setQuantityProduct}
          productCart={productCart}
          setProductCart={setProductCart}
          quantityCartItem={quantityCartItem}
          setQuantityCartItem={setQuantityCartItem}
        />
        <div className="main-product__container_categories">
          <Categories />
        </div>
        <About />
      </main>
    </>
  );
}
