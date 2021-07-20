import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';

const Header = () => {
  return (
    <header>
      <h1 className='main-title'>Head To Toe</h1>
      <nav className='nav-bar'>
      <article className='main-button-wrapper'>
        <Link to='/doctors'>
          <button className='main-buttons' id='doctors-button'>Doctors</button>
        </Link>
        <Link to='/mental_health_professionals'>
          <button className='main-buttons' id='mental-health-pros-button'>Mental Health Professionals</button>
        </Link>
        <Link to='/submit'>
          <button className='main-buttons' id='submit-button'>Suggest A Provider</button>
        </Link>
      </article>


      </nav>
    </header>
  )
}

export default Header
