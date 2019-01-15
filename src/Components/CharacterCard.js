import React from "react";
import UpdateForm from "./UpdateForm";
import Details from "./Details";

class CharacterCard extends React.Component {
  //create clicked state to decide when edit form will show
  state = {
    clicked: false,
    showDetails: false
  };

  //changes clicked state to opposite value
  clicked = () => {
    if (this.props.parent === "CharacterContainer") {
      this.setState({
        clicked: !this.state.clicked
      });
    } else {
      this.setState({
        showDetails: !this.state.showDetails
      });
    }
  };

  //render charactercard with props, onClick method with change state when house name is clicked. when state is true, the UpdateForm renders
  render() {
    if (this.props.parent === "CharacterContainer") {
      return (
        <div>
          {console.log("from container", this.props.houses)}
          <img alt="" height="200px" src={this.props.character.image1} />
          <h1>{this.props.character.name}</h1>
          {this.state.clicked ? (
            <UpdateForm
              characterId={this.props.character.id}
              houses={this.props.houses}
              updateHouse={this.props.updateHouse}
            />
          ) : (
            <p onClick={this.clicked}>{this.props.character.house}</p>
          )}
        </div>
      );
    } else {
      return (
        <div>
          {this.state.showDetails ? (
            <Details
              character={this.props.character}
              houses={this.props.houses}
              updateHouse={this.props.updateHouse}
            />
          ) : (
            <img
              height="200px"
              src={this.props.character.image2}
              alt=""
              onClick={this.clicked}
            />
          )}
        </div>
      );
    }
  }
}

export default CharacterCard;
