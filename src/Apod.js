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
      <p>Want to see more images? Select any date below!</p>
      <Form setDate={setDate} userDate={userDate} fetchSpecific={fetchSpecific}/>
    <p>{apod.title}</p>
    <img className='apod-image' src={apod.url}></img>
    <button value={apod.url} onClick={saveImage}>SAVE THIS IMAGE!</button>
    <p>{apod.explanation}</p>
    <p>{apod.copyright}</p>
    <p>{apod.date}</p>
    </div>
    </>
  )
}



export default Astronomy;