// Write your Character component here
import React from 'react'



const Character = ({char}) => {
   
    return (
    <div className ="char-list">
        <h2>{char.name}</h2>
        <p>{char.status}</p>
    <div className = "bottom">
            <p>{char.gender}</p>
            <p>{char.origin}</p>
            <p>{char.location}</p>
          </div>
        </div>
        );

};
export default Character;
