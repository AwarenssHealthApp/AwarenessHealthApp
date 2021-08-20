import React, { useState, useEffect, useContext } from 'react';
import { retrieveUnvetted } from '../../utils/apiCalls';
// import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
// import Error from '../../Components/Error/Error';
import './_adminApproval.scss';

const Admin = () => {
  const [unvettedList, setUnvettedList] = useState([])
  const [error, setError] = useState('')
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  useEffect(() => {
    let mounted = true;
    retrieveUnvetted()
      .then(providers => {
        if(mounted) {
          setUnvettedList([...providers.data.attributes.doctors, ...providers.data.attributes.mhps])
        }
      })
      .catch(error => setError('Oops, looks like our computer gnome is fixing something right now.  Please try again later'))
    return () => mounted = false;
  }, [setUnvettedList])

  const handleClick = () => {
    console.log(unvettedList)
  }
  //method to approve suggestion

  //method to delete suggestion

  //iterate over unvetted list to create cards
    //update Card component to implement conditional rendering to display approve and delete buttons IF vetted = false

  //return all cards
  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}
      style={{ color: theme.color, background: theme.background }}>
      <h2 className='admin-sub-title'>Admin Approval</h2>
      <button onClick={handleClick}>check fetch</button>
    </div>
  )

}

//implement propTypes

export default Admin
