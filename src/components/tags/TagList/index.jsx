import './TagList.css';
import React from 'react';

import { Card, Col, Row } from 'antd';
import TagsCreator from '../TagsCreator';

const TagList = () => {
  return (
    <div className="taglist-card-wrapper">
      <Card title="Manage Tags" bordered={false}>
        <Row justify="end">
          <Col>
            <TagsCreator />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TagList;
