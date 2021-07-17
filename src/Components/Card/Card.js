import React from 'react';
import PropTypes from 'prop-types';
import './_card.scss';

const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances }) => {
  const allListItems = (type) => {
    let tempListItems = []
    type.forEach(listItem => {
      if (type === specialties) {
        tempListItems.push(listItem.name)
      } else if (type === insurances) {
        tempListItems.push(listItem.company)
      }
    })
    return tempListItems.join(', ')
  }

  return (
    <section className='provider-card-wrapper'>
      <article className='provider-card'>
        <h2 className='first-name'>{firstName}</h2>
        <h2 className='last-name'>{lastName}</h2>
        <h3 className='specialties'>Specializes in {allListItems(specialties)}</h3>
        <p className='address'>{street} {unit} {city}, {state} {zip} {phone}</p>
        <p className='insurances'>Accepts {allListItems(insurances)}</p>
        <button className='accept-button'>Love</button>
        <button className='deny-button'>Don't Love</button>
      </article>
    </section>
  )

}

Card.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  street: PropTypes.string,
  unit: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  specialties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  phone: PropTypes.string,
  insurances: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string
  }))
}

export default Card;
