import React, { useContext } from "react";
import { Context } from "../Context";
import nextIcon from "../img/icon-next.svg";
import previousBtn from "../img/icon-previous.svg";
import plusBtn from "../img/icon-plus.svg";
import minusBtn from "../img/icon-minus.svg";
import cartIcon from "../img/btn-cart-icon.png";
import Thumbnail from "./Thumbnail";
import closeMenuWhite from "../img/icon-close-white.svg";
import closeIconRed from "../img/icon-close-hover.svg";
import nextIconHover from "../img/icon-next-hover.svg";
import previousIconHover from "../img/icon-previous-hover.svg";
import useToggler from "../Hooks/useToggler";

export default function Main() {
  const { toggleCart, toggleOn, hovered, enter, leave } = useToggler()
  
  const {
    serviceData,
    currentIndex,
    handleNextClick,
    handlePreviousClick,
    addToCart,
    cartItem
  } = useContext(Context);

  const allData = serviceData.map((item, index) => (
    <div key={index} className="main">
      <div className="product-image-container">
        <div className="product-img--carousel-container">
          <img
            src={previousBtn}
            alt="bact-btn"
            className="back-btn"
            onClick={() => handlePreviousClick(item)}
          />
          <div className="img-container">
            <img
              className={`products-image`}
              src={item.img[currentIndex]}
              alt={item.name}
              onClick={toggleCart}
            />
          </div>
          <img
            src={nextIcon}
            alt="next-btn"
            className="next-btn"
            onClick={() => handleNextClick(item)}
          />

          <div className="carousel-container">
            <Thumbnail item={item} index={index} key={index} />
          </div>
        </div>
        <div className="main-item-container">
          <span>Sneaker Company</span>
          <h1>{item.name}</h1>
          <p className="description">{item.description}</p>
          <div className="price-container">
            <h2>${item.price}.00</h2>
            <span>50%</span>
            <p>${item.price}.00</p>
          </div>
          <div className="add-to-cart-btn-container">
            <div className="add-more-item-container">
              <img 
                src={minusBtn} 
                alt="minus-icon" 
                className="plus-icon" 
                
                />
              <span>0</span>
              <img 
                src={plusBtn} 
                alt="plus-icon" 
                className="plus-icon"
              />
            </div>
            <button onClick={() => addToCart(item)} disabled={cartItem.length}>
              <img src={cartIcon} alt="cart-icon" /> Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={`image-modal-container ${toggleOn ? "desktop--view" : ""}`}>
        <div className="desktop-modal" >
          <img
            onClick={toggleCart}
            src={hovered === "close-icon" ? closeIconRed : closeMenuWhite}
            alt="close-icon"
            className="overlay-close-icon"
            onMouseEnter={() => enter('close-icon')}
            onMouseLeave={leave}
          />
          <div className="imageOverlay">
            <img
              src={hovered === "back-btn" ? previousIconHover : previousBtn}
              alt="back-btn"
              className="overlay-back-btn"
              onClick={() => handlePreviousClick(item)}
              onMouseEnter={() => enter("back-btn")}
              onMouseLeave={leave}
             
            />
            <img
              className={`overlay-image desktop-img-overlay`}
              src={item.img[currentIndex]}
              alt={item.name}
            />
            <img
              src={hovered === "next-btn" ? nextIconHover : nextIcon}
              alt="next-btn"
              className="overlay-next-btn"
              onClick={() => handleNextClick(item)}
              onMouseEnter={() => enter("next-btn")}
              onMouseLeave={leave}
             
            />
            <div className="carousel-container">
              <Thumbnail item={item} index={index} key={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{allData}</div>;
}
