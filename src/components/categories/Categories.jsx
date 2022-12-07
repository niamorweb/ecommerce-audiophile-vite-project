import React from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {


  
  return (
    <div className="categories">
      <div className="box border-box">
        <img
          className="img-product"
          src="../../../assets/images/shared/desktop/imageheadphones.png"
          alt=""
        />
        <h5>HEADPHONES</h5>
          <NavLink  to="/headphones">
        <div className="shop-and-arrow">
            <p>Shop</p>
          <img
            src="../../../assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
          </NavLink>
      </div>

      <div className="box border-box">
        <img
          className="img-product"
          src="../../../assets/images/shared/desktop/imagespeakers.png"
          alt=""
        />
        <h5>speakers</h5>
          <NavLink to="/speakers">
        <div className="shop-and-arrow">
            <p>Shop</p>
          <img
            src="../../../assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
          </NavLink>
      </div>

      <div className="box border-box">
        <img
          className="img-product"
          src="../../../assets/images/shared/desktop/imageearphones.png"
          alt=""
        />
        <h5>earphones</h5>
          <NavLink to="/earphones">
        <div className="shop-and-arrow">
            <p>Shop</p>
          <img
            src="../../../assets/icons/little-arrow-down.svg"
            alt=""
            className="arrow"
          />
        </div>
          </NavLink>
      </div>
    </div>
  );
}
