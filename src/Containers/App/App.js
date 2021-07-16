import ContributionForm from '../ContributionForm/ContributionForm';
import Doctors from '../Doctors/Doctors';
import MentalHealthPros from '../MentalHealthPros/MentalHealthPros';
import DarkModeSwitch from '../../Components/DarkModeSwitch/DarkModeSwitch';
import { Route, Switch, Link } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import StateSelectContextProvider from '../../contexts/StateSelectContext';
import './_app.scss';
import background from '../../assets/images/peacefulOceanImage.png';


function App() {
  return (
    <div className='App' style={{
            backgroundImage: `url(${background})`}}>
      <ThemeContextProvider>
        <header>
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
            <DarkModeSwitch />
          </nav>
        </header>
        <Switch>
          <Route path='/submit' render={() => {
            return(
              <StateSelectContextProvider>
                <ContributionForm />
              </StateSelectContextProvider>
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
