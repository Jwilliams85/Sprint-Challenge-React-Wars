// Write your Character component here
import React from 'react'
import styled from 'styled-components';


const Card = styled.div`
    height:200px;
    width:200px;
    border: 5px solid #17a2b8;
    padding: 30px;
    margin:30px;
    background: lightblue;
    color:white;
    
`;


const Character = props => {
   console.log (props.a.name)
   
    return (
   
     <Card>
        <h2>{props.a.name}</h2>
        <p>Gender: {''} {props.a.gender}</p>
     <div className = "bottom">
        <p>Height: {''} {props.a.height}</p>
            <p>Hair Color: {''} {props.a.hair_color}</p>
             <p>Skin Color: {''}{props.a.skin_color}</p>
          </div> 
        </Card>
      
         );

};
export default Character;
