import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  filterStudentByHouses = house => {
    return this.props.characterList.filter(
      character => character.house === house
    );
  };
  render() {
    return (
      <ul className="houseContainer">
        {this.props.houses.map(house => (
          <House
            key={house}
            characterList={this.filterStudentByHouses(house)}
            houseName={house}
          />
        ))}
      </ul>
    );
  }
}
