import React, { Component } from 'react'
import { Form } from 'antd'

import Select from '../components/Select'
import Input from '../components/Input'

export default class Preview extends Component {
  state = {
    componentList: []
  }

  componentDidMount() {
    this.handleListenDrag()
  }

  handleListenDrag() {
    document.ondrag = (e) => {
      const { left, right, top } = this.refs.preview.getBoundingClientRect()
      if (e.clientX > left && e.clientX < right && e.clientY > top) {
        // console.log('true')
      }
    }
  }

  handleDrop = (e) => {
    this.setState({
      componentList: [...this.state.componentList, e.dataTransfer.getData('info')]
    })
  }

  // 必须，否则无法触发 drop 事件
  handleDragOver = (e) => {
    e.preventDefault()
  }

  renderComponent = (componentName, index) => {
    switch(componentName) {
      case 'Form':
        return (
          <Form key={index} />
        )
      case 'Input':
        return (
          <Input key={index} />
        )
      case 'Select':
        return (
          <Select key={index} />
        )
    }
  }
  
  render() {
    return (
      <div
        className="preview"
        ref="preview"
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        style={{ height: '100%', padding: '20px' }}
      >
        {
          this.state.componentList.map((component, index) => {
            return this.renderComponent(component, index)
          })
        }
      </div>
    );
  }
}