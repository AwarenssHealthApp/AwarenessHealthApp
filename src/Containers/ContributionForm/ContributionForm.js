import React, { useState } from 'react'
import { addContribution } from '../../utils/apiCalls'

function ContributionForm(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [insurance, setInsurance] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [error, setError] = useState('')

  const handleClick = (event) => {
    if(firstName &&
      lastName &&
      specialty &&
      insurance &&
      address &&
      phoneNum) {
        const data = {
          firstName,
          lastName,
          specialty,
          insurance,
          address,
          phoneNum
        }
        this.sendRequest(data)
      } else {
        setError('Please fill out all input fields')
      }
  }

  const clearInputs = () => {
    setFirstName('')
    setLastName('')
    setSpecialty('')
    setInsurance('')
    setAddress('')
    setPhoneNum('')
  }

  const sendRequest = (data) => {
    addContribution(data)
      .then(this.clearInputs())
      //confirmation of submission?
      .catch(error => {
        setError(error)
      })
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
        <button onClick={(event) => this.handleClick(event)}>Submit</button>
      </form>
    </>
  )
}

export default ContributionForm
