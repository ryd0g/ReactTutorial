import React from 'react';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import About from './About';
import POPOSDetails from '../POPOSDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Title />
        <Route exact path='/' component={POPOSList} />
        <Route path='/about' component={About} />
        <Route path='/details/:id' component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
