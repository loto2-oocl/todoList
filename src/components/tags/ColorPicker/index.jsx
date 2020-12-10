import React, { useState } from 'react';
import { Button, Col, Popover, Row, Tag } from 'antd';
import { BlockPicker } from 'react-color';
import _ from 'lodash';

const ColorPicker = ({ form }) => {
  const [color, setColor] = useState('');

  const handleChangeComplete = (inputColorObj) => {
    const { hex: inputColor } = inputColorObj;
    form.setFieldsValue({ color: inputColor });
    setColor(inputColor);
  };

  const reactColorProps = {
    style: {
      input: {
        border: 'none',
      },
    },
    triangle: 'hide',
  };

  const content = (
    <BlockPicker
      color={color}
      onChangeComplete={handleChangeComplete}
      {...reactColorProps}
    />
  );

  return (
    <>
      <Row gutter={[0, 10]}>
        {!_.isEmpty(color) && (
          <Col span={24}>
            <Tag color={color}>{color}</Tag>
          </Col>
        )}
        <Col>
          <Popover
            placement="topLeft"
            content={content}
            title="Choose a color"
            trigger="click"
          >
            <Button>Pick Color</Button>
          </Popover>
        </Col>
      </Row>
    </>
  );
};

export default ColorPicker;
