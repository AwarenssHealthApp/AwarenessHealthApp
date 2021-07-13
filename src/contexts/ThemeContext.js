import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)

}

export default ThemeContextProvider
