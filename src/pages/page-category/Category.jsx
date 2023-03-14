import React, { useEffect } from "react";
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";
import CategoryProducts from "./category-products/CategoryProducts";
import IntroCategory from "./category-intro/IntroCategory";
import { useParams } from "react-router-dom";

export default function Category({ dataProduct }) {
  const { NameCategory } = useParams();

  return (
    <>
      <IntroCategory dataProduct={dataProduct} NameCategory={NameCategory} />

      <main className="main-category">
        <CategoryProducts
          dataProduct={dataProduct}
          NameCategory={NameCategory}
        />
        <div className="main-category__container_categories">
          <Categories />
        </div>
        <About />
      </main>
    </>
  );
}
