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
    if (tempListItems.length) {
      return tempListItems.join(', ')
    } else {
      return 'Nothing on file for this provider'
    }
  }

  return (
    <div className='provider-card-wrapper'>
      <section className='card-grid'>
        <article className='provider-card'>
          <div className='name-frame'>
            <h2 className='first-name'>{firstName}</h2>
            <h2 className='last-name'>{lastName}</h2>
          </div>
          <h3 className='specialties'>Specialties: {allListItems(specialties)}</h3>
          <h3 className='insurances'>Insurance: {allListItems(insurances)}</h3>
          <p className='address'>{street} {unit} {city}, {state} {zip} </p>
          <h4 className='phone-number'>{phone}</h4>
        </article>
      </section>
    </div>
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
