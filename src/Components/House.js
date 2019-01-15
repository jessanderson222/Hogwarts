import React from "react";
import CharacterCard from "./CharacterCard";

const House = props => {
  return (
    <div key={props.house}>
      <h1>{props.house}</h1>
      {props.characters.map(character => (
        <CharacterCard
          parent="house"
          key={props.id}
          character={character}
          houses={props.houses}
          updateHouse={props.updateHouse}
        />
      ))}
    </div>
  );
};

export default House;
