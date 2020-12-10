import './TagItem.css';
import React from 'react';
import { Row, Col, Typography, Button, Tooltip, Popover } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TagItemActions = ({ tag }) => {
  return (
    <Row>
      <Col flex="50px">
        <Tooltip placement="topLeft" title="Edit">
          <Button type="text">
            <EditOutlined className="tag-item-edit-btn" />
          </Button>
        </Tooltip>
      </Col>
      <Col flex="50px">
        <Tooltip placement="topLeft" title="Delete">
          <Button type="text">
            <DeleteOutlined className="tag-item-delete-btn" />
          </Button>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default TagItemActions;
