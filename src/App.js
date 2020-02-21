import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import MainMovie from './pages/MainMovies';
import SelectMovie from './pages/SelectMovie'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={MainMovie}/>
          <Route path="/select" component={SelectMovie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
