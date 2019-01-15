import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
import HouseContainer from "./Containers/HouseContainer";

class App extends Component {
  state = {
    characters: [],
    houses: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then(res => res.json())
      .then(data => this.setState({ characters: data }));

    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => this.setState({ houses: data }));
  }

  updateHouse = (who, newHouseName) => {
    let updatedCharList = [...this.state.characters];
    updatedCharList.forEach(character => {
      if (character.id === who) {
        character.house = newHouseName;
      }
    });

    this.setState({
      characters: updatedCharList
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <CharacterContainer
          updateHouse={this.updateHouse}
          characterList={this.state.characters}
          houseList={this.state.houses}
        />
        <HouseContainer
          characterList={this.state.characters}
          houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
