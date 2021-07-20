import React, { useState, useEffect, useContext } from 'react';
import { retrievePageData } from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ProviderContext } from '../../contexts/ProviderContext';
import Error from '../../Components/Error/Error';
import './_mentalHealthPros.scss'

const MentalHealthPros = () => {
  const [error, setError] = useState('')

  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light

  const { mentalHealthProsList, setMentalHealthProsList, filteredMentalHealthProsList } = useContext(ProviderContext)

  useEffect(() => {
    let mounted = true;
    retrievePageData('mhp', 'Colorado')
      .then(mhps => {
        if(mounted) {
          setMentalHealthProsList(mhps.data.attributes.list)
        }
      })
      .catch(error => setError('Oops, looks like our computer gnome is fixing something right now.  Please try again later'))
    return () => mounted = false;
  }, [])

  const mentalHealthProsToDisplay = filteredMentalHealthProsList.length ? filteredMentalHealthProsList : mentalHealthProsList

  const allMentalHealthPros = mentalHealthProsToDisplay?.map(mentalHealthPro => {
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

    <div className='mhp-container' style={{ color: theme.color, background: theme.background }}>

    <div className='bottom-page-view'>
      <section className='providers-container'>
        <div className='provider-subtitle'>
            <h2 className='mhp-sub-title'>Informed Mental Health Professionals</h2>
            {error &&
              <Error error={error} />
            }
          </div>
        <section className='all-mhp'>{allMentalHealthPros}
        </section>
      </section>
    </div>

    </div>
  )
}
export default MentalHealthPros
