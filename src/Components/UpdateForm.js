import React from "react";

class UpdateForm extends React.Component {
  handleChange = e => {
    console.log(e.target.value);
    this.props.updateHouse(this.props.characterId, e.target.value);
  };

  render() {
    return (
      <form>
        <select onChange={this.handleChange}>
          {this.props.houseList.map(house => (
            <option key={house}>{house}</option>
          ))}
        </select>
      </form>
    );
  }
}

export default UpdateForm;
