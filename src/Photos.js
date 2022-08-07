import React from "react";
import './Photos.css'

const Photos = ({src}) => {


return (
  <>
  <div className="saved-wrapper">
  <img className='saved-photo' src={src}></img>
  </div>
  </>
)

}


export default Photos