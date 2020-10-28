import React from 'react';
import './App.css';
import FormPage from './Components/Login/index';
import {Route} from 'react-router-dom';
import SignUpPage from './Components/SignUp/index'
function App() {
  return (
   <div>

       <Route path = '/login' component = {FormPage}/>
       <Route path = '/signup' component = {SignUpPage}/>
   </div>


 );
}

export default App;
