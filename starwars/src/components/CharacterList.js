import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import { Container, Row } from 'reactstrap';
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
        <Container>
            <Row>
            {chars.map(char => (
                <Character key={char.id} char={char}/>
            ))}
            </Row>
            </Container>
    );   
};
export default CharacterList;