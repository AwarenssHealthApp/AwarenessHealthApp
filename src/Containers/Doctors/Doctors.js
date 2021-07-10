import React, { useState } from 'react'
import { doctors } from '../../mockData'

const Doctors = () => {
  const [doctorList, setDoctorList] = useState(doctors)
  return(
    <h1>Doctors here</h1>
  )
}

export default Doctors
