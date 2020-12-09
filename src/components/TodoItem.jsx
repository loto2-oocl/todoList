import './TodoItem.css';
import React, { Component } from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Row, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem } from '../apis/todos';

class TodoItem extends Component {
  handleClick = () => {
    const { id } = this.props.todoItem;
    deleteTodoItem(id).then(() => {
      this.props.removeTodoItem(id);
    });
  };

  handleStatusChange = () => {
    const { id } = this.props.todoItem;
    this.props.toggleChangeStatus(id);
  };

  render() {
    const { message, status } = this.props.todoItem;
    return (
      <div>
        <Row>
          <Col flex="auto">
            <span
              className={status === DONE ? 'todo-item-done' : ''}
              onClick={this.handleStatusChange}
            >
              {message}
            </span>
          </Col>
          <Space />
          <Col flex="50px">
            <Button type="text" onClick={this.handleClick}>
              <CloseOutlined />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoItem;
