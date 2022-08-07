import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import './Form.css';


const Form = ({getCoords, setDate, userDate, fetchSpecific, loading, setLoading}) => {


const location = useLocation()

const configureDate = (date) => {
  setDate(date)
}

const submissionType = (e) => {
  console.log(location.pathname)
  if(location.pathname === '/') {
    setLoading = true
   return getCoords(e, userDate)
  } else {
   return fetchSpecific(e)
  }
}

return (
  <>
<div className="form-wrapper">
  <input
    type='date'
    onChange={(event) => configureDate(event.target.value)}
  />
<button onClick={(e) => { submissionType(e) }}>To Infinity!
</button>
{/* <button onClick={(e) => {
  console.log('clickDATE',userDate)
   getCoords(e, userDate)}}>To Infinity!
</button> */}
</div>
  </>
)
}
export default Form;