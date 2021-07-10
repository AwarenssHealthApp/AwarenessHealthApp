import React, { useState } from 'react'
import { mentalHealthProfessionals } from '../../mockData'
import Cards from '../../Components/Cards/Cards'

const MentalHealthPros = () => {
  const [mentalHealthProsList, setMentalHealthProsList] = useState(mentalHealthProfessionals)
  const allMentalHealthPros = mentalHealthProsList.map(mentalHealthPro => {
    return(
      <Cards
      id={mentalHealthPro.id}
      key={mentalHealthPro.id}
      firstName={mentalHealthPro.attributes.first_name}
      lastName={mentalHealthPro.attributes.last_name}
      street={mentalHealthPro.attributes.street}
      unit={mentalHealthPro.attributes.unit}
      city={mentalHealthPro.attributes.city}
      state={mentalHealthPro.attributes.state}
      zip={mentalHealthPro.attributes.zip}
      phone={mentalHealthPro.attributes.phone}
      vetted={mentalHealthPro.attributes.vetted}
      specialty={mentalHealthPro.attributes.specialty}
      insurance={mentalHealthPro.attributes.insurance}
      cost={mentalHealthPro.attributes.cost}
      />
    )
  })
  return(
    <h1>Mental health professionals here</h1>
  )
}

export default MentalHealthPros
