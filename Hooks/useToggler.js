import { useState, useEffect, useRef } from "react"

function useToggler() {
  const [toggleOn, setToggleOn] = useState(false)
  const [hovered, setHovered] = useState(null)
  const cartContainerRef = useRef(null)
  


  function toggleCart() {
    setToggleOn((prevOn) => !prevOn)
  }

  function enter(element) {
    setHovered(element)
  }

  function leave() {
    setHovered(null)
  }

  
  const handleClickOutside = (event) => {
  if (
    cartContainerRef.current &&
    !cartContainerRef.current.contains(event.target)
  ) {
    setToggleOn(false);
  }
};


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

 

  

  return { toggleCart, toggleOn, hovered, enter, leave, cartContainerRef }
}

export default useToggler
