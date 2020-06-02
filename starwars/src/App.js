import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import styled from 'styled-components';



const CardRow = styled.div`
display:flex;
flex-wrap:wrap;
color:blue;
text-align:center;

`;


const App = () => {

  const [chars, setChars] = useState([])
  const [searchValue, setSearchValue] = useState ("")
  const handleChange = (e) => {
    setSearchValue(e.target.value);

  }
  useEffect(() => {
      axios
      .get('https://swapi.py4e.com/api/people/')
      .then(response => {
          console.log(response);
          setChars(response.data.results)
          const firstArray = response.data.results;
          const filteredData = firstArray.filter((character) => {
            return character.name
            .toLowerCase()
            .includes(searchValue.toLowerCase())
          })
          setChars(filteredData);
        },
        [searchValue]
  );
      });

  return (
    
      <CardRow className ='char'>
        <h1 className = 'title'> StarWars Character Cards</h1>
        
        <label className = 'searchTitle'>Search for a Starwars Character here:</label>
        
        <input className = 'search'
          type="text"
          name="search"
          value={searchValue}
          onChange={handleChange}
          
        />
        
           {chars.map((response,x) => {
             return (
              <Character key={x} a={response}/>
              
             )
        
             })} 
            
          </CardRow>
          
  );   
    
  }

export default App;