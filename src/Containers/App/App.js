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
        <h1>Head to Toe</h1>
        <nav>
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
                    <button id='doctors-button'>Doctors</button>
                  </Link>
                  <Link to='/mental_health_professionals'>
                    <button id='mental-health-pros-button'>Mental Health Professionals</button>
                  </Link>
                  <Link to='/submit'>
                    <button id='submit-button'>Submit</button>
                  </Link>
                  <main>
                    <p>A place to find queer affirming support</p>
                  </main>
                </>
              )
            }} />
          </Switch>
        </nav>
      </header>
    </div>
  );
}

export default App;
