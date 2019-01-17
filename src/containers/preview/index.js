import React, { Component } from 'react'
// import { Form } from 'antd'

import Form from '../components/Form'

import './index.scss'

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

  handleSelect = (e) => {
    if (e.target.className.indexOf('selected') === -1) {
      e.target.className += ' selected'
    }
  }

  renderComponent = (componentName, index) => {
    switch(componentName) {
      case 'Form':
        return (
          <Form onClick={this.handleSelect} key={index} />
        )
      default:
        return (
          <Form onClick={this.handleSelect} key={index} />
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