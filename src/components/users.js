import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div className="demo-wrapper" style={{
        background: 'yellow'
      }}>
        <div onClick={() => console.log('last')}>users</div>
        <div onClick={() => this.props.history.push('/about')}>push about</div>
        <div onClick={() => this.props.history.goBack()}>go back</div>
      </div>
    )
  }
}
