import React from "react";
import UpdateForm from "./UpdateForm";
import CharacterDetails from "./CharacterDetails";

class CharacterCard extends React.Component {
  state = {
    showForm: false
  };

  handleClick = () => {
    if (this.props.parent === "CharacterIndex") {
      this.setState({ showForm: !this.state.showForm });
    } else {
      this.setState({
        showDetails: !this.state.showDetails
      });
    }
  };
  render() {
    if (this.props.parent === "CharacterIndex") {
      return (
        <li>
          <h3>{this.props.name}</h3>
          <img height="200" src={this.props.image1} alt="" />
          <br />
          {this.state.showForm ? (
            <UpdateForm
              characterId={this.props.id}
              updateHouse={this.props.updateHouse}
              houseList={this.props.houseList}
            />
          ) : (
            <p onClick={this.handleClick}>{this.props.house}</p>
          )}
        </li>
      );
    } else {
      return (
        <div>
          <img
            height="200px"
            src={this.props.image2}
            alt=""
            onClick={this.handleClick}
          />
        </div>
      );
    }
  }
}

export default CharacterCard;
