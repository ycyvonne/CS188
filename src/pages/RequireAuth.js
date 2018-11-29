import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Redirect } from '@reach/router'

class RequireAuth extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log('this.props.user', this.props.user)
    if (!this.props.user) {
        return <Redirect to="/" noThrow/>
    } else {
        return (
            <div className={css`
                height: 100%;
                > * {
                    height: 100%;
                }
            `}>
                {this.props.children}
            </div>
        );
    }
  }
}

export default RequireAuth
