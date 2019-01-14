import React from "react";
import UpdateForm from "./UpdateForm";

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editHouse: false
    };
  }

  toggleHouse = e => {
    console.log(this.state.editHouse);
    this.setState({
      editHouse: !this.state.editHouse
    });
  };

  render() {
    return (
      <div>
        <img alt="" height="200" src={this.props.character.image1} />
        <h3>{this.props.character.name}</h3>
        <h3 onClick={this.toggleHouse}>{this.props.character.house}</h3>
        <div>
          {this.state.editHouse ? (
            <UpdateForm character={this.props.character} />
          ) : null}
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default CharacterCard;
