import { EditOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { updateTodoTags } from '../apis/todos';

const TagsGenerator = ({ todoItem }) => {
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
        console.log(response);
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
          style={{ width: '100%' }}
          onChange={handleChange}
          defaultValue={tags}
        ></Select>
      </Modal>
    </>
  );
};

export default TagsGenerator;
