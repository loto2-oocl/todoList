import './TagsGenerator.css';
import { EditOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { updateTodoTags } from '../apis/todos';

const TagsGenerator = ({ todoItem, updateTodoItem }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [tags, setTags] = useState([...todoItem.tags]);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChange = (value) => {
    setTags(value);
  };

  const handleEditTags = () => {
    setConfirmLoading(true);
    updateTodoTags(todoItem, tags)
      .then((response) => {
        updateTodoItem(response.data);
      })
      .finally(() => {
        setConfirmLoading(false);
        setVisible(false);
      });
  };

  return (
    <>
      <Button onClick={showModal} type="text">
        <EditOutlined />
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
          mode="tags"
          className="todo-item-tags-input"
          onChange={handleChange}
          defaultValue={tags}
        ></Select>
      </Modal>
    </>
  );
};

export default TagsGenerator;
