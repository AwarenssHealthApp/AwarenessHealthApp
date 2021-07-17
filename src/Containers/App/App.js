import ContributionForm from '../ContributionForm/ContributionForm';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros';
import { Route, Switch } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import './_app.scss';

function App() {
  return (
    <div className='App' >
      <ThemeContextProvider>
        <Header />
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
                <p className='mission'>A place to find queer affirming support</p>
              </main>
            )
          }} />
        </Switch>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
