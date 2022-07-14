import React from 'react';  //me falto eso!!!
import './App.css';
import Home from '../../client/src/components/Home.jsx';
import Activity from '../../client/src/components/Activity';//HC
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../../client/src/components/LandingPage.jsx';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/> 
{/*  HC  */} 
        <Route exact path="/activity" component={Activity}/> 
{/* HC */}
   </BrowserRouter>
    
   </div>
 );
}
export default App;