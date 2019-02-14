import React, { Component } from 'react';
import './App.css';
import './scss/vendors/bootstrap/_bootstrap.scss';
import './scss/_main.scss';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Fashion from './Components/Fashion';
import Cool_stuff from './Components/Cool_stuff';
import Luxury from './Components/Luxury';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
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
                      'Contact'
                  ]}/>

                  <div className="content">

                  <Route path={baseUrl + '/'} exact component={Homepage} />
                  <Route path={baseUrl + '/fashion'} exact component={Fashion} />
                  <Route path={baseUrl + '/cool_stuff'} exact component={Cool_stuff} />
                  <Route path={baseUrl + '/luxury'} exact component={Luxury} />
                  <Route path={baseUrl + '/contact'} exact component={Contact} />

                  </div>

                  <Footer />
              </div>
          </Router>
    );
  }
}

export default App;
