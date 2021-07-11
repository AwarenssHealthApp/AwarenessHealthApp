import React, { useState } from 'react'
import { mentalHealthProfessionals } from '../../mockData'
import Cards from '../../Components/Cards/Cards'

const MentalHealthPros = () => {
  const [mentalHealthProsList, setMentalHealthProsList] = useState(mentalHealthProfessionals.attributes.list)
  const allMentalHealthPros = mentalHealthProsList.map(mentalHealthPro => {
    return(
      <Cards
      id={mentalHealthPro.id}
      key={mentalHealthPro.id}
      firstName={mentalHealthPro.first_name}
      lastName={mentalHealthPro.last_name}
      street={mentalHealthPro.street}
      unit={mentalHealthPro.unit}
      city={mentalHealthPro.city}
      state={mentalHealthPro.state}
      zip={mentalHealthPro.zip}
      phone={mentalHealthPro.phone}
      vetted={mentalHealthPro.vetted}
      specialties={mentalHealthPro.specialties}
      insurances={mentalHealthPro.insurances}
      cost={mentalHealthPro.cost}
      />
    )
  })
  return(
    <h2>Mental health professionals here</h2>
  )
}

export default MentalHealthPros
