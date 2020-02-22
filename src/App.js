import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import MainMovie from './pages/MainMovies';
import SelectMovie from './pages/SelectMovie'

//components
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <div className="container" id="container">
        <Switch>
          <Route exact path="/" component={MainMovie}/>
          <Route path="/movie/:id" component={SelectMovie}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
