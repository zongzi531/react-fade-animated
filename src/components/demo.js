import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div className="demo-wrapper" style={{
        background: 'blue'
      }}>
        <div onClick={() => this.props.history.push('/about')}>demo</div>
      </div>
    )
  }
}
