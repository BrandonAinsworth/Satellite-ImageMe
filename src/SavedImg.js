import React from "react";
import Photos from "./Photos";

const SavedImg = ({savedImages}) => {

const photos = savedImages.map(image => {
  return (
    <Photos
    src={image}
    key={Date.now()}
    />
  )
})


return (
  <>
  {savedImages.length !== 0 ? <>
  <div>
    {photos}
  </div>
  </>
  : <p>No saved Images!</p>
  }
  </>
)
}
export default SavedImg;