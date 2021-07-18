import React from 'react';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className='App-title'>Head To Toe</h1>
      <nav className='nav-bar'>
        <Link to='/doctors'>
          <button className='App-buttons' id='doctors-button'>Doctors</button>
        </Link>
        <Link to='/mental_health_professionals'>
          <button className='App-buttons' id='mental-health-pros-button'>Mental Health Professionals</button>
        </Link>
        <Link to='/submit'>
          <button className='App-buttons' id='submit-button'>Submit</button>
        </Link>
        <DarkModeSwitch />
      </nav>
    </header>
  )
}

export default Header
