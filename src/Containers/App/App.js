import AdminApproval from '../AdminApproval/AdminApproval';
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
<<<<<<< HEAD
<<<<<<< HEAD
                <Route path='/admin_approval_who_dis' render={() => {
=======
                <Route path='/admin_approval_form' render={() => {
>>>>>>> b00f734 (Route AdminApproval from App Component)
=======
                <Route path='/admin_approval_who_dis' render={() => {
>>>>>>> 6b9b8b6 (Implement ThemeContext for light and dark mode)
                  return(
                    <AdminApproval />
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
                    <p className='mission'>At Head To Toe we belive in intersectional inclusivity.  Social constructs like gender, need not be navigated alone. We began as a place to find queer affirming support.  We hope to expand to fit your needs, as we grow and are able.</p>
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
