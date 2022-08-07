import React from "react";
import './Photos.css'

const Photos = ({src}) => {


return (
  <>
  <img className='saved-photo' src={src}></img>
  </>
)

}


export default Photos