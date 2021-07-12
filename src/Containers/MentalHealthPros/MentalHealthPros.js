import React, { useState, useEffect } from 'react';
import { retrievePageData } from '../../utils/apiCalls'
// import { mentalHealthProfessionals } from '../../mockData'
import Card from '../../Components/Cards/Cards'

const MentalHealthPros = () => {
  const [mentalHealthProsList, setMentalHealthProsList] = useState([])

  useEffect(() => {
    let mounted = true;
    retrievePageData('mhp', 'Colorado')
      .then(mhps => {
        if(mounted) {
          setMentalHealthProsList(mhps.data.attributes.list)
        }
      })
    return () => mounted = false;
  }, [])

  const allMentalHealthPros = mentalHealthProsList.map(mentalHealthPro => {
    return(
      <Card
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
    <>
      <h2>Mental health professionals here</h2>
      <section>{allMentalHealthPros}</section>
    </>
  )
}

export default MentalHealthPros
