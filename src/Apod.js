import React, { useEffect, useState } from 'react';
import './Apod.css'

const Astronomy = ({apiKey, saveImage, savedImages, setSavedImage}) => {

const [apod, setApod] = useState({})

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    setApod(data)
    })
  },[])


  return (
    <>
    <div className='apod-wrapper'>
    <p>{apod.title}</p>
    <img src={apod.url}></img>
    <button value={apod.url} onClick={saveImage}>SAVE THIS IMAGE!</button>
    <p>{apod.explanation}</p>
    <p>{apod.copyright}</p>
    <p>{apod.date}</p>
    </div>
    </>
  )
}



export default Astronomy;