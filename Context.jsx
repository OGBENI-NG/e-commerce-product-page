import React, {createContext, useState, useEffect} from "react"
import data from "./data"

const Context = createContext()

function ContextProvider({children}) {
    const [serviceData, setServiceData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

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

    return (
        <Context.Provider value={{serviceData, currentIndex, handleNextClick, handlePreviousClick, setCurrentIndex}}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}