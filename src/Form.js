import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './Form.css';
import dayjs from 'dayjs'
import PropTypes from 'prop-types';

const Form = ({getCoords, setDate, userDate, fetchSpecific, setLoading}) => {


const location = useLocation()
const [formDate, setFormDate] = useState(dayjs().format('YYYY/MM/DD').split('/').join('-'))

const configureDate = (date) => {
  setDate(date)
}

const submissionType = (e) => {
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
  maxDateMaker()
},[maxDateMaker, formDate])


return (
  <>
<div className="form-wrapper">
  <div className='action-wrapper'>
<form onSubmit={(e) => {submissionType(e)}}>
  <input
    data-cy="date-entry"
    className="date-field"
    type='date'
    max={formDate}
    onChange={(event) => configureDate(event.target.value)}
    required
  />
  <input data-cy="button" type="submit" className="btn" value='To Infinity!' />
</form>
</div>
</div>
  </>
)
}
export default Form;


Form.propTypes = {
  getCoords: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  userDate: PropTypes.string.isRequired,
  fetchSpecific: PropTypes.func,
  setLoading: PropTypes.func.isRequired
}