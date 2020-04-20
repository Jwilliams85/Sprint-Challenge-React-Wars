import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    this.getCharacters('https://swapi.py4e.com/');
  }
  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(response=> 
        response.json())
      
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        console.log("The data was not returned", err)
      }); 
  };
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}
export default App;