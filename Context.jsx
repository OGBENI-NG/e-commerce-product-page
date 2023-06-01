import React, {createContext, useState, useEffect} from "react"
import data from "./data"

const Context = createContext()

function ContextProvider({children}) {
    const [serviceData, setServiceData] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [toggleOn, setToggleOn] = useState(false)

    //product data
    useEffect(() =>{
        setServiceData(data)
    }, [serviceData])


    function toggleCart() {
        setToggleOn(prevOn => !prevOn)
    }

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
    
    return (
        <Context.Provider 
            value={{
                serviceData, 
                currentIndex, 
                handleNextClick, 
                handlePreviousClick, 
                setCurrentIndex, 
                toggleOn, 
                setToggleOn,
                toggleCart,
                addToCart,
                cartItem
            }}
        >
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}