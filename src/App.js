import React from 'react';
//import React, { Component } from 'react'
import './App.css';
import Person from './components/components';
import NaviBar from './components/navbar';
//import { arrayExpression } from '@babel/types';


//class App extends Component {

  //state = {
    const osoby = [
    {
    'id' : 1,
    'name' : "Mike"
  
  },
    {'id' :2,
      'name' :"Ange" }, 
    {'id':3 , 'name': "Emil"}, 
    {'id':4, 'name' : "Gwido"}, 
    {'id':5, 'name': "Caroline"}
  ]

function App() {
  
const ludzie = osoby.map((ludz) => 
<Person name= {ludz.name} 
klasa={(ludz.id & 1) ? "klasa1":"klasa"} 
key={ludz.id} 
/>) 


  return (
    <div className="App">
      <NaviBar />

      <div className="ludzie">{ludzie}</div>
      
      </div>
  );
  }
//}


export default App;
