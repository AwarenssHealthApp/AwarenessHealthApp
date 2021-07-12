import React from 'react'
import ContributionForm from '../ContributionForm/ContributionForm'
import Doctors from '../Doctors/Doctors'
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros'
import { Route, Switch, Link } from 'react-router-dom'
import './_app.scss';


function App() {
  return (
    <div className='App'>
      <header >
        <h1 className='App-title'>Head To Toe</h1>
        <nav className='nav-bar'>
          <Link to='/doctors'>
            <button className='App-buttons' id='doctors-button'>Doctors</button>
          </Link>
          <Link to='/mental_health_professionals'>
            <button className='App-buttons' id='mental-health-pros-button'>Mental Health Professionals</button>
          </Link>
          <Link to='/submit'>
            <button className='App-buttons' id='submit-button'>Submit</button>
          </Link>
        </nav>
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
            <main>
              <p>A place to find queer affirming support</p>
            </main>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
