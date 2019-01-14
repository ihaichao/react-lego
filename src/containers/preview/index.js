import React, { Component } from 'react'
import { Form, Input } from 'antd'

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

  renderComponent = (ComponentName) => {
    return (
      <ComponentName />
    )
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
            return this.renderComponent(component)
          })
        }
      </div>
    );
  }
}