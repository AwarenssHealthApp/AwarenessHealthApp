import React, { createContext, useState } from 'react';
export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [light] = useState({
    background: 'white',
    color: 'black'
  })
  const [dark] = useState({
    background: 'black',
    color: 'white'
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
