import React from 'react';
import './App.css';
//import LandingPage from '../../client/src/components/LandingPage.jsx';
import { Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
//import CreateForm from '../../client/src/components/CreateFrom.jsx';
//import CardDetail from '../../client/src/components/CardDetail.jsx';

function App() {
  return (
    <div className="App">
    {/* <Route exact path='/home/:id' component={CardDetail}/> */}
    <Route exact path='/home' component={Home}/>
    {/* <Route exact path='/' component={LandingPage}/>
    <Route exact path='/create' component={CreateForm}/> */}
    </div>
  );
}

export default App;
