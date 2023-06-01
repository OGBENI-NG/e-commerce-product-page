import { useState } from "react";

function useToggler() {
  const [toggleOn, setToggleOn] = useState(false);
  const [hovered, setHovered] = useState(null);
  


  function toggleCart() {
    setToggleOn((prevOn) => !prevOn);
  }

  function enter(element) {
    setHovered(element);
  }

  function leave() {
    setHovered(null);
  }
  

  return { toggleCart, toggleOn, hovered, enter, leave }
}

export default useToggler;
