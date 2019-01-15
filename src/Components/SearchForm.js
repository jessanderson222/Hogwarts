import React from "react";

const SearchForm = props => {
  return (
    <div>
      <h3>Search Characters</h3>
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
