import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { createNewTodo } from '../apis/todos';

const TodoGenerator = ({ addTodoItem }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message === '') {
      return;
    }

    setLoading(true);
    createNewTodo(message)
      .then((response) => {
        addTodoItem(response.data);
        setMessage('');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Row gutter={10}>
        <Col flex="auto">
          <Input
            type="text"
            value={message}
            placeholder="input a new todo here..."
            onChange={handleChange}
          />
        </Col>
        <Col span={5}>
          <Button loading={loading} block type="primary" onClick={handleSubmit}>
            Add Todo
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TodoGenerator;
