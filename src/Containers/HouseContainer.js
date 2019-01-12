import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul className="houseContainer">
        <House key={this.props.name} name={this.props.name} />
      </ul>
    );
  }
}
