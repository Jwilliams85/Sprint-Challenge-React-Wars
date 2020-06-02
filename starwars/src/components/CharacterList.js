import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import { Container } from 'reactstrap';
import styled from 'styled-components';


const CharacterList = () => {
    const [chars, setChars] = useState([])
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/')
        .then(response => {
            console.log(response, "hey look here");
            setChars(response.data.message)
        })
        .catch(error => console.log("Error!", error));
    }, []);

    

    return (
      
            <CardRow>
            {chars.map(char => (
                <Character key={char.id} char={char}/>
            ))}
             
            </CardRow>
         
    );   
};
export default CharacterList;