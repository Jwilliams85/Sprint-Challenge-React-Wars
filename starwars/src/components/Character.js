// Write your Character component here
import React from 'react'



const Character = props => {
   console.log (props.a.name)
    return (
     <div className ="char-list">
        <h2>{props.a.name}</h2>
        <p>{props.a.status}</p>
     <div className = "bottom">
        <p>{props.a.gender}</p>
            <p>{props.a.origin.name}</p>
             <p>{props.a.location.name}</p>
          </div> 
        </div>
         );

};
export default Character;
