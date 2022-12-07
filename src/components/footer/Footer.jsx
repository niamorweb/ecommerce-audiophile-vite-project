import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="title-and-links">
          <span className="brand">audiophile</span>
          <ul>
            <NavLink className={(nav) => (nav.isActive ? "nav-active": 'link')} end to="/ecommerce-audiophile-vite-project/">
              <li>home</li>
            </NavLink>

            <NavLink className={(nav) => (nav.isActive ? "nav-active": 'link')} to="/ecommerce-audiophile-vite-project/category/headphones">
              <li>headphones</li>
            </NavLink>

            <NavLink className={(nav) => (nav.isActive ? "nav-active": 'link')} to="/ecommerce-audiophile-vite-project/category/speakers">
              <li>speakers</li>
            </NavLink>

            <NavLink className={(nav) => (nav.isActive ? "nav-active": 'link')} to="/ecommerce-audiophile-vite-project/category/earphones">
              <li>earphones</li>
            </NavLink>
          </ul>
        </div>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        <div className="copy-and-social-links">
          <span className="copyright">Copyright 2021. </span>

          <div className="social-links">
            <img src="../../../ecommerce-audiophile-vite-project/assets/icons/icon-facebook.svg" alt="" />
            <img src="../../../ecommerce-audiophile-vite-project/assets/icons/icon-twitter.svg" alt="" />
            <img src="../../../ecommerce-audiophile-vite-project/assets/icons/icon-instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
