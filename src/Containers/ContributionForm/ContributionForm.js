import React, { useState } from 'react'
import { addContribution } from '../../utils/apiCalls'

function ContributionForm(props) {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [specialty, setSpecialty] = useState(null)
  const [insurance, setInsurance] = useState(null)
  const [address, setAddress] = useState(null)
  const [phoneNum, setPhoneNum] = useState(null)
  const [error, setError] = useState(null)

  const handleClick = (event) => {
    event.preventDefault()
    if(firstName &&
      lastName &&
      insurance &&
      state &&
      phoneNum) {
        const data = {
          first_name: firstName,
          last_name: lastName,
          specialties: specialty,
          insurance,
          address,
          phoneNum,
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
    setSpecialty('')
    setInsurance('')
    setAddress('')
    setPhoneNum('')
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
          name='specialty'
          value={specialty}
          onChange={event => setSpecialty(event.target.value)}
        />
        <input
          type='text'
          placeholder='Insurance'
          name='insurance'
          value={insurance}
          onChange={event => setInsurance(event.target.value)}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={address}
          onChange={event => setAddress(event.target.value)}
        />
        <input
          type='text'
          placeholder='Phone Number'
          name='phoneNum'
          value={phoneNum}
          onChange={event => setPhoneNum(event.target.value)}
        />
        <button onClick={(event) => handleClick(event)}>Submit</button>
      </form>
    </>
  )
}

export default ContributionForm
