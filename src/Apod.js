import React, { useEffect, useState } from 'react';
import './Apod.css'
import Form from './Form';


const Astronomy = ({apiKey, saveImage}) => {

const [apod, setApod] = useState({})

const [userDate, setDate] = useState('')


const fetchSpecific = (e) => {
e.preventDefault()

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${userDate}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  setApod(data)
  })
}


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
    </>
  )
}



export default Astronomy;