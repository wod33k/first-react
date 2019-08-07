import React from 'react';
//import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components';
import Person from './components/components';
import NaviBar from './components/navbar';
import MainPost from './components/mainPost';

//import { arrayExpression } from '@babel/types';

const DivMainPage = styled.div `
width :850px;
`;

const DivMain = styled.div `
display:flex;
flex-direction:row;
padding-top: 5px;
padding-bottom: 5px;
`;
//class App extends Component {

  //state = {
    
//const jakistekst = 'WordPress REST API makes it easier to connect to apps. A custom looking mobile or single-page app can now more easily than ever not only read WordPress data, but also create, edit and delete that data\.
//  Many have started to use WordPress in \"weird places\", as in applications where it would have been a pain to work with a few years ago.
 // As for us? We chose React for this demo because, well, we\'ve been talking too much about Vue recently. Jokes aside, we do want to keep our content diversified, and React still is one of the best frameworks out there: flexible & reusable component system, Facebook-backed open source project, efficient workflow with JSX, etc.
  //Also, using WP REST API with a React frontend you can put together a full JAMstack, the which I\'m always more than willing.';
//;

function App() {

  const osoby = [
    {'id':1,'name': "Mike"},
    {'id':2,'name': "Ange" }, 
    {'id':3,'name': "Emil"}, 
    {'id':4,'name': "Gwido"}, 
    {'id':5,'name': "Caroline"},
    {'id':6,'name': "Max"}
  ] 

const ludzie = osoby.map((ludz) => 
<Person name= {ludz.name} 
klasa={(ludz.id & 1) ? "klasa1":"klasa"} 
key={ludz.id} 
/>) 



  return (
    <div className="App">
      <DivMainPage>
      <NaviBar />
      <MainPost mainPostText="Hello World" />
      <DivMain>
                <div className="ludzie">
                
                {ludzie}

                </div>
                <div className="ludzie_obok" >
boczny tekst
                  
                </div>
        </DivMain>
      </DivMainPage>
      </div>
  );
  }
//}


export default App;
