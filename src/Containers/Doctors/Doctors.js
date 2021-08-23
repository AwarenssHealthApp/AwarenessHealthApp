import React, { useState, useEffect, useContext } from 'react';
import { retrievePageData } from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ProviderContext } from '../../contexts/ProviderContext';
import Error from '../../Components/Error/Error';
import './_doctors.scss';

const Doctors = () => {
  const [error, setError] = useState('')

  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  const { doctorList, setDoctorList, filteredDoctorList } = useContext(ProviderContext)

  const [doctorsToDisplay, setDoctorsToDisplay] = useState(doctorList)

  useEffect(() => {
    setDoctorsToDisplay(filteredDoctorList)
  }, [filteredDoctorList])

  useEffect(() => {
    let mounted = true;
    retrievePageData('doctor', 'Colorado')
      .then(doctors => {
        if(mounted) {
          setDoctorList(doctors.data.attributes.doctors)
          setDoctorsToDisplay(doctors.data.attributes.doctors)
        }
      })
      .catch(error => setError('Oops, looks like our computer gnome is fixing something right now.  Please try again later'))
    return () => mounted = false;
  }, [setDoctorList])

  const allDoctors = doctorsToDisplay?.map(doctor => {
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
      vetted={doctor.vetted}
      />
    )
  })

  return(
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}
      style={{ color: theme.color, background: theme.background }}>

      <div className='bottom-page-view'>
        <section className='providers-container'>
          <div className='provider-subtitle'>
            <h2 className='dr-sub-title'>Informed Doctors</h2>
              {error &&
                <Error error={error} />
              }
<<<<<<< HEAD
<<<<<<< HEAD
              {!doctorsToDisplay.length &&
                <h4>Loading...</h4>
              }
=======
>>>>>>> 5a85d39... Display unvetted providers
=======
              {!doctorsToDisplay.length &&
                <h4>Loading...</h4>
              }
>>>>>>> b0cd125... Add loading message to each page that waits for a GET request to load
          </div>
          <article className='all-drs'>
            {allDoctors}
          </article>
        </section>
      </div>
    </div>
  )
}

export default Doctors
