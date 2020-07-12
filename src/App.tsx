import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Record from './records/record';
import Records from './records/records';

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/record">  Record  </Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Records} />
            <Route exact path="/record" component={Record} />
            {/* <Route exact path="/bar" component={Bar} /> */}
          </Switch>
          
        </div>
      </Router>
  );
}

export default App;
