import React, { Component } from "react"

import Form from './Form'
import Select from './Select'
import Input from './Input'

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
          <Input />
        </div>
        <div
          className="component-wrapper"
          draggable="true"
          onDragStart={this.handleDragStart}
          data-name="Select"
        >
          <Select />
        </div>
      </div>
    )
  }
}
