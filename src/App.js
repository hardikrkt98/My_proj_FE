import React from 'react';
import './App.css';
import FormPage from './Components/Login/index';
import {Route} from 'react-router-dom';
import SignUpPage from './Components/SignUp/index'
import UserHome from './Components/UserHome/index';
import Arrays from './Components/Arrays/arrays';
import GenericProblemView from './Components/GenericProblemComponent';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
   <div>

       <Route path = '/login' component = {FormPage}/>
       <Route path = '/signup' component = {SignUpPage}/>
       <Route path = '/userhome' component={UserHome}/>
       <Route path = '/arrays' component={Arrays}/>
       <Route path = '/problem/:title' component ={GenericProblemView}
       />
   </div>
  </BrowserRouter>

 );
}

export default App;
