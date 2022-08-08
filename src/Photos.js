import React from "react";
import './Photos.css'

const Photos = ({src}) => {


return (
  <>
  <img data-cy="saved-photo" className='saved-photo' src={src}></img>
  </>
)

}


export default Photos