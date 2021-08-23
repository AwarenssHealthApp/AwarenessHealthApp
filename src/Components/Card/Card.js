import React from 'react';
import PropTypes from 'prop-types';
import './_card.scss';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances, vetted, approveProvider, id, providerType }) => {
=======
const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances, vetted }) => {
>>>>>>> 279c32b... Implement conditional rendering on Card component to display approve and deny buttons if providers are not yet vetted
=======
const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances, vetted, approveContribution, id }) => {
>>>>>>> 59fb57c... Add providertype to cards and start onclick for approve button
=======
const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances, vetted, approveContribution, id, providerType }) => {
>>>>>>> 0d55b57... Change id passed into card
=======
const Card = ({ firstName, lastName, street, unit, city, state, zip, specialties, phone, insurances, vetted, approveProvider, id, providerType }) => {
>>>>>>> f95eddc... Remove unneccessary parse from patch request
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

  const getIdNumber = (id) => {
    const providerId = id.split('-')
    return providerId[1]
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
          {!vetted &&
            <div className='approve-deny-buttons'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <button className='approve-button' id={id} onClick={() => approveProvider(getIdNumber(id), providerType)}>Approve</button>
=======
              <button className='approve-button'>Approve</button>
>>>>>>> 279c32b... Implement conditional rendering on Card component to display approve and deny buttons if providers are not yet vetted
=======
              <button className='approve-button' onClick={() => approveContribution(id, )}>Approve</button>
>>>>>>> 59fb57c... Add providertype to cards and start onclick for approve button
=======
              <button className='approve-button' onClick={() => approveContribution(id, providerType)}>Approve</button>
>>>>>>> 0d55b57... Change id passed into card
=======
              <button className='approve-button' onClick={() => approveProvider(id, providerType)}>Approve</button>
>>>>>>> f95eddc... Remove unneccessary parse from patch request
=======
              <button className='approve-button' id={id} onClick={() => approveProvider(id, providerType)}>Approve</button>
>>>>>>> ce3897e... Make patch test more accurate to use
              <button className='deny-button'>Deny</button>
            </div>
          }
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
