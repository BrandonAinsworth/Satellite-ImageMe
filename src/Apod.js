import React, { useEffect, useState } from 'react';
import './Apod.css';
import Form from './Form';
import PropTypes from 'prop-types';


const Apod = ({apiKey, saveImage}) => {

const [apod, setApod] = useState({})

const [userDate, setDate] = useState('')
const [error, setError] = useState(false)

const fetchSpecific = (e) => {
e.preventDefault()

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${userDate}`)
  .then(res => {
    if (!res.ok) {
      setError(true)
      throw new Error();
    }
    return res.json();
 })
    .then(data => {
      setApod(data)
  })
  .catch((error) => {
    console.log('ERROR!')
  });
}


  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => {
      if(!res.ok) {
        setError(true)
        throw new Error();
      }
      return res.json();
    })
    .then(data => {
      setApod(data)
    })
    .catch((error) => {
      console.log('ERROR!')
    });
  },[])


  return (
    <>
    {!error ?
    <div className='apod-wrapper'>
      <div className='wrapper-box'>
      <p>Want to see more images? Select any date below!</p>
      <Form setDate={setDate} userDate={userDate} fetchSpecific={fetchSpecific}/>
      </div>  
    <p className='apod-title'>{apod.title}</p>
    <img className='apod-image' src={apod.url}></img>
    <button className='apod-button' value={apod.url} onClick={saveImage}>Save this Image!</button>
    <div className='info-wrapper'>
      <p className='apod-explanation'><b>Explanation: </b>{apod.explanation}</p>
      <p className='apod-copyright'><b>Copyright:</b> {apod.copyright}</p>
      <p className='apod-date'><b>Date:</b> {apod.date}</p>
    </div>
    </div>
  : <>  <div className='apod-wrapper'> <div className='wrapper-box'>
  <p>Want to see more images? Select any date below!</p>
  <Form setDate={setDate} userDate={userDate} fetchSpecific={fetchSpecific}/>
  </div> <p data-cy="error">We encountered an error! Please try again. </p>  </div> </>}
    </>
  )
}



export default Apod;

Apod.propTypes = {
  apiKey: PropTypes.string.isRequired,
  saveImage: PropTypes.func.isRequired
}