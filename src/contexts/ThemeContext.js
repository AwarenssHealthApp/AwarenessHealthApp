import React, { createContext, useState } from 'react';
export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [light] = useState({
    background: '#d1edf0',
    color: '#101f24'
  })
  const [dark] = useState({
    background: '#101f24',
    color: '#d1edf0'
  })
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ light, dark, darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
