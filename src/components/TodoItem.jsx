import './TodoItem.css';
import React from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Row, Space, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';
import TagsGenerator from './TagsGenerator';

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
    <>
      <Row className="todo-item-row">
        <Col span={20}>
          <Row>
            <span
              className={status === DONE ? 'todo-item-done' : ''}
              onClick={handleStatusChange}
            >
              {message}
            </span>
          </Row>
          <Row>
            {todoItem.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Row>
        </Col>
        <Space />
        <Col span={2}>
          <TagsGenerator todoItem={todoItem} />
        </Col>
        <Col span={2}>
          <Button type="text" onClick={handleClick}>
            <CloseOutlined className="todo-item-close-button" />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TodoItem;
