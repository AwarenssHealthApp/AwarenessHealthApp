import React from 'react'
import './_app.scss';
import ContributionForm from '../ContributionForm/ContributionForm'
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
            <h1>Doctors go here</h1>
          )
        }} />
        <Route path='/mental_health_professionals' render={() => {
          return(
            <h1>Mental Health Professionals go here</h1>
          )
        }} />
        <Route exact path ='/' render={() => {
          return(
            <>
            </>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
