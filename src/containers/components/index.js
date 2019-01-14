import React, { Component } from "react"
import { Input } from "antd"

import Form from './Form'

import './index.scss'

export default class Components extends Component {
  handleDragStart = e => {
    e.persist()
    e.dataTransfer.setData("info", e.target.getAttribute("data-name"))
  }

  render() {
    return (
      <div className="components">
        <div
          className="component-wrapper"
          draggable="true"
          onDragStart={this.handleDragStart}
          data-name="Form"
        >
          <Form />
        </div>
        <div
          className="component-wrapper"
          draggable="true"
          onDragStart={this.handleDragStart}
          data-name="Input"
        >
          <Input placeholder="input" />
        </div>
      </div>
    )
  }
}
