import './TodoGroup.css';
import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';

export default class TodoGroup extends Component {
  render() {
    const { todoItemList } = this.props;

    return (
      <div className="todogroup-wrapper">
        {todoItemList.map((todoItem) => (
          <TodoItemContainer key={todoItem.id} todoItem={todoItem} />
        ))}
      </div>
    );
  }
}
