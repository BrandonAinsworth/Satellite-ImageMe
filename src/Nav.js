import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {



  return (
    <div className="nav-bar">
      <Link to='/'>
      <p className="nav-element">ImageMe</p>
      </Link>
      <Link to='/dailyphoto'>
      <p className="nav-element">Photo of the Day</p>
      </Link>
      <Link to='/savedphotos'>
        <p className="nav-element">Saved Photos</p>
      </Link>
      <Link to='/about'>
        <p className="nav-element">About</p>
      </Link>
    </div>
  )
}


export default Nav;