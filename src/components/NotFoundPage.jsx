import { Result } from 'antd';
import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  render() {
    return <Result status="404" title="404" subTitle="Page not found." />;
  }
}
