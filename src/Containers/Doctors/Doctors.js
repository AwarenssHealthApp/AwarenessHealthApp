import React, { useState } from 'react'
import { doctors } from '../../mockData'
import Cards from '../../Components/Cards/Cards'

const Doctors = () => {
  const [doctorList, setDoctorList] = useState(doctors.attributes.list)
  const allDoctors = doctorList.map(doctor => {
    return(
      <Cards
      id={doctor.id}
      key={doctor.id}
      firstName={doctor.first_name}
      lastName={doctor.last_name}
      street={doctor.street}
      unit={doctor.unit}
      city={doctor.city}
      state={doctor.state}
      zip={doctor.zip}
      phone={doctor.phone}
      vetted={doctor.vetted}
      specialties={doctor.specialties}
      insurances={doctor.insurances}
      />
    )
  })
  return(
    <h2>Doctors here</h2>
  )
}

export default Doctors
