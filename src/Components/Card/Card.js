import React from 'react';
import './_card.scss';

const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances }) => {
  const allSpecialties = specialties.map(specialty => {
    return specialty.name + ', '
  })
  const allInsurances = insurances.map(insurance => {
    return insurance.company + ', '
  })
  return (
    <section className='provider-card-wrapper'>
      <article className='provider-card'>
        <h2 className='first-name'>{firstName}</h2>
        <h2 className='last-name'>{lastName}</h2>
        <h3 className='specialties'>Specializes in {allSpecialties}</h3>
        <p className='address'>{street} {unit} {city}, {state} {zip} {phone}</p>
        <p className='insurances'>Accepts {allInsurances}</p>
        <button className='accept-button'>Love</button>
        <button className='deny-button'>Don't Love</button>
      </article>
    </section>
  )

}

export default Card;
