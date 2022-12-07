import React from 'react'
import { NavLink } from "react-router-dom";

export default function CartValided({productCart, grandTotalPrice, setProductCart, setQuantityCartItem, setCartTotalPrice}) {
  
  const reset = () => {
    setProductCart([])
    setCartTotalPrice(0)
    setQuantityCartItem(0)
    
  }
  
  
  return (
     <>
     <div className="backgroundOpacity"></div>
    <div className="cart-valided">
    <div className="container">
      <img src="../ecommerce-audiophile-vite-project/assets/icons/icon-check-mark.svg" alt="" />
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <p>You will receive an email confirmation shortly.</p>
    <div className="recapitulatif">
      <div className="products">
        {productCart.map((item) => {
          return(
          <div className="infos-item" key={item.id}>
          <div className="img-name-price">
            <img src={item.cartImage} alt="" />
            <div className="name-price">
              <h5>{item.shortName}</h5>
              <span>${item.price}</span>
            </div>
          </div>
          <span className="quantity">x{item.quantity}</span>
        </div>
          )
        })}
      </div>
    <div className="grand-total">
      <h4>GRAND TOTAL</h4>
      <span className="price-grand-total">${grandTotalPrice}</span>
    </div>
    </div>
    <NavLink to='/ecommerce-audiophile-vite-project/home'><button onClick={reset} className="btn-style1">BACK TO HOME</button></NavLink>
    </div>
  </div>
  </>
  )
}
