import React, { useState } from 'react';

const Card = ({ firstName, lastName, street, unit, city, state, zip, speciality, phoneNum, key, vetted }) => {
  return (
      <article className='provider-card'>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h3>{speciality}</h3>
        <h3>{vetted}</h3>

        <button className='accept-button'</button>
        <button className='deny-button'</button>
      </article>
    )

}

export default Card;
