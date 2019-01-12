import React from "react";
import CharacterCard from "../Components/CharacterCard";

export default class CharacterContainer extends React.Component {
  render() {
    return (
      <div>
        <CharacterCard
          key={this.props.id}
          id={this.props.id}
          name={this.props.name}
          age={this.props.age}
          house={this.props.house}
          role={this.props.role}
          image1={this.props.image1}
          image2={this.props.image2}
        />
      </div>
    );
  }
}
