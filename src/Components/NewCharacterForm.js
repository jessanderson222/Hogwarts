import React, { Component } from "react";

class NewCharacterForm extends Component {
  state = {
    name: "",
    age: "",
    house: "",
    role: "",
    image1: "",
    image2: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h4>New Character</h4>
        <form onSubmit={e => this.props.characterSubmitHandler(e, this.state)}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="house"
            placeholder="house"
            value={this.state.house}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="role"
            value={this.state.role}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image1"
            placeholder="image 1"
            value={this.state.image1}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="image2"
            placeholder="image 2"
            value={this.state.image2}
            onChange={this.handleChange}
          />
          <button>Create Character</button>
        </form>
      </div>
    );
  }
}

export default NewCharacterForm;
