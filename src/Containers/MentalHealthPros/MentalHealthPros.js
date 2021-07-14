import React, { useState, useEffect } from 'react';
import { retrievePageData } from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';

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
      <h2 className='mhp-sub-title'>Mental health professionals here</h2>
      <section>{allMentalHealthPros}
        <Link to='/'>
        <button className='home-button'>Home</button>
        </Link>
      </section>

    </>
  )
}

export default MentalHealthPros
