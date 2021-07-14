import React, { useState } from 'react'
import { addContribution } from '../../utils/apiCalls'

function ContributionForm(props) {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [specialties, setSpecialties] = useState(null)
  const [insurances, setInsurances] = useState(null)
  const [street, setStreet] = useState(null)
  const [unit, setUnit] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [zip, setZip] = useState(null)
  const [phone, setPhone] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = (event) => {
    event.preventDefault()
    if(firstName &&
      lastName &&
      insurances &&
      state &&
      phone) {
        const data = {
          first_name: firstName,
          last_name: lastName,
          specialties: specialties,
          insurances: insurances,
          street: street,
          unit: unit,
          city: city,
          state: state,
          zip: zip,
          phone: phone,
        }
        this.sendRequest(data)
      } else {
        setError('Please fill out all input fields')
      }
  }

  const sendRequest = (data) => {
    addContribution(data)
    .then(clearInputs())
    //confirmation of submission?
    .catch(error => {
      setError(error)
    })
  }

  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setSpecialties('')
    setInsurances('')
    setStreet('')
    setUnit('')
    setCity('')
    setState('')
    setZip('')
    setPhone('')
  }

  return (
    <>
      <form>
        <h2>Contribution Form</h2>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <input
          type='text'
          placeholder='Specialty'
          name='specialties'
          value={specialties}
          onChange={event => setSpecialties(event.target.value)}
        />
        <input
          type='text'
          placeholder='Insurance'
          name='insurances'
          value={insurances}
          onChange={event => setInsurances(event.target.value)}
        />
        <input
          type='text'
          placeholder='Street'
          name='street'
          value={street}
          onChange={event => setStreet(event.target.value)}
        />
        <input
          type='text'
          placeholder='Unit'
          name='unit'
          value={unit}
          onChange={event => setUnit(event.target.value)}
        />
        <input
          type='text'
          placeholder='City'
          name='city'
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <input
          type='text'
          placeholder='State'
          name='state'
          value={state}
          onChange={event => setState(event.target.value)}
        />
        <input
          type='text'
          placeholder='Zip Code'
          name='zip'
          value={zip}
          onChange={event => setZip(event.target.value)}
        />
        <input
          type='text'
          placeholder='Phone Number'
          name='phone'
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
        <button onClick={(event) => handleClick(event)}>Submit</button>
      </form>
    </>
  )
}

export default ContributionForm
