import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Section3( { slide } ) {
  useEffect(() => {
    slide("#left", "1.5", "1");
    slide("#right", "2", "1");
  }, []);

  return (
    <div id="homeSection3" className="product-home3">
      <div id="left" className="left">
        <img
          className="border-box mobile-tablet"
          src="../../../assets/images/home/mobile/image-earphones-yx1.jpg"
          alt=""
        />
        <img
          className="border-box desktop"
          src="../../../assets/images/home/mobile/image-earphones-yx1.jpg"
          alt=""
        />
      </div>
      <div id="right" className="right border-box">
        <h2>Yx1 earphones</h2>
        <NavLink to="/ecommerce-audiophile-vite-project/product/yx1-earphones">
          {" "}
          <button>see product</button>
        </NavLink>
      </div>
    </div>
  );
}
