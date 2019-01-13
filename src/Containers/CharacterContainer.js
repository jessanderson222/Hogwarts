import React from "react";
import CharacterCard from "../Containers/CharacterContainer";

export default class CharacterContainer extends React.Component {
  render() {
    const list = this.props.characterList.map(character => (
      <CharacterCard key={character.id} character={character} />
    ));
    console.log("charactet container", list);
    return (
      <div>
        <h3>Characters</h3>
        {/* <ul>{list}</ul> */}
      </div>
    );
  }
}
