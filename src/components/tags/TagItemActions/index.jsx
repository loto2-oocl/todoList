import './TagItem.css';
import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeTag } from '../../../actions';
import { deleteTagById } from '../../../apis/tags';

const TagItemActions = ({ tag }) => {
  const { id: tagId } = tag;
  const dispatch = useDispatch();

  const handleRemove = () => {
    deleteTagById(tagId).then(() => {
      dispatch(removeTag(tagId));
    });
  };

  return (
    <Row>
      <Col flex="50px">
        <Tooltip placement="topLeft" title="Edit">
          <Button type="text">
            <EditOutlined />
          </Button>
        </Tooltip>
      </Col>
      <Col flex="50px">
        <Tooltip placement="topLeft" title="Delete">
          <Button type="text" onClick={handleRemove}>
            <DeleteOutlined className="tag-item-delete-btn" />
          </Button>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default TagItemActions;
