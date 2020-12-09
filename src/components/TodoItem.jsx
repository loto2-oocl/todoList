import './TodoItem.css';
import React from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Row, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';
import TagsGeneratorContainer from '../containers/TagsGeneratorContainer';
import classNames from 'classnames';
import ColoredTag from './ColoredTag';

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

  const renderTags = (tags) => {
    return tags.map((tag) => <ColoredTag key={tag} tag={tag} />);
  };

  const messageClassName = classNames({
    'todo-item-text': true,
    'todo-item-done': status === DONE,
  });

  return (
    <>
      <Row className="todo-item-row" align="middle">
        <Col span={20}>
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <span className={messageClassName} onClick={handleStatusChange}>
                {message}
              </span>
            </Col>
            <Col>{renderTags(todoItem.tags)}</Col>
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
