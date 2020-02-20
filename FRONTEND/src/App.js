import React from 'react';
import Header from './Components/Header';

import {
  BrowserRouter as Router,

} from "react-router-dom";

import RouterURL from './RouterURL/RouterURL';
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
