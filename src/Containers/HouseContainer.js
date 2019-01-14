import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  render() {
    const houses = this.props.houseList.map((house, i) => (
      <House key={i} name={house} characterList={this.props.characterList} />
    ));

    return <ul className="houseContainer">{houses}</ul>;
  }
}
