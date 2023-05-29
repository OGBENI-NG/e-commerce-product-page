import React from "react"
import cartIcon from "../img/icon-cart.svg"
import useToggler from "../Hooks/useToggler"

export default function Cart() {

    const {toggleOn, toggleCart} = useToggler()
    return (
        <>
            <div className="cart-count-container" onClick={toggleCart}>
                <img  
                    src={cartIcon} 
                    alt="cart-icon" 
                />
                <span className="count-cart-item">0</span>
            </div>
            <div  
                className="cart-container-top"
                style={{display: toggleOn ? "block" :"none"}}
            >
                <h3>Cart</h3>
                <div className="line"></div>

            </div>
        </>
    )
}
