import React from 'react';
import './App.css';
import FormPage from './Components/Login/index';
import {Route} from 'react-router-dom';
function App() {
  return (
   <div>

       <Route path = '/login' component = {FormPage}/>

   </div>


 );
}

export default App;
