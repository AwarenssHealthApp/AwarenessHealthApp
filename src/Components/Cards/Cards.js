import React from 'react';
import './_cards.scss';

const Card = ({ firstName, lastName, street, unit, city, state, zip, speciality, phoneNum, key, vetted }) => {
  return (
    <section className='provider-card-wrapper'>
      <article className='provider-card'>
        <h2 className='first-name'>{firstName}</h2>
        <h2 className='last-name'>{lastName}</h2>
        <h3 className='specialty'>{speciality}</h3>
        <h3 className='vetted'>{vetted}</h3>
        <p className='address'>{street}
           {unit}
           {city}
           {state}
           {zip}
           {phoneNum}
        </p>
        <button className='accept-button'></button>
        <button className='deny-button'></button>
      </article>
    </section>
  )

}

export default Card;
