import React, { Component } from 'react';
import './App.css';
import './scss/vendors/bootstrap/_bootstrap.scss';
import './scss/_main.scss';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import test from './Components/test';
import Fashion from './Components/Fashion';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
          <Router>
              <div className="App">
                  <Navbar ulItems={[
                      'About Us',
                      'Fashion',
                      'Cool Stuff',
                      'Luxury',
                      'Contact Us'
                  ]}/>

                  <Route path={baseUrl + '/'} exact component={Homepage} />
                  <Route path={baseUrl + '/test'} exact component={test} />
                  <Route path={baseUrl + '/fashion'} exact component={Fashion} />
              </div>
          </Router>
    );
  }
}

export default App;
