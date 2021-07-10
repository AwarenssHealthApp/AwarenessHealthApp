import React, { useState } from 'react'
import { mentalHealthProfessionals } from '../../mockData'

const MentalHealthProfessionals = () => {
  const [mentalHealthProfessionalsList, setMentalHealthProfessionalsList] = useState(mentalHealthProfessionals)
  return(
    <h1>Mental health professionals here</h1>
  )
}

export default MentalHealthProfessionals
