import React from "react";
import CharacterCard from "./CharacterCard";

const House = props => {
  return (
    <div>
      <h1>{props.houseName}</h1>
      {props.characterList.map(character => (
        <CharacterCard {...character} />
      ))}
    </div>
  );
};

export default House;
