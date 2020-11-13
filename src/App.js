import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
      
    </React.Fragment>
  );
}

export default App;
