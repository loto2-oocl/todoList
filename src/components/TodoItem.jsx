import './TodoItem.css';
import React from 'react';
import { DONE } from '../constants/TodoItemStatus';
import { Button, Col, Popover, Row, Space, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';
import classNames from 'classnames';
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

  const renderTags = (tags) => {
    return tags.map((tag) => (
      <Tag key={tag.id} color={tag.color}>
        {tag.content}
      </Tag>
    ));
  };

  const messageClassName = classNames({
    'todo-item-text': true,
    'todo-item-done': status === DONE,
  });

  return (
    <>
      <Row
        className="todo-item-row"
        align="middle"
        justify="end"
        wrap={false}
        gutter={5}
      >
        <Col flex="auto">
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
        <Col flex="50px">
          <Popover title="Add Tags">
            <TagsGenerator todoItem={todoItem} />
          </Popover>
        </Col>
        <Col flex="50px">
          <Button type="text" onClick={handleClick}>
            <CloseOutlined className="todo-item-close-button" />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TodoItem;
