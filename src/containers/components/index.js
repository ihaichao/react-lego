import React, { Component } from 'react';
import { Input } from 'antd';

export default class Components extends Component {
  handleDragStart = (e) => {
    e.persist()
    e.dataTransfer.setData('info', JSON.stringify({
      componentName: e.target.getAttribute('data-name')
    }))
  }

  render() {
    return (
      <div className="components">
        <div draggable="true" onDragStart={this.handleDragStart} data-name="Input">
          <Input placeholder="input" />
        </div>
      </div>
    );
  }
}