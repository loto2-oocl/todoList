import React, { useState } from 'react';
import { Button, Form, Modal, Input, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ColorPicker from '../ColorPicker';
import { createNewTag } from '../../../apis/tags';
import { useDispatch } from 'react-redux';
import { addTag } from '../../../actions';

const TagsCreator = () => {
  const [form] = Form.useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();

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
    resetErrorBox();
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
  };

  const showErrorBox = (message) => {
    setShowErrorMessage(true);
    setErrorDescription(message);
  };

  const resetErrorBox = () => {
    setShowErrorMessage(false);
    setErrorDescription('');
  };

  const handleSubmit = (formValues) => {
    setConfirmLoading(true);
    resetErrorBox();
    createNewTag(formValues)
      .then((response) => {
        dispatch(addTag(response.data));
        form.resetFields();
        closeModal();
      })
      .catch((error) => {
        const { message } = error.response.data;
        showErrorBox(message);
      })
      .finally(() => {
        setConfirmLoading(false);
      });
  };

  return (
    <>
      <Button block type="primary" onClick={showModal}>
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
            rules={[
              { required: true, message: 'Tag content cannot be empty' },
              { max: 20, type: 'string', message: 'Maximum 20 characters' },
            ]}
          >
            <Input type="text" maxLength={20} />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: 'Please pick one color' }]}
          >
            <ColorPicker form={form} />
          </Form.Item>
        </Form>

        {showErrorMessage && (
          <Alert
            message="Error creating tag"
            type="error"
            description={errorDescription}
            closable
          />
        )}
      </Modal>
    </>
  );
};

export default TagsCreator;
