import { Button, Col, Input, Row } from 'antd';
import React, { Component } from 'react';
import { createNewTodo } from '../apis/todos';

export default class TodoGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.message === '') {
      return;
    }

    createNewTodo(this.state.message).then((response) => {
      this.props.addTodoItem(response.data);
      this.setState({
        message: '',
      });
    });
  };

  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col flex="auto">
            <Input
              type="text"
              value={this.state.message}
              placeholder="input a new todo here..."
              onChange={this.handleChange}
            />
          </Col>
          <Col flex="50px">
            <Button onClick={this.handleSubmit}>add</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
