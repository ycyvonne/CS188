import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Redirect } from '@reach/router'

class RequireAuth extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    var sessionUser = sessionStorage.getItem('user')
    if (!this.props.user && !sessionUser) {
      return <Redirect to="/" noThrow />
    } else {
      return (
        <div
          className={css`
            height: 100%;
            width: inherit;
            > * {
              height: 100%;
              width: inherit;
            }
          `}
        >
          {this.props.children}
        </div>
      )
    }
  }
}

export default RequireAuth
