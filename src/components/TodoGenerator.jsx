import { Button, Col, Input, Row } from 'antd';
import React, { Component } from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.message === '') {
      return;
    }

    this.props.addTodoItem(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <form id="todoGenerator" onSubmit={this.handleSubmit}>
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
              <Button form="todoGenerator" key="submit" htmlType="submit">
                add
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
