import React from "react"
import heroAvatar from "../img/image-avatar.png"
import Cart from "../pages/Cart"
import Navbar from "./Navbar"
import logo from "../img/logo.svg"

export default function Header() {
    return (
        <header>
            <div className="menu-container">
                <Navbar />
                <img src={logo} alt="logo"  className="logo"/>
            </div>
            
            <div className="cart-container">
                <Cart />
                <img src={heroAvatar} alt="hero-avatar" className="hero"/>
            </div>
        </header>
    )
}