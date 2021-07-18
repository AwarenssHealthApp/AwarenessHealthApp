import React, { useState, useEffect, useContext } from 'react';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import SearchByInsurance from '../../Components/SearchByInsurance/SearchByInsurance';
import Error from '../../Components/Error/Error';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';
import { retrievePageData } from '../../utils/apiCalls';

const Doctors = () => {
  const [doctorList, setDoctorList] = useState([])
  const [filteredDoctorList, setFilteredDoctorList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true;
    retrievePageData('doctor', 'Colorado')
      .then(doctors => {
        if(mounted) {
          setDoctorList(doctors.data.attributes.doctors)
        }
      })
      .catch(error => setError(error.message))
    return () => mounted = false;
  }, [])

  const doctorsToDisplay = filteredDoctorList.length ? filteredDoctorList : doctorList

  const allDoctors = doctorsToDisplay.map(doctor => {
    return(
      <Card
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
      specialties={doctor.specialties}
      insurances={doctor.insurances}
      />
    )
  })

  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  return(
    <div className='doctors-container' style={{ color: theme.color, background: theme.background }}>
      <SearchByInsurance providerList={doctorList} setFilteredProviderList={setFilteredDoctorList}/>

      <DarkModeSwitch />
      <Link to='/'>
      <button className='home-button'>Home</button>
      </Link>

      <h2 className='dr-sub-title'>Doctors</h2>

      {error &&
        <Error error={error} />
      }

      <section className='all-drs'>{allDoctors}

      </section>
    </div>
  )
}

export default Doctors
