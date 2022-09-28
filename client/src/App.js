import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Nav } from './Components/Nav/Nav';
import Activities from './pages/activities/Activities';
import Countries from './pages/countries/countries';
import CountryDetail from './pages/countryDetail/countryDetail';

import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Home name={'Oxalc'} />} />
        <Route exact path='/countries' component={Countries} />
        <Route path='/countries/:id' component={CountryDetail} />
        <Route path='/activities' component={Activities} />
      </Switch>
    </div>
  );
}

export default App;
