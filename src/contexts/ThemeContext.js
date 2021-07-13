import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [light, setLight] = useState({
    background: white,
    color: black
  })
  const [dark, setDark] = useState({
    background: black,
    color: white
  })
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
}

export default ThemeContextProvider
