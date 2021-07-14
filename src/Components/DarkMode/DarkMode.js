import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function DarkMode() {
  const { toggleDarkMode } = useContext(ThemeContext)
  return (
    <>
      <button onClick={() => toggleDarkMode()}>Dark Mode</button>
    </>
  )
}

export default DarkMode
