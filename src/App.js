import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [imageURL , setImage] = useState('')
  const [userLong, setLongitude] = useState('')
  const [userLat, setLatitude] = useState('')
  const [userDate, setDate] = useState('')


  const apiKey = process.env.REACT_APP_API_KEY


 const fetchData = () => {
  console.log('fetch',userLat, userLong)
  fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${userLong}&lat=${userLat}&date=2014-08-01&&dim=0.10&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
    setImage(data.url);
    })
}
    

const getCoords = () => {

  const options = {
    enableHighAccuracy: true,
    timeout: 1000000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;
    setLatitude(crd.latitude.toFixed(2).toString())
    setLongitude(crd.longitude.toFixed(2).toString())
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  }

  useEffect(() => {
    if(userLong && userLat) {
    fetchData()
    }
   },[userLat, userLong])

  return (
    <>
   <p>Satellite 🛰</p>
  <img src={imageURL}></img>
  <button onClick={getCoords}></button>
   </>
  )
  }
export default App;
