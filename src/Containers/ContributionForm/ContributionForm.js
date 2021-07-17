import React, { useState, useContext } from 'react';
import { StateSelectContext } from '../../contexts/StateSelectContext';
import { DropDown } from '../../Components/DropDown/DropDown'
import { addContribution } from '../../utils/apiCalls'

function ContributionForm(props) {
  const { state, setState } = useContext(StateSelectContext)
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
    if(firstName &&
      lastName &&
      insurances &&
      state &&
      profession === 'doctor') {
        const data = {
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
        setError(null)
        sendRequest(data)
      } else if(firstName &&
          lastName &&
          insurances &&
          state &&
          profession) {
            const data = {
              first_name: firstName,
              last_name: lastName,
              profession: profession,
              specialties: specialties || null,
              insurance: insurances,
              cost: cost || null,
              street: street || null,
              unit: unit || null,
              city: city || null,
              state: state,
              zip: zip || null,
              phone: phone || null
            }
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
        <div>
          <label htmlFor='profession-select'>Select their profession:</label>
          <select name='profession' id='profession-select' onChange={event => setProfession(event.target.value)}>
              <option value=''>--Please choose an option--</option>
              <option value='mhp'>Mental Health Professional</option>
              <option value='doctor'>Doctor</option>
          </select>
        </div>
        <input
          type='text'
          placeholder='Specialty'
          name='specialties'
          value={specialties}
          onChange={event => setSpecialties([event.target.value])}
        />
        <input
          type='text'
          placeholder='Insurance'
          name='insurances'
          value={insurances}
          onChange={event => setInsurances([event.target.value])}
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
        <DropDown />
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
        <button className='contribution-button' onClick={(event) => handleClick(event)}>Submit</button>
        {error &&
          <p className='error-msg'>{error}</p>
        }
      </form>
    </>
  )
}

export default ContributionForm
