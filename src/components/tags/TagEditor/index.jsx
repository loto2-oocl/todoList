import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Form, Input, Alert } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTag } from '../../../actions';
import { updateTagById } from '../../../apis/tags';
import ColorPicker from '../ColorPicker';

const TagEditor = ({ tag }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');
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

  const handleUpdateTag = (formValues) => {
    setConfirmLoading(true);
    resetErrorBox();
    updateTagById(tag.id, formValues)
      .then((response) => {
        dispatch(updateTag(response.data));
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
      <Tooltip placement="topLeft" title="Edit">
        <Button type="text" onClick={showModal}>
          <EditOutlined />
        </Button>
      </Tooltip>
      <Modal
        title="Edit Tag"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        okText="Edit"
      >
        <Form
          form={form}
          onFinish={handleUpdateTag}
          initialValues={tag}
          {...formItemLayout}
        >
          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: 'Tag content cannot be empty' },
              { max: 20, type: 'string', message: 'Maximum 20 characters' },
            ]}
          >
            <Input defaultValue={tag.content} type="text" maxLength={20} />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: 'Please pick one color' }]}
          >
            <ColorPicker defaultColor={tag.color} form={form} />
          </Form.Item>
        </Form>

        {showErrorMessage && (
          <Alert
            message="Error updating tag"
            type="error"
            description={errorDescription}
            closable
          />
        )}
      </Modal>
    </>
  );
};

export default TagEditor;
