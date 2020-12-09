import './TodoGroup.css';
import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';
import { getTodoList } from '../apis/todos';

export default class TodoGroup extends Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodos(response.data);
    });
  }

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
