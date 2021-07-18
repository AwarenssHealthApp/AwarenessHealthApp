import React, { useState } from 'react';
import { DropDown } from '../../Components/DropDown/DropDown';
import { Checkboxes } from '../../Components/Checkboxes/Checkboxes';
import { addContribution } from '../../utils/apiCalls';
import Error from '../../Components/Error/Error';

function ContributionForm() {
  const [state, setState] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [specialties, setSpecialties] = useState([])
  const [insurances, setInsurances] = useState([])
  const [typedInsurances, setTypedInsurances] = useState('')
  const [cost, setCost] = useState('')
  const [profession, setProfession] = useState('')
  const [street, setStreet] = useState('')
  const [unit, setUnit] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')
  const [submitionMessage, setSubmitionMessage] = useState('')
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
        data.specialties = makeList()
        setError(null)
        sendRequest(data)
      } else if(profession === 'mhp') {
          data = {...data, cost}
          data.specialties = makeList()
          setError(null)
          sendRequest(data)
      } else {
        setError('Please fill out the First Name, Last Name, Profession, Insurance, and State fields for this provider, at minimum.')
      }
  }

  const sendRequest = (data) => {
    addContribution(data)
      .then(setSubmitionMessage('Thank you for your submition'))
      .then(setTimeout((()=>{
        window.location.reload()
      }), 2000))
      .catch(error => {
        setError(error.message)
      })
  }

  const handleChange = (setFunction, event) => {
    const value = event.target.value;
    setFunction(value)
  }

  const handleChangeCheckbox = (setFunction, event) => {
    if(insurances.includes(event.target.value)) {
      setFunction(
        insurances.filter(item => item !== event.target.value)
      )
    } else {
      setFunction(
        [...insurances, event.target.value]
      )
    }
  }

  const makeList = () => {
    if(specialties) {
      const splitList = specialties.split(', ')
      return splitList
    } else {
      return []
    }
  }

  return (
    <>
      <form>
        <h2>Contribution Form</h2>
        {submitionMessage &&
          <h2>{submitionMessage}</h2>}
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
          value={profession}
          handleChange={event => handleChange(setProfession, event)}
        />
        <input
          type='text'
          placeholder='Specialties (e.g. Transgender, Trauma and PTSD, ADHD)'
          name='specialties'
          value={specialties}
          onChange={event => handleChange(setSpecialties, event)}
        />
        <Checkboxes
          options={[
            'Aetna', 'Anthem', 'Blue Cross BlueShield National', 'Blue Cross and Blue Shield of Nebraska', 'Bright Health', 'Cigna', 'Cigna HealthSpring', 'Colorado Access', 'Coventry', 'Denver Health',
            'First Health', 'Friday Health Plans', 'Health First Colorado', 'Humana', 'Kaiser Permanente', 'Medicare Traditional', 'Multiplan', 'Oxford Health Plans', 'Rocky Mountain Health Plans', 'UnitedHealthcare',
            'Out of Network', 'Other'
          ]}
          label='insurances'
          value={insurances}
          handleChange={event => handleChangeCheckbox(setInsurances, event)}
        />
        <input
          type='text'
          placeholder='Insurances (Seperated by a comma)'
          name='typedInsurances'
          value={typedInsurances}
          onChange={event => handleChange(setTypedInsurances, event)}
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
          value={state}
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
          <Error error={error} />
        }
      </form>
    </>
  )
}

export default ContributionForm
