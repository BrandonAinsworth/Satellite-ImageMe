import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import Header from './Header';
import Nav from './Nav';
import Apod from './Apod';
import SavedImg from './SavedImg';
import asset from './assets/satellite_transmitting.gif'
import { Route, Switch } from 'react-router-dom';



const App = () => {

  const apiKey = process.env.REACT_APP_API_KEY

  const [imageURL, setImage] = useState('')
  const [userLong, setLongitude] = useState('')
  const [userLat, setLatitude] = useState('')
  const [userDate, setDate] = useState('')
  const [savedImages, setSavedImage] = useState([])
  const [loading, setLoading] = useState(false)


  const fetchData = () => {
    setLoading(true)
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${userLong}&lat=${userLat}&date=${userDate}&&dim=0.12&api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setImage(data.url);
      })
  }


  const getCoords = (e, date) => {
    e.preventDefault()
    setLoading(true)
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
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    setLatitude('')
    setLongitude('')
  }

  useEffect(() => {
    {console.log(loading)}
    if (userLong && userDate) {
      setLoading(true)
      {console.log(loading)}
      fetchData()
    }
  }, [userLat, userLong, userDate, loading])


  const saveImage = (e) => {
    e.preventDefault()
    setSavedImage([...savedImages, e.target.value])
  }


  return ( 
    <>
    <Header />
    <Nav />
    <Switch>
    <Route exact path = '/' >
    <div className = 'image-wrapper'> {userLat && userLong && userDate 
    ?
      <> 
     <img className= 'satellite-image'alt= 'your location based on coordinates' src= {imageURL}></img> 
     <p>Your coordinates are:<br></br>
      Latitude: {userLat}<br></br>
      Longitude: {userLong}<br></br>
    </p>
     <button value= { imageURL } onClick= { saveImage }> Save this Image! 
     </button>
     </> 
    :        
    loading ? <img className='load-image' src={asset}></img> : <>
      <p>Your image will load here! <br></br> Expected wait: 5-10 seconds</p>
      </>
    }
    </div> 
    <Form loading={loading} setLoading={setLoading} getCoords= {getCoords} userDate= { userDate }  setDate= { setDate }/> 
    </Route> 
    
    <Route exact path = '/dailyphoto'> 
    <Apod apiKey = { apiKey } saveImage= { saveImage } setSavedImage= { setSavedImage } savedImages= { savedImages }
    /> 
    </Route> 
    <Route path = '/savedphotos'> { console.log(savedImages)} 
    <SavedImg savedImages= { savedImages }/> 
    </Route>
    </Switch> 
 </>
 
  )
}
export default App;