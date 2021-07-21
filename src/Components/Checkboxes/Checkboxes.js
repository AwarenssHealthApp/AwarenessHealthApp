import PropTypes from 'prop-types'

export const Checkboxes = (props) => {
  const {
    options,
    label,
    handleChange
  } = props

  return (
    <>
      <p className='checkBox-label' htmlFor={label}>Please Select All Insurance Carriers That Apply:</p>

        {options.map(item => (
          <div key={item}>
            <input
              type='checkbox'
              id={item}
              name={item}
              value={item}

              onChange={handleChange}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
    </>
  )
}

Checkboxes.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  handleChange: PropTypes.func
}
