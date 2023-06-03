import React, { createContext, useState, useEffect } from "react"
import data from "./data"

const Context = createContext()
// using context provider
function ContextProvider({children}) {
    const [serviceData, setServiceData] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [countCartItem, setCountCartItem] = useState(0)
    const [totalPrice, setTotalPrice] = useState(125)

    let price = "125" 
   
    //product data
    useEffect(() =>{
        setServiceData(data)
    }, [serviceData])

    const handlePreviousClick = (item) => {
        setCurrentIndex((prevIndex) => 
        (prevIndex === 0 ? item.img.length - 1 : prevIndex - 1))
    }

    const handleNextClick = (item) => {
        setCurrentIndex((prevIndex) => 
        (prevIndex === item.img.length - 1 ? 0 : prevIndex + 1))
    }

    function addToCart(newItem) {
        setCartItem(prevItem => [...prevItem, newItem])
    }

    function emptyCart() {
        setCartItem([])
        setTotalPrice(Number(price))
    }

    useEffect(() => {
        setCountCartItem(cartItem.length)
    },[cartItem])

    function addToPrice() {
        if(cartItem.length > 0) {
            setCountCartItem(prevItem => prevItem + 1);
            setTotalPrice(prevPrice => prevPrice + Number(price))
        }
    }

    function minusFromPrice() {
        if (cartItem.length > 0) {
            setCountCartItem(prevItem => prevItem - 1);
            setTotalPrice(prevPrice => prevPrice - Number(price));
            
            if (countCartItem === 1) {
                emptyCart(); // Call the emptyCart function when countCartItem reaches 0
            }
        }
    }
    
    return (
        <Context.Provider 
            value={{
                serviceData, 
                currentIndex, 
                handleNextClick, 
                handlePreviousClick, 
                setCurrentIndex, 
                addToCart,
                cartItem,
                emptyCart,
                countCartItem,
                addToPrice,
                minusFromPrice,
                totalPrice
            }}
        >
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}