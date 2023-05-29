import React, { useContext, useState } from "react"
import { Context } from "../Context"
import nextBtn from "../img/icon-next.svg"
import previousBtn from "../img/icon-previous.svg"
import plusBtn from "../img/icon-plus.svg"
import minusBtn from "../img/icon-minus.svg"
import cartIcon from "../img/btn-cart-icon.png"
import Thumbnail from "./Thumbnail"
import closeIconRed from "../img/icon-close-hover.svg"

export default function Main({index}) {
  const { 
    serviceData, 
    currentIndex, 
    handleNextClick, 
    handlePreviousClick
  } = useContext(Context)

  const allData = serviceData.map((item, index) => (
    <div key={index}>
      <div className="product-image-container" key={index}>
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
            />
          </div>
          <img 
            src={nextBtn} 
            alt="next-btn" 
            className="next-btn"
            onClick={() => handleNextClick(item)}
          />

          <div className="carousel-container">
            <Thumbnail item={item} index={index} key={index}/>
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
                <img src={minusBtn} alt="minus-icon" className="plus-icon"/>
                <span>0</span>
                <img src={plusBtn} alt="plus-icon" className="plus-icon"/>
            </div>
            <button><img src={cartIcon} alt="cart-icon" /> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="imageOverlay-container">
        <img src={closeIconRed} alt="close-icon" />
        <div className="imageOverlay">
          <img 
            src={previousBtn} 
            alt="bact-btn" 
            className="overlay-back-btn"
            onClick={() => handlePreviousClick(item)}
          />
          <img 
            className={`overlay-image`} 
            src={item.img[currentIndex]}
            alt={item.name} 
          />
          <img 
            src={nextBtn} 
            alt="next-btn" 
            className="overlay-next-btn"
            onClick={() => handleNextClick(item)}
          />
          <div className="carousel-container carousel-overlay">
            <Thumbnail item={item} index={index} key={index}/>
          </div>
        </div>
      </div>
    </div>
  ))

  return (<div>{allData}</div>)
}
