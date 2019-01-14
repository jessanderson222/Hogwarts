import React from "react";

class UpdateForm extends React.Component {
  state = {
    house: ""
  };

  render() {
    return (
      <div>
        <h4>Update {this.props.character.name}</h4>
        <form>
          <select>
            <option>Gryffindor</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
            <option>Slytherin</option>
          </select>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
