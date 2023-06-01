import React, { useContext } from "react";
import cartIcon from "../img/icon-cart.svg";
import { Context } from "../Context";
import deleteIcon from "../img/icon-delete.svg";
import deleteIconHover from "../img/icon-delete-hover.svg";
import useToggler from "../Hooks/useToggler";

export default function Cart() {
  const { hovered, enter, leave } = useToggler();
  const { toggleOn, toggleCart, cartItem } = useContext(Context);

  const cartElement = cartItem.map((item) => (
    <div className="cartItem-container-main" key={item.name}>
      <div className="cartItem-container">
        <img src={item.img[0]} alt="product-image" />
        <div className="cart-price-container">
          <p>{item.name}</p>
          <span>
            ${item.price}.00 × <span className="increase-price">375.00</span>
          </span>
        </div>
        <img
          src={hovered === "delete-icon" ? deleteIconHover : deleteIcon}
          alt="delete-icon"
          className="delete-icon"
          onMouseEnter={() => enter("delete-icon")}
          onMouseLeave={leave}
        />
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  ));

  return (
    <>
      <div className="cart-count-container" onClick={toggleCart}>
        <img src={cartIcon} alt="cart-icon" />
        <span className="count-cart-item">0</span>
      </div>
      <div
        className="cart-container-top"
        style={{ display: toggleOn ? "block" : "none" }}
        
      >
        <h3>Cart</h3>
        <div className="line"></div>

        {cartElement}
      </div>
    </>
  );
}
