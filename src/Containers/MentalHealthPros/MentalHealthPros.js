import React, { useState, useEffect, useContext } from 'react';
import { retrievePageData } from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import SearchByInsurance from '../../Components/SearchByInsurance/SearchByInsurance';
import Error from '../../Components/Error/Error';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';

const MentalHealthPros = () => {
  const [mentalHealthProsList, setMentalHealthProsList] = useState([])
  const [filteredMentalHealthProsList, setFilteredMentalHealthProsList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true;
    retrievePageData('mhp', 'Colorado')
      .then(mhps => {
        if(mounted) {
          setMentalHealthProsList(mhps.data.attributes.mhps)
        }
      })
      .catch(error => setError(error.message))
    return () => mounted = false;
  }, [])

  const mentalHealthProsToDisplay = filteredMentalHealthProsList.length ? filteredMentalHealthProsList : mentalHealthProsList

  const allMentalHealthPros = mentalHealthProsToDisplay.map(mentalHealthPro => {
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

  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light

  return(
    <div className='mhp-container' style={{ color: theme.color, background: theme.background }}>
      <SearchByInsurance providerList={mentalHealthProsList} setFilteredProviderList={setFilteredMentalHealthProsList} />

      <DarkModeSwitch />
      <Link to='/'>
      <button className='home-button'>Home</button>
      </Link>

      <h2 className='mhp-sub-title'>Mental health professionals here</h2>
      {error &&
        <Error error={error} />
      }
      <section className='all-mhp'>{allMentalHealthPros}
        <Link to='/'>
        <button className='home-button'>Home</button>
        </Link>
      </section>
    </div>
  )
}

export default MentalHealthPros
