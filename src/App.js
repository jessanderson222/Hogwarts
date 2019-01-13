import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";

// import HouseContainer from "./Containers/HouseContainer";

class App extends Component {
  state = {
    characterList: [],
    searchCharacterTerm: "",
    editHouse: false
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

  toggleHouse = e => {
    this.setState({
      editHouse: !this.state.editHouse
    });
    console.log(this.state.editHouse);
  };

  render() {
    return (
      <div className="app">
        <CharacterContainer
          toggleHouse={this.toggleHouse}
          characterList={this.state.characterList}
        />
      </div>
    );
  }
}

export default App;
