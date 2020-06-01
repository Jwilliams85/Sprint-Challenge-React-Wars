import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import styled from 'styled-components';
import Search from './components/Search'

const CardRow = styled.div`
display:flex;
flex-wrap:wrap;
color:blue;
text-align:center;

`;


const App = () => {

  const [chars, setChars] = useState([])
  useEffect(() => {
      axios
      .get('https://swapi.py4e.com/api/people/')
      .then(response => {
          console.log(response);
          setChars(response.data.results)
      })
      .catch(error => console.log("Error!", error));
  }, []);
  return (
    

      <CardRow className ='char'>
        
        <h1 className = 'title'> StarWars Character Cards</h1>
        <Search/> 
           {chars.map((response,x) => {
             return (
              <Character key={x} a={response}/>
              
             )
        
             })} 
             
          </CardRow>
          
  );   
    
  }

export default App;