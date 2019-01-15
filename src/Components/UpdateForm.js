import React from "react";

class UpdateForm extends React.Component {
  //need to have a function written in UpdateForm to hold onto e.target.value, but need to update the house in App. So, we create a function that passes another function down the line to accept the arguments
  handleChange = e => {
    this.props.updateHouse(this.props.characterId, e.target.value);
  };
  //creates a form that allows us to change the house of the character. the above method is triggered when the house is changed inthe dropdown menu. iterate over the houses list to make them an option. Uncontroleld form because all options are set.
  render() {
    console.log("update", this.props);
    let array = this.props.houses.map(house => (
      <option key={house}>{house}</option>
    ));
    return (
      <form>
        <select onChange={this.handleChange}>{array}</select>
      </form>
    );
  }
}

export default UpdateForm;
