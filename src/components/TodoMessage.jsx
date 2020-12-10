import React, { useState } from 'react';
import { Tooltip, Typography } from 'antd';

const { Paragraph } = Typography;

const TodoMessage = ({ children }) => {
  const [truncated, setTruncated] = useState(false);
  return (
    <Tooltip title={truncated ? children : undefined} placement="bottomLeft">
      <Paragraph
        style={{ width: '100%' }}
        ellipsis={{ rows: 1, onEllipsis: setTruncated }}
      >
        <>{children}</>
      </Paragraph>
    </Tooltip>
  );
};
export default TodoMessage;
