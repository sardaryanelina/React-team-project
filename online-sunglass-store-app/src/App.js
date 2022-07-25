import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';


function App() {
  return (
    <div className="App">
      <NavBarComp />
	  <div id="snipcart" data-api-key="NWMwZWNkZGMtZjU2ZS00YzM3LWFlZjYtMmM5Zjk0MWViZDcxNjM3Njg0OTY0ODg5NTk4MTM3" hidden>
</div>
    </div>
  );
}

export default App;