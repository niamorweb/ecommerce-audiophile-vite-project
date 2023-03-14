import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProductGallery from "../product-gallery/ProductGallery";
import MayAlsoLike from "../product-mayAlsoLike/MayAlsoLike";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PresentationProduct({
  dataProduct,
  SlugProduct,
  quantityProduct,
  setQuantityProduct,
  productCart,
  setProductCart,
  quantityCartItem,
  setQuantityCartItem,
}) {
  const [alertItemAdded, setAlertItemAdded] = useState("");

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const handleClickQuantityProduct = (e) => {
    setQuantityProduct(quantityProduct + e);
    if (quantityProduct <= 1 && e === -1) {
      setQuantityProduct(1);
    }

    if (quantityProduct >= 20 && e === 1) {
      setQuantityProduct(20);
      return;
    }
  };

  const addToCart = (e) => {
    const copyProductCart = [...productCart];

    if (productCart.some((item) => item.id === e.id)) {
      var quantityToAddToCart;
      var foundIndex = productCart.findIndex((x) => x.id == e.id);
      copyProductCart[foundIndex].quantity += quantityProduct;
    } else {
      copyProductCart.push({
        id: e.id,
        shortName: e.shortName,
        price: e.price,
        cartImage: e.cartImage,
        quantity: quantityProduct,
      });
      setProductCart(copyProductCart);
    }
    quantityToAddToCart = quantityCartItem += quantityProduct;
    setQuantityCartItem(quantityToAddToCart);
    showAlertAddToCart(e);
  };

  const showAlertAddToCart = (e) => {
    var nameItem = e.shortName;
    setAlertItemAdded(nameItem);
    setTimeout(() => {
      setAlertItemAdded("");
    }, 3500);
  };

  useEffect(() => {
    setQuantityProduct(1);
  }, []);

  return (
    <div className="page-product">
      {alertItemAdded === "" ? null : (
        <div className="alert-item-added-to-cart">
          Item '{alertItemAdded}' was added to cart
        </div>
      )}

      <NavLink className="links" to="/ecommerce-audiophile-vite-project/">
        <h4 className="go-back">Go Back</h4>
      </NavLink>

      {dataProduct.map((data) => {
        if (data.slug === SlugProduct) {
          return (
            <>
              <div className="presentation-product">
                <div className="img-side">
                  <img className="mobile" src={data.image.mobile} alt="" />
                  <img className="tablet" src={data.image.tablet} alt="" />
                  <img className="desktop" src={data.image.desktop} alt="" />
                </div>

                <div className="txt-side">
                  {data.new ? (
                    <span className="new-product">NEW PRODUCT</span>
                  ) : null}

                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                  <span className="price">$ {data.price}</span>

                  <div className="selector-quantity-and-add-to-cart">
                    <div className="selector-quantity">
                      <button
                        className="btn-quantity-product"
                        onClick={() => handleClickQuantityProduct(-1)}
                      >
                        <img
                          src="../../../ecommerce-audiophile-vite-project/assets/icons/icon-minus.svg"
                          alt=""
                        />
                      </button>
                      <span className="quantity">{quantityProduct}</span>
                      <button
                        className="btn-quantity-product"
                        onClick={() => handleClickQuantityProduct(1)}
                      >
                        <img
                          src="../../../ecommerce-audiophile-vite-project/assets/icons/icon-plus.svg"
                          alt=""
                        />
                      </button>
                    </div>
                    <button
                      onClick={() => addToCart(data)}
                      className="btn-style1"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div className="feature-and-in-the-box">
                <div className="feature">
                  <h2>FEATURES</h2>
                  <p>{data.features}</p>
                </div>

                <div className="in-the-box">
                  <h2>IN THE BOX</h2>
                  <div className="full-list-items">
                    {data.includedItems.map((included) => {
                      return (
                        <ul key={uuidv4()}>
                          <li className="quantity-item">
                            {included.quantity}x
                          </li>
                          <li>{included.item}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>

              <ProductGallery data={data} />

              <section className="may-also-like">
                <h2>MAY ALSO LIKE</h2>
                <Slider {...settings}>
                  {dataProduct
                    .slice(0, 6)
                    .filter((x) => x.id != data.id)
                    .map((item) => (
                      <MayAlsoLike item={item} />
                    ))}
                </Slider>
              </section>
            </>
          );
        }
      })}
    </div>
  );
}
