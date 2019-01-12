import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <div>
        <img alt="" height="200px" src={this.props.image1} />
        <h3>{this.props.name}</h3>
        <h4>{this.props.house}</h4>
        <br />
      </div>
    );
  }
}

export default CharacterCard;
