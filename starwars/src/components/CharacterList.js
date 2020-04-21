import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {
    const [chars, setChars] = useState([])
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/')
        .then(response => {
            console.log(response);
            setChars(response.data.message)
        })
        .catch(error => console.log("Error!", error));
    }, []);
    return (
        <div clasName ='char'>
            {chars.map(char => (
                <Character key={char.id} char={char}/>
            ))}
            </div>
    );   
};
export default CharacterList;