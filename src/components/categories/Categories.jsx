import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {


  
  return (
    <div className="categories">
      <div className="box border-box">
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imageheadphones.png"
          alt=""
        />
        <h5>HEADPHONES</h5>
          <NavLink  to="/ecommerce-audiophile-vite-project/category/headphones">
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

      <div className="box border-box">
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imagespeakers.png"
          alt=""
        />
        <h5>speakers</h5>
          <NavLink to="/ecommerce-audiophile-vite-project/category/speakers">
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

      <div className="box border-box">
        <img
          className="img-product"
          src="../../../ecommerce-audiophile-vite-project/assets/images/shared/desktop/imageearphones.png"
          alt=""
        />
        <h5>earphones</h5>
          <NavLink to="/ecommerce-audiophile-vite-project/category/earphones">
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
    </div>
  );
}
