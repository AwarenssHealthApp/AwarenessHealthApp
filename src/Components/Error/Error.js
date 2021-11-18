import React from 'react';

const Error = ({ error }) => {
  return (
    <article className='error-msg'>
      <h4>Error: {error}</h4>
    </article>
  )
}

export default Error
