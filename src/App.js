import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";

// import HouseContainer from "./Containers/HouseContainer";

class App extends Component {
  state = {
    characterList: [],
    searchCharacterTerm: ""
  };

  componentDidMount() {
    const path = "http://localhost:3001/characters";
    fetch(path)
      .then(resp => resp.json())
      .then(json => this.setState({ characterList: json }));
  }

  mutateState = () => {
    let characterList = [...this.state.characterList];

    return characterList;
  };

  render() {
    return (
      <div className="app">
        <h1>HI</h1>
        <CharacterContainer characterList={this.state.characterList} />
      </div>
    );
  }
}

export default App;
