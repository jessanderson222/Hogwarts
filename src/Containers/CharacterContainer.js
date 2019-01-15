import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.characterList.map(character => (
          <CharacterCard
            parent="CharacterIndex"
            updateHouse={this.props.updateHouse}
            key={character.id}
            {...character}
            houseList={this.props.houseList}
          />
        ))}
      </ul>
    );
  }
}
