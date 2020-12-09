import './TodoItem.css';
import React from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Row, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';

const TodoItem = ({ todoItem, removeTodoItem, toggleChangeStatus }) => {
  const { message, status } = todoItem;

  const handleClick = () => {
    const { id } = todoItem;
    deleteTodoItem(id).then(() => {
      removeTodoItem(id);
    });
  };

  const handleStatusChange = () => {
    const { id } = todoItem;
    toggleTodoStatus(todoItem).then(() => {
      toggleChangeStatus(id);
    });
  };

  return (
    <Row className="todo-item-row">
      <Col flex="auto">
        <span
          className={status === DONE ? 'todo-item-done' : ''}
          onClick={handleStatusChange}
        >
          {message}
        </span>
      </Col>
      <Space />
      <Col flex="50px">
        <Button type="text" onClick={handleClick}>
          <CloseOutlined className="todo-item-close-button" />
        </Button>
      </Col>
    </Row>
  );
};

export default TodoItem;
