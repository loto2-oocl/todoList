import './TodoList.css';
import React, { Component } from 'react';

import TodoGroupContainer from '../containers/TodoGroupContainer';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import { Card } from 'antd';

class TodoList extends Component {
  render() {
    return (
      <div className="todolist-card-wrapper">
        <Card title="Todo List" bordered={false}>
          <TodoGroupContainer />
          <TodoGeneratorContainer />
        </Card>
      </div>
    );
  }
}

export default TodoList;
