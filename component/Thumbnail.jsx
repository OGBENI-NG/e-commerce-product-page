import React,{useContext} from "react"
import { Context } from "../Context"

function Thumbnail({item}) {
  const {currentIndex, setCurrentIndex} = useContext(Context)

  const thumbnailData = item.img.map((img, index) =>(
    <div
      className={`thumbnail-container thumbnail-desktop ${currentIndex === index ? "selected" : ""}`}
      key={index}
      onClick={() => setCurrentIndex(index)}
    >
      <img 
        className={`thumbnail `}
        src={img} 
        alt={`thumbnail-${index}`} 
      />
    </div>
  ))

  return (
    <>{thumbnailData}</>
  )
}

export default Thumbnail