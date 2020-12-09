import './TodoGroup.css';
import React, { Component } from 'react';
import TodoItemContainer from '../containers/TodoItemContainer';
import { getTodoList } from '../apis/todos';
import { List } from 'antd';

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
        <List
          size="small"
          dataSource={todoItemList}
          renderItem={(todoItem) => (
            <List.Item key={todoItem.id}>
              <TodoItemContainer todoItem={todoItem} />
            </List.Item>
          )}
        />
        {/* {todoItemList.map((todoItem) => (
          <TodoItemContainer key={todoItem.id} todoItem={todoItem} />
        ))} */}
      </div>
    );
  }
}
