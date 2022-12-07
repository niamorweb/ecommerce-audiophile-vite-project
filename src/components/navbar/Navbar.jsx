import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import Categories from "../categories/Categories";

export default function Navbar({
  productCart,
  setProductCart,
  quantityProduct,
  quantityCartItem,
  setQuantityCartItem,
  cartTotalPrice,
  setCartTotalPrice,
}) {
  
  const [backgroundOpacity, setBackgroundOpacity] = useState(false)
  const [openCart, setOpenCart] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleCartDisplay = () => {
    setOpenCart(!openCart);
  };

  const handleDisplayMobileNav = () => {
    setMobileNav(!mobileNav);
    setBackgroundOpacity(!backgroundOpacity)
  };


  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}


  return (
    <>
    {backgroundOpacity? <div className="backgroundOpacity mobile-tablet"></div> : null}
      <header>
        <nav>
          <img onClick={handleDisplayMobileNav} className="icon-nav-mobile" src="assets/icons/menu.svg" alt="" />
          <NavLink to="/ecommerce-audiophile-vite-project/"><span className="brand">audiophile</span></NavLink>
          <ul className="nav-desktop desktop">
            <NavLink end className={(nav) => (nav.isActive ? "nav-active": 'link')} to="/ecommerce-audiophile-vite-project">
              <li >home</li>
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
          <div className="nav-cart" onClick={() => handleCartDisplay()}>
            <img src="../../ecommerce-audiophile-vite-project/assets/icons/icon-cart.svg" alt="" />
            {quantityCartItem === 0 ? null : (
              <span className="nav-quantity-item-cart">{quantityCartItem}</span>
            )}
          </div>
        </nav>
        {mobileNav? <div className="nav-mobile mobile-tablet" > 
       <Categories /> </div> : null}
        {openCart ? (
          <Cart
            productCart={productCart}
            setProductCart={setProductCart}
            setQuantityCartItem={setQuantityCartItem}
            quantityCartItem={quantityCartItem}
            cartTotalPrice={cartTotalPrice}
            setCartTotalPrice={setCartTotalPrice}
            setOpenCart={setOpenCart}
          />
        ) : null}
      </header>
    </>
  );
}
