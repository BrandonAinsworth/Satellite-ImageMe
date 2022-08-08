import React from "react";
import './Photos.css'
import PropTypes from 'prop-types';

const Photos = ({src}) => {


return (
  <>
  <img data-cy="saved-photo" className='saved-photo' src={src}></img>
  </>
)

}


export default Photos

Photos.propTypes = {
  src: PropTypes.string.isRequired
}