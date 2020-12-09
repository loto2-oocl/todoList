import { Button, Col, Input, Row, Form } from 'antd';
import React, { useState } from 'react';
import { createNewTodo } from '../apis/todos';

const TodoGenerator = ({ addTodoItem }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (formValues) => {
    const { message } = formValues;
    if (message === '') {
      return;
    }

    setLoading(true);
    createNewTodo(message)
      .then((response) => {
        addTodoItem(response.data);
        form.resetFields();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Row gutter={10}>
        <Col flex="auto">
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Todo message cannot be empty',
              },
            ]}
          >
            <Input type="text" placeholder="input a new todo here..." />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item>
            <Button loading={loading} block type="primary" htmlType="submit">
              Add Todo
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoGenerator;
