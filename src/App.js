import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form';
import Header from './Header';
import Nav from './Nav';
import Apod from './Apod';
import SavedImg from './SavedImg';
import About from './About';
import asset from './assets/satellite_transmitting.gif'
import Error from './Error';
import { Route, Switch } from 'react-router-dom';



const App = () => {

  const apiKey = process.env.REACT_APP_API_KEY

  const [imageURL, setImage] = useState('')
  const [userLong, setLongitude] = useState('')
  const [userLat, setLatitude] = useState('')
  const [userDate, setDate] = useState('')
  const [savedImages, setSavedImage] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const fetchData = () => {
    setLoading(true)
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${userLong}&lat=${userLat}&date=${userDate}&&dim=0.12&api_key=${apiKey}`)
      .then(res => {
        if (!res.ok) {
          setError(true)
          throw new Error();
      }
      return res.json();
    })
      .then(data => {
        setImage(data.url);
      })
    .catch((error) => {
      console.log('ERROR!')
    });
  };


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
    if (userLong && userDate) {
      setLoading(true)
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
        <div className = 'image-wrapper'> {userLat && userLong && userDate  ?
          <>   
        {!error ? <img date-cy="sat-image" className= 'satellite-image' alt='your location based on coordinates' src= {imageURL}></img> : <p>Unfortunately we don't have that photo! Please try another date.</p> }
        <p className='coordinates'>Your coordinates are:<br></br><br></br>
        <b>Latitude:</b> {userLat}<br></br><br></br>
        <b>Longitude:</b> {userLong}<br></br>
        </p>
        <button className='save-button' value= { imageURL } onClick= { saveImage }> Save this Image! 
        </button>
        </> 
        :        
        loading ? <img date-cy="load-image" className='load-image' src={asset}></img> : <>
          <p data-cy="user-notice" className='user-notice'>Your image will load here!<br></br><br></br><b>Expected wait:</b> 5-10 seconds<br></br><br></br>
          Simply select a date, and a satellite image of your location will be rendered.</p>
          </>
        }
        </div> 
        <Form loading={loading} setLoading={setLoading} getCoords= {getCoords} userDate= { userDate }  setDate= { setDate }/> 
      </Route> 
      
      <Route exact path = '/dailyphoto'> 
        <Apod apiKey = { apiKey } saveImage= { saveImage } setSavedImage= { setSavedImage } savedImages= { savedImages }/> 
      </Route> 
      <Route path = '/savedphotos'>
        <SavedImg savedImages= { savedImages }/> 
      </Route>
      <Route path = '/about'>
        <About />
      </Route>
      <Route 
        path='/*' 
        render={()=> <Error />}/>
    </Switch> 
 </>
 
  )
}
export default App;