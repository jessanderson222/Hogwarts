import React, { Component } from "react";
import UpdateForm from "./UpdateForm";

class ShowDetails extends Component {
  state = {
    clicked: false
  };

  click = () => {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log(this.state.clicked);
  };

  render() {
    console.log("details", this.props);
    return (
      <div>
        <h3>{this.props.character.name}</h3>
        <h4 onClick={this.click}>
          {this.state.clicked ? (
            <UpdateForm
              character={this.props.character}
              houses={this.props.houses}
              updateHouse={this.props.updateHouse}
            />
          ) : (
            this.props.character.house
          )}
        </h4>
        <p>
          {this.props.character.role}
          <br />
          {this.props.character.age}
        </p>
      </div>
    );
  }
}

export default ShowDetails;
