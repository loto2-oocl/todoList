import './TodoList.css';
import React, { Component } from 'react';

import TodoGroup from './TodoGroup';
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer';
import { Card } from 'antd';

class TodoList extends Component {
  render() {
    return (
      <div className="todolist-card-wrapper">
        <Card title="Todo List" bordered={false}>
          <TodoGroup />
          <TodoGeneratorContainer />
        </Card>
      </div>
    );
  }
}

export default TodoList;
