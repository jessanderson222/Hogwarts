import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    let list = this.props.characterList.map((character, i) => (
      <CharacterCard
        onRenderForm={this.props.onRenderForm}
        toggleHouse={this.props.toggleHouse}
        key={i}
        character={character}
      />
    ));
    return (
      <div>
        <h3>Characters</h3>
        <div>{list}</div>
      </div>
    );
  }
}
