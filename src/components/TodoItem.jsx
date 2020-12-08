import './TodoItem.css';
import React, { Component } from 'react';
import { DONE } from '../constants/TodoItemStatus';

class TodoItem extends Component {
  handleClick = () => {
    const { id } = this.props.todoItem;
    this.props.removeTodoItem(id);
  };

  handleStatusChange = () => {
    const { id } = this.props.todoItem;
    this.props.toggleChangeStatus(id);
  };

  render() {
    const { message, status } = this.props.todoItem;
    return (
      <div>
        <span
          className={status === DONE ? 'todo-item-done' : ''}
          onClick={this.handleStatusChange}
        >
          {message}
        </span>
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default TodoItem;
