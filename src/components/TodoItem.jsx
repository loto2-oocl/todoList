import './TodoItem.css';
import React from 'react';
import { Button, Col, Row, Tag, Tooltip } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteTodoItem, toggleTodoStatus } from '../apis/todos';
import TagsGenerator from './TagsGenerator';
import classNames from 'classnames';
import TodoMessage from './TodoMessage';

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

  const doneIconClassnames = classNames({
    'todo-item-icon': true,
    'todo-item-icon-done': status,
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
        <Col flex="50px">
          <Tooltip title="Mark Done">
            <Button type="text" onClick={handleStatusChange}>
              <CheckCircleOutlined className={doneIconClassnames} />
            </Button>
          </Tooltip>
        </Col>
        <Col flex="auto">
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <TodoMessage>{message}</TodoMessage>
            </Col>
            <Col>{renderTags(todoItem.tags)}</Col>
          </Row>
        </Col>
        <Col flex="50px">
          <TagsGenerator todoItem={todoItem} />
        </Col>
        <Col flex="50px">
          <Tooltip title="Remove">
            <Button type="text" onClick={handleClick}>
              <DeleteOutlined className="todo-item-delete-button" />
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </>
  );
};

export default TodoItem;
