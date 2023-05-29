import React from "react"
import useToggler from "../Hooks/useToggler"
import closeMenu from "../img/icon-close.svg"
import menuIcon from "../img/icon-menu.svg"

function Navbar() {
    const {toggleCart, toggleOn} = useToggler()
    return(
        <div>
            <img 
                src={menuIcon} alt="menu-icon"
                onClick={toggleCart}
                className="menu-icon"
            />
            <div 
                className={`nav-overlay ${toggleOn ? 'show' : ''}`}
            >
                <nav className="nav-bar">
                    <img 
                        src={closeMenu} 
                        alt="close-menu-icon" 
                        onClick={toggleCart}
                        className="close-menu-icon"
                    />
                   <div className="links">
                        <a>Collections</a>
                        <a>Men</a>
                        <a>Women</a>
                        <a>About</a>
                        <a>Contact</a>
                   </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar