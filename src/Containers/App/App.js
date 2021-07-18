import ContributionForm from '../ContributionForm/ContributionForm';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros';
import { Route, Switch } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import './_app.scss';

function App() {
  return (
    <main className='App' >
      <ThemeContextProvider>
        <section className='header-wrapper'>
          <Header />
        </section>
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
              <article className='mission-wrapper'>
                <p className='mission'>A place to find queer affirming support</p>
              </article>
            )
          }} />
        </Switch>
      </ThemeContextProvider>
    </main>
  );
}

export default App;
