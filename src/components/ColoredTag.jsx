import React from 'react';
import { Tag } from 'antd';
import {
  red,
  volcano,
  orange,
  gold,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  green,
} from '@ant-design/colors';

const ColoredTag = ({ tag }) => {
  const getRandomColor = (tag) => {
    switch (tag.length % 10) {
      case 1:
        return red.primary;
      case 2:
        return volcano.primary;
      case 3:
        return orange.primary;
      case 4:
        return gold.primary;
      case 5:
        return cyan.primary;
      case 6:
        return blue.primary;
      case 7:
        return geekblue.primary;
      case 8:
        return purple.primary;
      case 9:
        return magenta.primary;
      default:
        return green.primary;
    }
  };

  return <Tag color={getRandomColor(tag)}>{tag}</Tag>;
};

export default ColoredTag;
