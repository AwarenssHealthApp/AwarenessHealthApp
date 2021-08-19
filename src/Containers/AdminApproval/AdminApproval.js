import React, { useState, useEffect, useContext } from 'react';
//import API calls from '../../utils/apiCalls';
import Card from '../../Components/Card/Card';
import { ThemeContext } from '../../contexts/ThemeContext';
import Error from '../../Components/Error/Error';
import './_adminApproval.scss';

const Admin = () => {
  //hooks for unvetted provider data
  const { darkMode, light, dark } = useContext(ThemeContext);
  const theme = darkMode ? dark : light;

  //useEffect for fetching unvetted providers list and setting state

  //method to approve suggestion

  //method to delete suggestion

  //iterate over unvetted list to create cards
    //update Card component to implement conditional rendering to display approve and delete buttons IF vetted = false

  //return all cards
  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}
      style={{ color: theme.color, background: theme.background }}>
      <h1>Admin Approval Page</h1>
    </div>
  )

}

//implement propTypes

export default Admin
