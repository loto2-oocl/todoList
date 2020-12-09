import './DoneList.css';
import { Card, Col, List, Row } from 'antd';
import React, { Component } from 'react';
import ColoredTag from './ColoredTag';

export default class DoneList extends Component {
  render() {
    const { doneList } = this.props;

    const renderTags = (tags) => {
      return tags.map((tag) => <ColoredTag key={tag} tag={tag} />);
    };

    return (
      <div className="donelist-card-wrapper">
        <Card title="Done List" bordered={false}>
          <List>
            {doneList.map((doneItem) => (
              <List.Item key={doneItem.id}>
                <Row gutter={[0, 10]}>
                  <Col span={24}>
                    <span>{doneItem.message}</span>
                  </Col>
                  <Col>{renderTags(doneItem.tags)}</Col>
                </Row>
              </List.Item>
            ))}
          </List>
        </Card>
      </div>
    );
  }
}
