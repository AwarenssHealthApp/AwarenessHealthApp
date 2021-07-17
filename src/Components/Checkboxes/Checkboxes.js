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
              type="checkbox"
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
