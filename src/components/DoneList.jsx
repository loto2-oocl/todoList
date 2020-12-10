import './DoneList.css';
import { Card, Col, List, Row, Tag } from 'antd';
import React, { Component } from 'react';
import TodoMessage from './TodoMessage';

export default class DoneList extends Component {
  render() {
    const { doneList } = this.props;

    const renderTags = (tags) => {
      return tags.map((tag) => (
        <Tag key={tag.id} color={tag.color}>
          {tag.content}
        </Tag>
      ));
    };

    const renderListItem = (doneItem) => (
      <List.Item key={doneItem.id}>
        <Row className="done-item-row" wrap={false}>
          <Col flex="auto">
            <Row>
              <Col span={24}>
                <TodoMessage>{doneItem.message}</TodoMessage>
              </Col>
              <Col>{renderTags(doneItem.tags)}</Col>
            </Row>
          </Col>
        </Row>
      </List.Item>
    );

    return (
      <div className="donelist-card-wrapper">
        <Card title="Done List" bordered={false}>
          <List
            size="small"
            dataSource={doneList}
            renderItem={renderListItem}
          />
        </Card>
      </div>
    );
  }
}
