import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {



  return (
    <div className="nav-bar">
      <Link to='/'>
      <p data-cy="nav-elem" className="nav-element">ImageMe</p>
      </Link>
      <Link to='/dailyphoto'>
      <p data-cy="nav-elem" className="nav-element">Photo of the Day</p>
      </Link>
      <Link to='/savedphotos'>
        <p data-cy="nav-elem" className="nav-element">Saved Photos</p>
      </Link>
      <Link to='/about'>
        <p data-cy="nav-elem" className="nav-element">About</p>
      </Link>
    </div>
  )
}


export default Nav;