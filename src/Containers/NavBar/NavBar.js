import React from 'react';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';
import { Link } from 'react-router-dom';
// change the button name to nav bar
//width 100%
//75 to 50px $height
//display flex, justify content RIGHT

const NavBar = () => {

  return(
    <article className='dr-settings-buttons'>
      <DarkModeSwitch />
      <Link to='/'>
      <button className='dr-home-button'>Home</button>
      </Link>
    </article>
  )

}

export default NavBar;
