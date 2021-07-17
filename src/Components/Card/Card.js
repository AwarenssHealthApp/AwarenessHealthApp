import React from 'react';
import './_card.scss';

const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, vetted }) => {
  const allSpecialties = specialties.map(specialty => {
    return specialty.name + ' '
  })
  return (
    <section className='provider-card-wrapper'>
      <article className='provider-card'>
        <h2 className='first-name'>{firstName}</h2>
        <h2 className='last-name'>{lastName}</h2>
        <h3 className='specialties'>{allSpecialties}</h3>
        <p className='address'>{street} {unit} {city}, {state} {zip} {phone}</p>
        <button className='accept-button'>Love</button>
        <button className='deny-button'>Don't Love</button>
      </article>
    </section>
  )

}

export default Card;
