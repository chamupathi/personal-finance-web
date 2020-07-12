import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Record from './records/record';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React..
    //     </a>
    //   </header>
    // </div>
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/record">  Record  </Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Record} />
            <Route exact path="/record" component={Record} />
            {/* <Route exact path="/bar" component={Bar} /> */}
          </Switch>
          
        </div>
      </Router>
  );
}

export default App;
