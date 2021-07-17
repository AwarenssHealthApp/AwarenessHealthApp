import React, { useState } from 'react';
import { DropDown } from '../../Components/DropDown/DropDown'
import { addContribution } from '../../utils/apiCalls'

function ContributionForm(props) {
  const [state, setState] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [specialties, setSpecialties] = useState([])
  const [insurances, setInsurances] = useState([])
  const [cost, setCost] = useState('')
  const [profession, setProfession] = useState('')
  const [street, setStreet] = useState('')
  const [unit, setUnit] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    let data = {
      first_name: firstName,
      last_name: lastName,
      profession: profession,
      specialties: specialties || null,
      insurance: insurances,
      street: street || null,
      unit: unit || null,
      city: city || null,
      state: state,
      zip: zip || null,
      phone: phone || null
    }
    if(firstName &&
      lastName &&
      insurances &&
      state &&
      profession === 'doctor') {
        setError(null)
        sendRequest(data)
      } else if(profession === 'mhp') {
          data = {...data, cost}
          setError(null)
          sendRequest(data)
      } else {
        setError('Please fill out the First Name, Last Name, Profession, Insurance, and State fields for this provider, at minimum.')
      }
  }

  const sendRequest = (data) => {
    addContribution(data)
    .then(clearInputs())
    .catch(error => {
      setError(error.message)
    })
  }

  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setSpecialties('')
    setInsurances('')
    setCost('')
    setProfession('')
    setStreet('')
    setUnit('')
    setCity('')
    setState('')
    setZip('')
    setPhone('')
  }

  const handleChange = (setFunction, event) => {
    const value = event.target.value;
    setFunction(value)
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
          onChange={event => handleChange(setFirstName, event)}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={event => handleChange(setLastName, event)}
        />
        <DropDown
          options={[
              { endpoint:'mhp', text: 'Mental Health Professional' },
              { endpoint: 'doctor', text: 'Doctor'}
            ]}
          label='profession'
          handleChange={event => handleChange(setProfession, event)}
        />
        <input
          type='text'
          placeholder='Specialty'
          name='specialties'
          value={specialties}
          onChange={event => handleChange(setSpecialties, event)}
        />
        <input
          type='text'
          placeholder='Insurance'
          name='insurances'
          value={insurances}
          onChange={event => handleChange(setInsurances, event)}
        />
        {profession === 'mhp' &&
          <input
          type='text'
          placeholder='Cost'
          name='cost'
          value={cost}
          onChange={event => handleChange(setCost, event)}
          />
        }
        <input
          type='text'
          placeholder='Street'
          name='street'
          value={street}
          onChange={event => handleChange(setStreet, event)}
        />
        <input
          type='text'
          placeholder='Unit'
          name='unit'
          value={unit}
          onChange={event => handleChange(setUnit, event)}
        />
        <input
          type='text'
          placeholder='City'
          name='city'
          value={city}
          onChange={event => handleChange(setCity, event)}
        />
        <DropDown
          options={[
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
            'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
            'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
          ]}
          label='state'
          handleChange={event => handleChange(setState, event)}
        />
        <input
          type='text'
          placeholder='Zip Code'
          name='zip'
          value={zip}
          onChange={event => handleChange(setZip, event)}
        />
        <input
          type='text'
          placeholder='Phone Number'
          name='phone'
          value={phone}
          onChange={event => handleChange(setPhone, event)}
        />
        <button className='contribution-button' onClick={(event) => handleClick(event)}>Submit</button>
        {error &&
          <p className='error-msg'>{error}</p>
        }
      </form>
    </>
  )
}

export default ContributionForm
