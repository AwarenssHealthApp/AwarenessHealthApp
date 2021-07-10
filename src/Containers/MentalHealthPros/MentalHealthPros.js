import React, { useState } from 'react'
import { mentalHealthProfessionals } from '../../mockData'

const MentalHealthPros = () => {
  const [mentalHealthProsList, setMentalHealthProsList] = useState(mentalHealthProfessionals)
  return(
    <h1>Mental health professionals here</h1>
  )
}

export default MentalHealthPros
