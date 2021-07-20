import React from 'react';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';
import { Link } from 'react-router-dom';
import './_navBar.scss';

const NavBar = () => {

  return(
    <section className='navigation-wrapper'>
        <DarkModeSwitch />
        <Link to='/'>
        <button className='navigation-button'>Home</button>
        </Link>
    </section>
  )
}

export default NavBar;
