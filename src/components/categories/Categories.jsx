import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories">
      <NavLink
        className="box border-box"
        to="/ecommerce-audiophile-vite-project/category/headphones"
      >
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imageheadphones.png"
          alt=""
        />
        <h5>HEADPHONES</h5>
        <div className="shop-and-arrow">
          <p>Shop</p>
          <img
            src="../../../ecommerce-audiophile-vite-project/assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
      </NavLink>

      <NavLink
        className="box border-box"
        to="/ecommerce-audiophile-vite-project/category/speakers"
      >
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imagespeakers.png"
          alt=""
        />
        <h5>speakers</h5>
        <div className="shop-and-arrow">
          <p>Shop</p>
          <img
            src="../../../ecommerce-audiophile-vite-project/assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
      </NavLink>

      <NavLink
        className="box border-box"
        to="/ecommerce-audiophile-vite-project/category/earphones"
      >
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imageearphones.png"
          alt=""
        />
        <h5>earphones</h5>
        <div className="shop-and-arrow">
          <p>Shop</p>
          <img
            src="../../../ecommerce-audiophile-vite-project/assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
      </NavLink>
    </div>
  );
}
