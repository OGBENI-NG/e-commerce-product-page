import {useState} from "react"

function useToggler() {
    const [toggleOn, setToggleOn] = useState(false)

    function toggleCart() {
        setToggleOn(prevOn => !prevOn)
    }

    return {toggleCart, toggleOn}
}

export default useToggler