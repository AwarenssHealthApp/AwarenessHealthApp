import React, { useState, useEffect } from 'react';
import Card from '../../Components/Cards/Cards';
import { retrievePageData } from '../../utils/apiCalls';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    let mounted = true;
    retrievePageData('doctor', 'Colorado')
      .then(doctors => {
        if(mounted) {
          setDoctorList(doctors.data.attributes.list)
        }
      })
    return () => mounted = false;
  }, [])
  const allDoctors = doctorList.map(doctor => {
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
      vetted={doctor.vetted}
      specialties={doctor.specialties}
      insurances={doctor.insurances}
      />
    )
  })

  return(
    <>
      <h2>Doctors here</h2>
      <section>{allDoctors}
      <Link to='/'>
      <button className='home-button'>Home</button>
      </Link>
      </section>
    </>
  )
}

export default Doctors
