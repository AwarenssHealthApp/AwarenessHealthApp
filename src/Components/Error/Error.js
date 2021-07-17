import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='error-msg'>
      <h4>Error: {error}</h4>
    </div>
  )
}

export default Error
