import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Header from '../components/Header'

import FacebookBtn from '../components/FacebookBtn'

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Page backButton={false}>
        <Header>Login to XX app</Header>
        <FacebookBtn onClick={this.props.login}/>
      </Page>
    )
  }
}

export default LoginPage
