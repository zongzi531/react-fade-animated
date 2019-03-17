import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { update } from '../actions'

import Demo from '../components/demo'
import About from '../components/about'
import Users from '../components/users'

const routes = [
  {
    path: '/',
    component: Demo
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/users',
    component: Users
  }
]

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

class Routes extends Component {
  shouldComponentUpdate(nextProps) {
    const toPathname = nextProps.location.pathname
    const fromPathname = this.props.location.pathname

    if (toPathname === fromPathname) {
      return false
    }

    console.log(fromPathname, '==>>', toPathname)

    const toIndex = history.getItem(toPathname)
    const fromIndex = history.getItem(fromPathname)

    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        this.props.update('forward')
      } else {
        this.props.update('reverse')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      toPathname !== '/' && history.setItem(toPathname, historyCount)
      this.props.update('forward')
    }
    console.log(this.props.direction)
    return true
  }
  render() {
    return (
      <React.Fragment>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames={'fade-' + (this.props.direction === 'forward' ? 'in' : 'out')}
            timeout={300}
          >
            <Switch location={this.props.location}>
              {
                routes.map(props => {
                  return <Route {...props} key={props.path} exact />
                })
              }
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  direction: state.direction
})

const mapDispatchToProps = dispatch => ({
  update: direction => dispatch(update(direction))
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
