import React, { useEffect, useState } from 'react';
import { Table, Tag, Typography } from 'antd';
import { getAllTags } from '../../../apis/tags';
import { useDispatch, useSelector } from 'react-redux';
import { initTags } from '../../../actions';
import TagItemActions from '../TagItemActions';

const TagList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const tagsList = useSelector((state) => state.tags);

  const fetchAllTags = () => {
    setLoading(true);
    getAllTags()
      .then((response) => {
        dispatch(initTags(response.data));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => fetchAllTags(), []);

  const renderTagContent = (content) => {
    return (
      <Typography.Paragraph
        ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}
      >
        {content}
      </Typography.Paragraph>
    );
  };

  const renderColorBlock = (color) => {
    return <Tag color={color}>{color}</Tag>;
  };

  const columns = [
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      render: (content) => renderTagContent(content),
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      width: 150,
      render: (color) => renderColorBlock(color),
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      render: (record) => {
        return <TagItemActions tag={record} />;
      },
    },
  ];

  return <Table columns={columns} loading={loading} dataSource={tagsList} />;
};

export default TagList;
