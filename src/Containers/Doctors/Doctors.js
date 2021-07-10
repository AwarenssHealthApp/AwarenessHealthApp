import React, { useState } from 'react'
import { doctors } from '../../mockData'

const Doctors = () => {
  const [doctorList, setDoctorList] = useState(doctors)
  const allDoctors = doctorList.map(doctor => {
    return(
      <Card
      id={doctor.id}
      key={doctor.id}
      firstName={doctor.attributes.first_name}
      lastName={doctor.attributes.last_name}
      street={doctor.attributes.street}
      unit={doctor.attributes.unit}
      city={doctor.attributes.city}
      state={doctor.attributes.state}
      zip={doctor.attributes.zip}
      phone={doctor.attributes.phone}
      vetted={doctor.attributes.vetted}
      specialty={doctor.attributes.specialty}
      insurance={doctor.attributes.insurance}
      />
    )
  })
  return(
    <h1>Doctors here</h1>
  )
}

export default Doctors
