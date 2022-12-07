import React from "react";
import {  NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Section1( {slide} ) {

  
  useEffect(() =>{
    slide('#homeSection1', "0.5", "1")
  },[])



  return (
    <div id="homeSection1" className="product-home1 border-box">
                <img className="mobile" src="../../../ecommerce-audiophile-vite-project/assets/images/home/mobile/image-speaker-zx9.png" alt=""/>
                <img className="tablet" src="../../../ecommerce-audiophile-vite-project/assets/images/home/tablet/tabspeaker.png" alt=""/>
                <img className="desktop" src="../../../ecommerce-audiophile-vite-project/assets/images/home/desktop/speakerzx.png" alt=""/>
                <div className="txt">
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to 
                    deliver truly remarkable sound. </p>
               <NavLink to='/ecommerce-audiophile-vite-project/product/zx9-speaker'> <button>see product</button></NavLink>
            </div>
            </div>
  );
}




