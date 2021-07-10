import React from 'react'
import './_app.scss';
import ContributionForm from '../ContributionForm/ContributionForm'
import Doctors from '../Doctors/Doctors'
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros'

import { Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route path='/submit' render={() => {
          return(
            <ContributionForm />
          )
        }} />
        <Route path='/doctors' render={() => {
          return(
            <Doctors />
          )
        }} />
        <Route path='/mental_health_professionals' render={() => {
          return(
            <MentalHealthPros />
          )
        }} />
        <Route exact path ='/' render={() => {
          return(
            <>
              <Link to='/doctors'>
                <button>Doctors</button>
              </Link>
              <Link to='/mental_health_professionals'>
                <button>Mental Health Professionals</button>
              </Link>
            </>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
