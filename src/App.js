import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import CharacterContainer from "./Containers/CharacterContainer";
import HouseContainer from "./Containers/HouseContainer";
import data from "./db.json";

class App extends Component {
  state = {
    characters: data["characters"],
    houses: data["houses"]
  };

  render() {
    console.log(this.state.houses);
    return (
      <div className="app">
        {this.state.characters.map(character => (
          <CharacterContainer
            key={character.id}
            id={character.id}
            name={character.name}
            age={character.age}
            house={character.house}
            role={character.role}
            image1={character.image1}
            image2={character.image2}
          />
        ))}
        {this.state.houses.map(house => (
          <HouseContainer key={house} name={house} />
        ))}
      </div>
    );
  }
}

export default App;
