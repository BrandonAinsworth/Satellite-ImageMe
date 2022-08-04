import React from "react";
import './Form.css';


const Form = ({getCoords, setDate, userDate}) => {


const configureDate = (date) => {
  setDate(date)
}

return (
  <>
<div className="form-wrapper">
  <input
    type='date'
    onChange={(event) => configureDate(event.target.value)}
  />

<button onClick={(e) => {
  console.log('clickDATE',userDate)
   getCoords(e, userDate)}}>To Infinity!
</button>
</div>
  </>
)
}
export default Form;