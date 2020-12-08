import React, { Component } from 'react';

class TodoItem extends Component {
  handleClick = () => {
    const { id } = this.props.todoItem;
    this.props.removeTodoItem(id);
  };

  render() {
    const { message, status } = this.props.todoItem;
    return (
      <div>
        <span>{message}</span>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default TodoItem;
