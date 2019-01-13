import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Characters</h3>
        <div>
          {this.props.characterList.map((character, i) => (
            <CharacterCard
              toggleHouse={this.props.toggleHouse}
              key={i}
              character={character}
            />
          ))}
        </div>
      </div>
    );
  }
}
