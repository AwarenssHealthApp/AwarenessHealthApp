import PropTypes from 'prop-types'

export const DropDown = (props) => {
  const {
    options,
    label,
    handleChange
  } = props

  return (
    <>
      <label htmlFor={label}>Choose an option:</label>

        <select
          name={label}
          id={label}
          onChange={handleChange}
        >
          <option key='choose-option' value=''>--Please choose an option--</option>
          {options.map(item => (
            <option
              key={item.endpoint || item}
              value={item.endpoint || item}
            >
              {item.text || item}
            </option>
          ))}
       </select>

    </>
  )
}

DropDown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  handleChange: PropTypes.func
}
