import React, { Component } from 'react';
import { Input } from 'antd';

export default class Components extends Component {
  state = {  }
  render() {
    return (
      <div className="components">
        <div draggable="true">
          <Input placeholder="input" />
        </div>
      </div>
    );
  }
}