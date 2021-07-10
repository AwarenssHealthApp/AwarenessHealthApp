import React, { useState } from 'react'
import doctors from '../../mockData'

const Doctors () => {
  const [doctorList, setDoctorList] = useSate(doctors)
  return(
    <h1>Doctors here</h1>
  )

}

export default Doctors
