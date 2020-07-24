import React from 'react';
import './App.css';
import FullName from './component/FullName';
import ProfilPhoto from './component/ProfilPhoto';
import Adress from './component/Address';


const App = () => (
  <React.Fragment>
    <FullName/>
    <ProfilPhoto/>
    <Adress/>
  </ React.Fragment>
 );
 export default App;