import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import CartValided from "../../components/cartValided/CartValided";

export default function Form({ productCart, cartTotalPrice, setProductCart, setQuantityCartItem, setCartTotalPrice }) {
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm();

  const [realPriceOfTaxe, setRealPriceOfTaxe] = useLocalStorage(0);
  const [grandTotalPrice, setGrandTotalPrice] = useLocalStorage(0);

  const onSubmit = (data) => {
  };




  const feesPercent = 0.05;
  const shippingFees = 20;
  const paymentSelectionTest = watch("paymentSelection");





  useEffect(() => {
    var test = 10.44444;

    // var UpdateRealPriceOfTaxe = Math.round(cartTotalPrice * feesPercent * 100) / 100;
    setRealPriceOfTaxe(Math.round(cartTotalPrice * feesPercent * 100) / 100);
    setGrandTotalPrice(
      Math.round((realPriceOfTaxe + cartTotalPrice + shippingFees) * 100) / 100
    );
  });


  return (
    <>
      {isSubmitSuccessful && (
        <CartValided
          productCart={productCart}
          grandTotalPrice={grandTotalPrice}
          setQuantityCartItem={setQuantityCartItem}
          setProductCart={setProductCart}
          setCartTotalPrice={setCartTotalPrice}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-form-and-summary">
        <section className="form-section">
          <div className="billing">
            <legend>BILLING DETAILS</legend>
            <div className="billing-form">
              <div className="form-group">
                <label htmlFor="name"> Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Cristiano Ronaldo"
                  {...register("name", { required: true, minLength: 3 })}
                />

                {errors.name && errors.name.type === "required" && (
                  <span className="message-error-form">This is required</span>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <span className="message-error-form">Length too weak</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="name"> Phone Number</label>
                <input
                placeholder="06123456"
                  type="number"
                  name="phone"
                  {...register("phone", {
                    required: "You have to put a phone number valid.",
                  })}
                />
                {errors.phone && (
                  <span className="message-error-form">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="name"> Email Address</label>
                <input
                placeholder="cr7@gmail.com"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "You have to put an e-mail valid.",
                  })}
                />
                {errors.email && (
                  <span className="message-error-form">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="shipping">
            <legend>SHIPPING</legend>
            <div className="shipping-form">
              <div className="form-group address-form">
                <label htmlFor="address"> Your Address</label>
                <input
                placeholder="4 rue du "
                  type="text"
                  name="address"
                  id="address"
                  {...register("address", {
                    required: "You have to put an address valid.",
                  })}
                />
                {errors.address && (
                  <span className="message-error-form">
                    {errors.address.message}
                  </span>
                )}
              </div>

              <div className="form-group zip-form">
                <label htmlFor="zipCode"> ZIP Code</label>
                <input
                placeholder="11111"
                  type="number"
                  name="zip-code"
                  id="zipCode"
                  {...register("zipCode", {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                  })}
                />

                {errors.zipCode && errors.zipCode.type === "required" && (
                  <span className="message-error-form">
                    5 numbers are required
                  </span>
                )}
                {errors.zipCode && errors.zipCode.type === "minLength" && (
                  <span className="message-error-form">
                    5 numbers are required
                  </span>
                )}
                {errors.zipCode && errors.zipCode.type === "maxLength" && (
                  <span className="message-error-form">
                    5 numbers are required
                  </span>
                )}


              </div>

              <div className="form-group city-form">
                <label htmlFor="city"> City</label>
                <input
                  placeholder="Marseille"
                  type="text"
                  name="city"
                  id="city"
                  {...register("city", { required: "The city is required." })}
                />
                {errors.city && (
                  <span className="message-error-form">
                    {errors.city.message}
                  </span>
                )}
              </div>

              <div className="form-group country-form">
                <label htmlFor="country">Country</label>
                <input
                  placeholder="France"
                  type="text"
                  name="country"
                  id="country"
                  {...register("country", {
                    required: "The country is required.",
                  })}
                />
                {errors.country && (
                  <span className="message-error-form">
                    {errors.country.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="payment">
            <legend>PAYMENT DETAILS</legend>
            <div className="payment-form">
              <div className="part-selection-method-payment">
                <span>Payment Method</span>
                <div className="radios-payment-container">
                  <div className="box-radio">
                    <input
                      type="radio"
                      id="e-money"
                      value="e-money"
                      {...register("paymentSelection", {
                        required: "You have to select a payment method",
                      })}
                    />
                    <label htmlFor="e-money">E-Money</label>
                  </div>

                  <div className="box-radio">
                    <input
                      type="radio"
                      id="cash"
                      value="cash"
                      {...register("paymentSelection")}
                    />
                    <label htmlFor="cash">Cash on delivery</label>
                  </div>
                  {errors.paymentSelection && (
                    <span className="message-error-form">
                      {errors.paymentSelection.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="infos-supp-for-payment">
                {paymentSelectionTest === "e-money" && (
                  <div className="e-money-selected">
                    <div className="container-emoney">
                      <div className="form-group">
                        <label htmlFor="e-money-number">E-Money Number</label>
                        <input
                        placeholder="100010001000"
                          type="number"
                          name="e-money-number"
                          id="eMoneyNumber"
                          {...register("eMoneyNumber", {
                            required: "This is required",
                          })}
                        />
                      </div>
                      {errors.eMoneyNumber && (
                        <span className="message-error-form">
                          {errors.eMoneyNumber.message}
                        </span>
                      )}
                    </div>

                    <div className="container-emoney">
                      <div className="form-group">
                        <label htmlFor="e-money-pin">E-money PIN</label>
                        <input
                        placeholder="1234"
                          type="number"
                          name="e-money-pin"
                          id="eMoneyPin"
                          {...register("eMoneyPin", {
                            required: "This is required",
                          })}
                        />
                      </div>
                      {errors.eMoneyPin && (
                        <span className="message-error-form">
                          {errors.eMoneyPin.message}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {paymentSelectionTest === "cash" && (
                  <div className="cash-delivery-selected">
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="summary">
          <h3>SUMMARY</h3>
          <div className="container-items-cart">
            {productCart.map((item) => {
              return (
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
              );
            })}
          </div>

          <div className="all-totals">
            <div className="detail-price">
              <div className="box-price total">
                <span className="recapitulatif-name">TOTAL</span>
                <span className="recapitulatif-price">${cartTotalPrice}</span>
              </div>

              <div className="box-price shipping">
                <span className="recapitulatif-name">SHIPPING</span>
                <span className="recapitulatif-price">${shippingFees}</span>
              </div>

              <div className="box-price vat">
                <span className="recapitulatif-name">VAT (INCLUDED)</span>
                <span className="recapitulatif-price">${realPriceOfTaxe}</span>
              </div>
            </div>

            <div className="box-price grand-total">
              <span className="recapitulatif-name">GRAND</span>
              <span className="recapitulatif-price">${grandTotalPrice}</span>
            </div>
          </div>
          <input className="btn-style1" type="submit" />
        </section>
        </div>
      </form>
    </>
  );
}
