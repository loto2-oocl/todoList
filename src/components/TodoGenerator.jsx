import React, { Component } from 'react';

export default class TodoGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.addTodoItem(this.state.message);
    this.setState({
      message: '',
    });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            placeholder="input a new todo here"
            onChange={this.handleChange}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}
