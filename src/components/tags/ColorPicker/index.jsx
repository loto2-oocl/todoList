import React, { useState } from 'react';
import { Button, Col, Popover, Row } from 'antd';
import { ChromePicker } from 'react-color';
import _ from 'lodash';

const ColorPicker = ({ form }) => {
  const [color, setColor] = useState('');

  const handleChangeComplete = (inputColorObj) => {
    const { hex: inputColor } = inputColorObj;
    form.setFieldsValue({ color: inputColor });
    setColor(inputColor);
  };

  const content = (
    <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
  );

  return (
    <>
      <Row gutter={[0, 10]}>
        {!_.isEmpty(color) && <Col span={24}>{color}</Col>}
        <Col>
          <Popover placement="topLeft" content={content} title="Choose a color">
            <Button>Pick Color</Button>
          </Popover>
        </Col>
      </Row>
    </>
  );
};

export default ColorPicker;
