import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Record from './records/record';
import Records from './records/records';
import { routes } from './routes';
import AccountPage from './accounts/AccountPage';
import AddNewTransaction from './accounts/AddNewTransaction';
// import NewTransaction from './accounts/NewTransaction';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={Records} /> */}
            <Route exact path={routes.records} component={Records} />
            <Route exact path={`${routes.records}/:id`} component={AccountPage} />
            <Route exact path={`${routes.records}/:id/:mode`} component={AddNewTransaction} />
            <Route exact path={`${routes.records}/:id/:mode/:txnId`} component={AddNewTransaction} />
            <Redirect to={routes.records} />
          </Switch>
          
        </div>
      </Router>
  );
}

export default App;
