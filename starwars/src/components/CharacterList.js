import React from 'react'
import Character from './Character'
import './Character.css'

const CharacterList = props => {
    return (
        <div clasName = 'list-container'>
            {props.starwarsChars.map(char =>(
                <Character char = {char} />
            ))}
        </div>
    );
};
export default CharacterList;