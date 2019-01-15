import React, { Component } from "react";
import CharacterContainer from "./Containers/CharacterContainer";
import HouseContainer from "./Containers/HouseContainer";
import NewCharacterForm from "./Components/NewCharacterForm";
import SearchForm from "./Components/SearchForm";
import "./App.css";

class App extends Component {
  state = {
    characters: [],
    houses: [],
    searchCharacterTerm: "",
    filteredArr: []
  };
  //fetching the houses and characters from the API in a DidMount
  componentDidMount() {
    fetch("http://localhost:3001/characters")
      .then(res => res.json())
      .then(data => this.setState({ characters: data, filteredArr: data }));
    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => this.setState({ houses: data }));
  }

  //Pass app-CharCont-CharCard-UpdateForm
  updateHouse = (who, newHouseName) => {
    //do not directly mutate our data, make copy
    let updatedCharList = [...this.state.characters];
    //only update the house for the character clicked on
    updatedCharList.forEach(character => {
      if (character.id === who) {
        character.house = newHouseName;

        fetch(`http://localhost:3001/characters/${character.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ house: newHouseName })
        });
      }
    });
    //update state
    this.setState({
      characters: updatedCharList
    });
  };

  characterSubmitHandler = (e, character) => {
    e.preventDefault();
    console.log("character submit handler", character);
    let arr = [...this.state.characters, character];
    this.setState({
      characters: arr
    });
    fetch("http://localhost:3001/characters", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(character)
    });
  };

  changeHandler = e => {
    let search = e.target.value.toUpperCase();
    let newArr = [...this.state.characters].filter(character =>
      character.name.toUpperCase().includes(search)
    );

    this.setState({
      searchCharacterTerm: e.target.value,
      filteredArr: newArr
    });
  };

  render() {
    return (
      <div className="app">
        <SearchForm
          value={this.state.searchCharacterTerm}
          changeHandler={this.changeHandler}
        />
        <NewCharacterForm
          characterSubmitHandler={this.characterSubmitHandler}
        />
        <br />
        <CharacterContainer
          characters={this.state.filteredArr}
          houses={this.state.houses}
          updateHouse={this.updateHouse}
        />
        <HouseContainer
          characters={this.state.filteredArr}
          houses={this.state.houses}
          updateHouse={this.updateHouse}
        />
      </div>
    );
  }
}

export default App;
