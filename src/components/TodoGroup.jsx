import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoGroup extends Component {
  render() {
    const { todoItemList } = this.props;

    return (
      <div>
        {todoItemList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </div>
    );
  }
}
