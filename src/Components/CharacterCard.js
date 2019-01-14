import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <div>
        <img alt="" height="200" src={this.props.character.image1} />
        <h3>{this.props.character.name}</h3>
        <h3 onClick={this.props.toggleHouse}>{this.props.character.house}</h3>
        <div>{this.props.onRenderForm()}</div>
        <br />
        <br />
      </div>
    );
  }
}

export default CharacterCard;
