import './TodoItem.css';
import React from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Row, Space, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';
import TagsGeneratorContainer from '../containers/TagsGeneratorContainer';

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
      <Row className="todo-item-row" align="middle">
        <Col span={20}>
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <span
                className={status === DONE ? 'todo-item-done' : ''}
                onClick={handleStatusChange}
              >
                {message}
              </span>
            </Col>
            <Col>
              {todoItem.tags.map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Col>
          </Row>
        </Col>
        <Space />
        <Col span={2}>
          <TagsGeneratorContainer todoItem={todoItem} />
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
