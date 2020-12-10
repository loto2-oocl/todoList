import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AppHeader() {
  const location = useLocation();

  return (
    <Menu
      defaultSelectedKeys={['/']}
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <Menu.Item key="/">
        <Link to="/">Todo Page</Link>
      </Menu.Item>
      <Menu.Item key="/done">
        <Link to="/done">Done Page</Link>
      </Menu.Item>
      <Menu.Item key="/tags">
        <Link to="/tags">Manage Tags</Link>
      </Menu.Item>
    </Menu>
  );
}

export default AppHeader;
