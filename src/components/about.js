import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div className="demo-wrapper" style={{
        background: 'red'
      }}>
        <div onClick={() => this.props.history.push('/users')}>about</div>
        <div onClick={() => this.props.history.push('/')}>push demo</div>
        <div onClick={() => this.props.history.goBack()}>go back</div>
      </div>
    )
  }
}
