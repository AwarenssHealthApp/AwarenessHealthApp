import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function DarkModeSwitch() {
  const { toggleDarkMode } = useContext(ThemeContext)
  return (
    <>
      <button className='dark-mode-button' onClick={() => toggleDarkMode()}>Dark Mode</button>
    </>
  )
}

export default DarkModeSwitch
