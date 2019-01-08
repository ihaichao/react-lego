import React, { Component } from 'react';

export default class Preview extends Component {
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
    console.log(e)
    e.preventDefault()
    // console.log(e.dataTransfer.getData('info'))
  }
  
  render() {
    return (
      <div className="preview" ref="preview" onDrop={this.handleDrop} style={{ height: '100%' }}></div>
    );
  }
}