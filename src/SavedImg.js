import React from "react";
import Photos from "./Photos";
import './SavedImg.css';
import PropTypes from 'prop-types';


const SavedImg = ({savedImages}) => {

const photos = savedImages.map(image => {
  return (
    <Photos
    src={image}
    key={Math.random() * 100}
    />
  )
})


return (
  <>
  {savedImages.length !== 0 ? <>
  <div className="saved-wrapper">
    {photos}
  </div>
  </>
  :
     <p className="none-saved">No saved Images!</p>
  }
  </>
)
}
export default SavedImg;

SavedImg.propTypes = {
  savedImages: PropTypes.array.isRequired
}