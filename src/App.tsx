import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Record from './records/record';
import Records from './records/records';
import { routes } from './routes';
import AccountPage from './accounts/AccountPage';

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/records">  Records  </Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Records} />
            <Route exact path={routes.records} component={Records} />
            <Route exact path={`${routes.records}/:id`} component={AccountPage} />
          </Switch>
          
        </div>
      </Router>
  );
}

export default App;
