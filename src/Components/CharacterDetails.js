import React from "react";

const CharacterDetails = props => {
  console.log(props);
  return (
    <div>
      <img
        height="200px"
        src={props.character.image1}
        alt={props.character.name}
      />
      <h1>{props.character.name}</h1>
      <p>{props.character.house}</p>
    </div>
  );
};

export default CharacterDetails;
