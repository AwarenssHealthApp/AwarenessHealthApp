import PropTypes from 'prop-types'

export const Checkboxes = (props) => {
  const {
    options,
    label,
    handleChange
  } = props

  return (
    <>
      <p htmlFor={label}>Select Insurance Providers</p>

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
<<<<<<< HEAD
  label: PropTypes.string,
=======
  label: PropTypes.arrayOf(PropTypes.string),
>>>>>>> 9c7b17d (Add thank you message on successful submition)
  handleChange: PropTypes.func
}
