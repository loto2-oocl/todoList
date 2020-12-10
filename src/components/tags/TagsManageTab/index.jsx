import './TagsManageTab.css';
import React from 'react';

import { Card, Col, Row } from 'antd';
import TagsCreator from '../TagsCreator';
import TagList from '../TagList';

const TagsManageTab = () => {
  return (
    <div className="tags-manage-tab-card-wrapper">
      <Card title="Manage Tags" bordered={false}>
        <Row justify="end" gutter={[0, 20]}>
          <Col span={5}>
            <TagsCreator />
          </Col>
          <Col span={24}>
            <TagList />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TagsManageTab;
