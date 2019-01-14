import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
// import UpdateForm from "./Components/UpdateForm";
import SearchForm from "./Components/SearchForm";
import NewCharacterForm from "./Components/NewCharacterForm";
import HouseContainer from "./Containers/HouseContainer";

class App extends Component {
  state = {
    characterList: [],
    searchCharacterTerm: "",
    filteredArr: [],
    houseList: []
  };

  componentDidMount() {
    const characterPath = "http://localhost:3001/characters";
    const housePath = "http://localhost:3001/houses";
    fetch(characterPath)
      .then(resp => resp.json())
      .then(json => this.setState({ characterList: json, filteredArr: json }));

    fetch(housePath)
      .then(resp => resp.json())
      .then(json => this.setState({ houseList: json }));
  }

  mutateState = () => {
    let characterList = [...this.state.characterList];
    return characterList;
  };

  changeHandler = e => {
    let search = e.target.value.toUpperCase();
    let newArr = [...this.state.characterList].filter(character =>
      character.name.toUpperCase().includes(search)
    );

    this.setState({
      searchCharacterTerm: e.target.value,
      filteredArr: newArr
    });
  };

  characterSubmitHandler = (e, character) => {
    e.preventDefault();
    console.log("character submti handler", character);
    let arr = [...this.state.characterList, character];
    this.setState({
      characterList: arr
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
        <CharacterContainer
          mutateState={this.mutateState}
          toggleHouse={this.toggleHouse}
          characterList={this.state.filteredArr}
        />
        <HouseContainer
          houseList={this.state.houseList}
          characterList={this.state.filteredArr}
        />
      </div>
    );
  }
}

export default App;
