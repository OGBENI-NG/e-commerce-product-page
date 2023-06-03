import React, { useContext } from "react"
import cartIcon from "../img/icon-cart.svg"
import { Context } from "../Context"
import deleteIcon from "../img/icon-delete.svg"
import deleteIconHover from "../img/icon-delete-hover.svg"
import useToggler from "../Hooks/useToggler"

export default function Cart() {
  const { hovered, enter, leave, toggleOn, toggleCart, cartContainerRef } = useToggler()
  const {  cartItem, emptyCart, countCartItem, totalPrice } = useContext(Context)

  const cartElement = cartItem.map((item) => (
    <div className="cartItem-container-main" key={item.name}>
      <div className="cartItem-container">
        <img src={item.img[0]} alt="product-image" />
        <div className="cart-price-container">
          <p>{item.name}</p>
          <span>
            ${item.price}.00 × {countCartItem}  <span className="increase-price">${totalPrice}.00</span>
          </span>
        </div>
        <img
          src={hovered === "delete-icon" ? deleteIconHover : deleteIcon}
          alt="delete-icon"
          className="delete-icon"
          onMouseEnter={() => enter("delete-icon")}
          onMouseLeave={leave}
          onClick={emptyCart}
        />
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  ))

  return (
    <div ref={cartContainerRef}>
      <div className="cart-count-container" onClick={() => toggleCart()} >
        <img src={cartIcon} alt="cart-icon" />
        <span 
          style={{display: countCartItem === 0 ? "none" : 'block'}}
          className="count-cart-item"
        >{countCartItem}</span>
      </div>
      <div
        className="cart-container-top"
        style={{ display: toggleOn ? "block" : "none" }}
      >
        <h3>Cart</h3>
        <div className="line"></div>
        {cartItem.length > 0 ? cartElement : <p className="em">Your cart is empty</p>}
      </div>
    </div>
  )
}
