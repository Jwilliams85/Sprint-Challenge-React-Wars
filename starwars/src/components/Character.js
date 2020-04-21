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
`;


const Character = props => {
   console.log (props.a.name)
   
    return (
   
     <Card>
        <h2>{props.a.name}</h2>
        <p>{props.a.status}</p>
     <div className = "bottom">
        <p>{props.a.gender}</p>
            <p>{props.a.origin.name}</p>
             <p>{props.a.location.name}</p>
          </div> 
        </Card>
      
         );

};
export default Character;
