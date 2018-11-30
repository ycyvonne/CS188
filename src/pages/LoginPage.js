import React, { Component } from 'react'
import colors from '../global/colors'

import Page from '../components/Page'
import FacebookBtn from '../components/FacebookBtn'
import Loading from '../components/Loading'
import Logo from '../components/Logo'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    var loggingIn = sessionStorage.getItem('loggingIn')
    return (
      <Page
        backButton={false}
        customClasses={`justify-content:center; ${
          !loggingIn ? 'background-color: ' + colors.red : ''
        }`}
      >
        {!loggingIn && <Logo />}
        {loggingIn && <Loading />}
        {!loggingIn && <FacebookBtn onClick={this.props.login} />}
      </Page>
    )
  }
}

export default LoginPage
