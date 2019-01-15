import React, { Component } from "react";

class NewCharacterForm extends Component {
  state = {
    name: "",
    age: "",
    role: "",
    house: "",
    image1: "",
    image2: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.characterSubmitHandler(e, this.state);
    this.setState({
      name: "",
      age: "",
      role: "",
      house: "",
      image1: "",
      image2: ""
    });
  };

  render() {
    return (
      <div>
        <h3>New Character</h3>
        <form onSubmit={this.submitHandler}>
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
            name="role"
            placeholder="role"
            value={this.state.role}
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
          <button>Submit Character</button>
        </form>
      </div>
    );
  }
}

export default NewCharacterForm;
