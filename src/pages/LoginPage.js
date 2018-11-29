import React, { Component } from 'react'
import Page from '../components/Page'
import FacebookBtn from '../components/FacebookBtn'
import Loading from '../components/Loading'

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var loggingIn = sessionStorage.getItem("loggingIn")
    return (
      <Page backButton={false}>
        {loggingIn && <Loading />}
        {!loggingIn && <FacebookBtn onClick={this.props.login}/>}
      </Page>
    )
  }
}

export default LoginPage
