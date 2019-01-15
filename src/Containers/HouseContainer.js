import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  filterStudentsByHouses = house => {
    return this.props.characters.filter(character => character.house === house);
  };

  render() {
    console.log("house container", this.props);
    return this.props.houses.map(house => (
      <House
        key={house}
        house={house}
        houses={this.props.houses}
        updateHouse={this.props.updateHouse}
        characters={this.filterStudentsByHouses(house)}
      />
    ));
  }
}
