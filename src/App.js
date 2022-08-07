import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import Header from './Header';
import Nav from './Nav';
import Apod from './Apod';
import SavedImg from './SavedImg';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  
  const apiKey = process.env.REACT_APP_API_KEY
  const [imageURL , setImage] = useState('')
  const [userLong, setLongitude] = useState('')
  const [userLat, setLatitude] = useState('')
  const [userDate, setDate] = useState('')
  const [savedImages, setSavedImage] = useState([])
 

 const fetchData = () => {
  fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${userLong}&lat=${userLat}&date=${userDate}&&dim=0.12&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
    setImage(data.url);
    })
}
    

const getCoords = (e, date) => {
  e.preventDefault()

  const options = {
    enableHighAccuracy: true,
    timeout: 1000000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;
    setLatitude(crd.latitude.toFixed(2).toString())
    setLongitude(crd.longitude.toFixed(2).toString())
    setDate(date)
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
    if(userLong && userDate) {
    fetchData()
    }
   },[userLat, userLong, userDate])


const saveImage = (e) => {
    e.preventDefault()
    setSavedImage([...savedImages, e.target.value])
   }

  return (
    <>
    <Header />
    <Nav />
  <Switch>
    <Route exact path='/'>
  <div className='image-wrapper'>
  {userLat && userLong && userDate ?
    <> <img className='satellite-image' alt='your location based on coordinates' src={imageURL}></img>
        <button value={imageURL} onClick={saveImage}>Save this Image!</button> 
    </>
  : <p>Your image will load here! <br></br> Expected wait: 5-10 seconds</p>}
  </div>
  <Form getCoords={getCoords} userDate={userDate} setDate={setDate}/>
  </Route>
  <Route exact path='/dailyphoto'>
    <Apod apiKey={apiKey} saveImage={saveImage} setSavedImage={setSavedImage} savedImages={savedImages}/>
  </Route>
  <Route path ='/savedphotos'>
    {console.log(savedImages)}
    <SavedImg savedImages={savedImages}/>
  </Route>
  </Switch>
   </>
  )
  }
export default App;
