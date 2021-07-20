import ContributionForm from '../ContributionForm/ContributionForm';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Search from '../Search/Search';
import NavBar from '../NavBar/NavBar';
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros';
import { Route, Switch } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import { ProviderContextProvider } from '../../contexts/ProviderContext';
import './_app.scss';

function App() {
  return (

    <main >

      <ThemeContextProvider>
        <ProviderContextProvider>

            <NavBar />
                <div className='App'>
            <section className='header-wrapper'>
              <Header />
                <Search/>
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
          </div>
        </ProviderContextProvider>
      </ThemeContextProvider>
    </main>
  );
}

export default App;
