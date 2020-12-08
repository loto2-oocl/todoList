import React, { Component } from 'react';

import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoGroupContainer />
        <TodoGeneratorContainer />
      </div>
    );
  }
}

export default TodoList;
