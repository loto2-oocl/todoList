import React, { useState } from 'react';
import { Button, Form, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColorPicker from '../ColorPicker';
import { createNewTag } from '../../../apis/tags';

const TagsCreator = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    closeModal();
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
  };

  const handleSubmit = (formValues) => {
    setConfirmLoading(true);
    createNewTag(formValues)
      .then((response) => {})
      .finally(() => {
        setConfirmLoading(false);
        closeModal();
      });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <PlusOutlined /> Create Tag
      </Button>
      <Modal
        title="Create New Tag"
        visible={visible}
        confirmLoading={confirmLoading}
        okText="Add Tag"
        maskClosable={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleSubmit} {...formItemLayout}>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Tag content cannot be empty' }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: 'Please pick one color' }]}
          >
            <ColorPicker form={form} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TagsCreator;
