import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './Form.css';
import dayjs from 'dayjs'

const Form = ({getCoords, setDate, userDate, fetchSpecific, loading, setLoading}) => {


const location = useLocation()
const [formDate, setFormDate] = useState(dayjs().format('YYYY/MM/DD').split('/').join('-'))

const configureDate = (date) => {
  setDate(date)
}

const submissionType = (e) => {
  console.log(location.pathname)
  if(location.pathname === '/') {
    setLoading(true)
   return getCoords(e, userDate)
  } else {
   return fetchSpecific(e)
  }
}

const maxDateMaker = () => {
  if(location.pathname === '/') {
    setFormDate(dayjs().subtract(7, 'month').format('YYYY/MM/DD').split('/').join('-'))
  } else {
    setFormDate(dayjs().format('YYYY/MM/DD').split('/').join('-'))
  }
}

useEffect(() => {
  console.log('hello form')
  console.log(formDate)
  maxDateMaker()
},[maxDateMaker, formDate])


return (
  <>
<div className="form-wrapper">
  <div className='action-wrapper'>
  <input
    className="date-field"
    type='date'
    max={formDate}
    onChange={(event) => configureDate(event.target.value)}
  />
<button className="btn" onClick={(e) => { submissionType(e) }}>To Infinity!
</button>
</div>
</div>
  </>
)
}
export default Form;