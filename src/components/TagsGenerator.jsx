import './TagsGenerator.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { updateTodoTags } from '../apis/todos';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoItem } from '../actions';
import _ from 'lodash';

const { Option } = Select;

const TagsGenerator = ({ todoItem }) => {
  const initialTagIds = _.map(todoItem.tags, 'id');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [tagIds, setTagIds] = useState(initialTagIds);
  const tagsList = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setTagIds(initialTagIds);
  };

  const handleChange = (value) => {
    setTagIds(value);
  };

  const handleEditTags = () => {
    setConfirmLoading(true);
    updateTodoTags(todoItem, tagIds)
      .then((response) => {
        dispatch(updateTodoItem(response.data));
      })
      .finally(() => {
        setConfirmLoading(false);
        setVisible(false);
      });
  };

  const renderTagOptions = () => {
    return tagsList.map((tag) => (
      <Option key={tag.id} value={tag.id}>
        {tag.content}
      </Option>
    ));
  };

  return (
    <>
      <Button onClick={showModal} type="text">
        <PlusOutlined />
      </Button>
      <Modal
        title="Edit Tags"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleEditTags}
        onCancel={handleCancel}
        maskClosable={false}
        okText="Edit"
      >
        <Select
          mode="multiple"
          className="todo-item-tags-input"
          value={tagIds}
          onChange={handleChange}
          defaultValue={initialTagIds}
        >
          {renderTagOptions()}
        </Select>
      </Modal>
    </>
  );
};

export default TagsGenerator;
