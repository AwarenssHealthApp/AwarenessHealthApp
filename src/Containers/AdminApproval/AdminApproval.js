<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
import { retrieveUnvetted, approveContribution } from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import Error from '../../Components/Error/Error';
import './_adminApproval.scss';

const Admin = () => {
  const [unvettedDoctorsList, setUnvettedDoctorsList] = useState([])
  const [unvettedMhpsList, setUnvettedMhpsList] = useState([])
  const [error, setError] = useState('')
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  useEffect(() => {
    let mounted = true;
    retrieveUnvetted()
      .then(providers => {
        if(mounted) {
          setUnvettedDoctorsList(providers.data.attributes.doctors)
          setUnvettedMhpsList(providers.data.attributes.mhps)
        }
      })
      .catch(error => setError('Oops, looks like our computer gnome is fixing something right now.  Please try again later'))
    return () => mounted = false;
  }, [setUnvettedDoctorsList, setUnvettedMhpsList])

  const approveProvider = (id, profession) => {
    approveContribution(id, profession)
    .then(() => {
      retrieveUnvetted()
      .then(providers => {
          setUnvettedDoctorsList(providers.data.attributes.doctors)
          setUnvettedMhpsList(providers.data.attributes.mhps)
      })
    })
  }

  //method to delete suggestion
    //make a DELETE request


  //pass in methods to approve and deny suggestions as props in each iteration of Card

  const allUnvettedDoctors = unvettedDoctorsList?.map(unvetted => {
    return(
      <Card
        id={`doctor-${unvetted.id}`}
        key={`doctor-${unvetted.id}`}
        firstName={unvetted.first_name}
        lastName={unvetted.last_name}
        street={unvetted.street}
        unit={unvetted.unit}
        city={unvetted.city}
        state={unvetted.state}
        zip={unvetted.zip}
        phone={unvetted.phone}
        vetted={unvetted.vetted}
        specialties={unvetted.specialties}
        insurances={unvetted.insurances}
        cost={unvetted.cost}
        approveProvider={approveProvider}
        providerType={'doctor'}
      />
    )
  })

  //pass in methods to approve and deny suggestions as props in each iteration of Card
  const allUnvettedMhps = unvettedMhpsList?.map(unvetted => {
    return(
      <Card
        id={`mhp-${unvetted.id}`}
        key={`mhp-${unvetted.id}`}
        firstName={unvetted.first_name}
        lastName={unvetted.last_name}
        street={unvetted.street}
        unit={unvetted.unit}
        city={unvetted.city}
        state={unvetted.state}
        zip={unvetted.zip}
        phone={unvetted.phone}
        vetted={unvetted.vetted}
        specialties={unvetted.specialties}
        insurances={unvetted.insurances}
        cost={unvetted.cost}
        approveProvider={approveProvider}
        providerType={'mhp'}
      />
    )
  })

  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}
      style={{ color: theme.color, background: theme.background }}>

      <div className='bottom-page-view'>
        <section className='providers-container'>
          <div className='provider-subtitle'>
            <h2 className='admin-sub-title'>Admin Approval</h2>
              {error &&
                <Error error={error} />
              }
              {!unvettedDoctorsList.length && !unvettedMhpsList.length &&
                <h4>Loading...</h4>
              }
          </div>
          <article className='all-unvetted'>
            {allUnvettedDoctors}
            {allUnvettedMhps}
          </article>
        </section>
      </div>
    </div>
  )
=======
import React from 'react';
=======
import React, { useState, useEffect, useContext } from 'react';
>>>>>>> 4c6f804... Implement ThemeContext for light and dark mode
=======
import React, { useContext } from 'react';
>>>>>>> cd865b2... Comment out imports not yet in use
//import API calls from '../../utils/apiCalls';
=======
import React, { useState, useEffect, useContext } from 'react';
<<<<<<< HEAD
import { retrieveUnvetted } from '../../utils/apiCalls';
<<<<<<< HEAD
>>>>>>> 37b50ea... Implement GET request for unvetted providers in AdminApproval
// import Card from '../../Components/Card/Card';
=======
=======
import { retrieveUnvetted, approveContribution } from '../../utils/apiCalls';
>>>>>>> 350e432... Pass patch request into cards
import Card from '../../Components/Card/Card';
>>>>>>> 5a85d39... Display unvetted providers
import { ThemeContext } from '../../contexts/ThemeContext';
import Error from '../../Components/Error/Error';
import './_adminApproval.scss';

const Admin = () => {
  const [unvettedDoctorsList, setUnvettedDoctorsList] = useState([])
  const [unvettedMhpsList, setUnvettedMhpsList] = useState([])
  const [error, setError] = useState('')
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  useEffect(() => {
    let mounted = true;
    retrieveUnvetted()
      .then(providers => {
        if(mounted) {
          setUnvettedDoctorsList(providers.data.attributes.doctors)
          setUnvettedMhpsList(providers.data.attributes.mhps)
        }
      })
      .catch(error => setError('Oops, looks like our computer gnome is fixing something right now.  Please try again later'))
    return () => mounted = false;
  }, [setUnvettedDoctorsList, setUnvettedMhpsList])

  //method to approve suggestion
    //make a PATCH request

  //method to delete suggestion
    //make a DELETE request


  //pass in methods to approve and deny suggestions as props in each iteration of Card
  const allUnvettedDoctors = unvettedDoctorsList?.map(unvetted => {
    return(
      <Card
        id={`doctor-${unvetted.id}`}
        key={`doctor-${unvetted.id}`}
        firstName={unvetted.first_name}
        lastName={unvetted.last_name}
        street={unvetted.street}
        unit={unvetted.unit}
        city={unvetted.city}
        state={unvetted.state}
        zip={unvetted.zip}
        phone={unvetted.phone}
        vetted={unvetted.vetted}
        specialties={unvetted.specialties}
        insurances={unvetted.insurances}
        cost={unvetted.cost}
        approveContribution={approveContribution}
        providerType={'doctor'}
      />
    )
  })

  //pass in methods to approve and deny suggestions as props in each iteration of Card
  const allUnvettedMhps = unvettedMhpsList?.map(unvetted => {
    return(
      <Card
        id={`mhp-${unvetted.id}`}
        key={`mhp-${unvetted.id}`}
        firstName={unvetted.first_name}
        lastName={unvetted.last_name}
        street={unvetted.street}
        unit={unvetted.unit}
        city={unvetted.city}
        state={unvetted.state}
        zip={unvetted.zip}
        phone={unvetted.phone}
        vetted={unvetted.vetted}
        specialties={unvetted.specialties}
        insurances={unvetted.insurances}
        cost={unvetted.cost}
        approveContribution={approveContribution}
        providerType={'mhp'}
      />
    )
  })

  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}
      style={{ color: theme.color, background: theme.background }}>

      <div className='bottom-page-view'>
        <section className='providers-container'>
          <div className='provider-subtitle'>
            <h2 className='admin-sub-title'>Admin Approval</h2>
              {error &&
                <Error error={error} />
              }
              {!unvettedDoctorsList.length && !unvettedMhpsList.length &&
                <h4>Loading...</h4>
              }
          </div>
          <article className='all-unvetted'>
            {allUnvettedDoctors}
            {allUnvettedMhps}
          </article>
        </section>
      </div>
    </div>
  )
<<<<<<< HEAD

>>>>>>> 7a4dd7a... Route AdminApproval from App Component
=======
>>>>>>> 04b4584... Separate unvetted doctors and mhps to create unique ids and keys
}

//implement propTypes

export default Admin
