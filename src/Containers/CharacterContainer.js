import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    //pass props to CharacterCard
    return this.props.characters.map(character => (
      <CharacterCard
        parent="CharacterContainer"
        key={character.id}
        character={character}
        houses={this.props.houses}
        updateHouse={this.props.updateHouse}
      />
    ));
  }
}
