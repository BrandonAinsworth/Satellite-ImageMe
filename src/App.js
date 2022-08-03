import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [imageURL , setImage] = useState('')

 useEffect(() => {
  async function fetchData() {
    const res = await fetch('https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2014-08-01&&dim=0.10&api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l');
    const data = await res.json();
    setImage(data.url);
  }
    fetchData()
 },[])

const getCoords = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
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





  return (
    <>
   <p>Satellite 🛰</p>
  <img src={imageURL}></img>
  <button onClick={getCoords}></button>
   </>
  )
}

export default App;
