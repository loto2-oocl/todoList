import './DoneList.css';
import { Card, List } from 'antd';
import React, { Component } from 'react';

export default class DoneList extends Component {
  render() {
    const { doneList } = this.props;

    return (
      <div className="donelist-card-wrapper">
        <Card title="Done List" bordered={false}>
          <List>
            {doneList.map((doneItem) => (
              <List.Item key={doneItem.id}>{doneItem.message}</List.Item>
            ))}
          </List>
        </Card>
      </div>
    );
  }
}
