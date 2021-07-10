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
        <ContributionForm />
      </Switch>
    </div>
  );
}

export default App;
