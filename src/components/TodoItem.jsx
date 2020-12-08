import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { message, status } = this.props.todoItem;
    return (
      <div>
        <span>{message}</span>
        <button>x</button>
      </div>
    );
  }
}

export default TodoItem;
