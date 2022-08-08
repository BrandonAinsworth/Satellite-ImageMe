import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {


return (
<>
<div className="header-wrap">
  <p data-cy="emoji" className="satellite-emoji">🛰</p>
  <Link to='/'>
  <h1 data-cy="header-h1" className="header-h1">Satellite-ImageMe</h1>
  </Link>
  <p data-cy="emoji" className="satellite-emoji">🛰</p> 
</div>
</>
)

}




export default Header;