import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import RouterURL from '../RouterURL/RouterURL';
function App() {
  return (
    <Router>
      {/* <div style={{ width: '100%', height: '100%' }}> */}
      <Header></Header>
      <div className="container " >
        <div className="d-flex justify-content-center col-sm-12">
          <RouterURL>

          </RouterURL>
        </div>
        
      </div>
     
      {/* </div> */}
    </Router>

  );
}

export default App;
