import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Form, Input } from 'antd';
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
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
  };

  const handleUpdateTag = (formValues) => {
    setConfirmLoading(true);
    updateTagById(tag.id, formValues)
      .then((response) => {
        dispatch(updateTag(response.data));
      })
      .finally(() => {
        setConfirmLoading(false);
        closeModal();
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
      </Modal>
    </>
  );
};

export default TagEditor;
