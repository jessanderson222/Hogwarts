import React, { Component } from "react";
// import CharacterCard from "./Components/CharacterCard";

const SearchForm = props => {
  return (
    <div>
      <h4>Search Characters</h4>
      <input
        type="text"
        placeholder="search characters"
        value={props.value}
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default SearchForm;
