import React, { createContext, useState } from 'react';
export const StateSelectContext = createContext()

const StateSelectContextProvider = (props) => {
  const [state, setState] = useState('')

  return (
    <StateSelectContext.Provider value={{ state, setState }}>
      {props.children}
    </StateSelectContext.Provider>
  )
}

export default StateSelectContextProvider
