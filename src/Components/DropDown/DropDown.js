import React, { useContext } from 'react';
import { StateSelectContext } from '../../contexts/StateSelectContext';

export const DropDown = (props) => {
  const { setState } = useContext(StateSelectContext)
  const {
    options,
    label,
    handleChange
  } = props
  console.log(options)
  return (
    <>
      <label htmlFor={label}>Choose an option:</label>

      <select
        name={label}
        id={label}
        onChange={handleChange}
      >
          <option value=''>--Please choose an option--</option>
          <option value='Alabama'>Alabama</option>
          {options.map(item => (
            <option
              key={'option' + item}
              value={item}
            >
              {item}
            </option>
          ))}
      </select>
    </>
  )
}
