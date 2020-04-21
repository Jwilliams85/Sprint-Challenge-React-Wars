import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';



const App = () => {

  const [chars, setChars] = useState([])
  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
          console.log(response.data.results);
          setChars(response.data.results)
      })
      .catch(error => console.log("Error!", error));
  }, []);
  return (
      <div className ='char'>
           {chars.map((banana,x) => {
             return (
              <Character key={x} a={banana}/>
             )
        
             })} 
          </div>
  );   
    
  }

export default App;