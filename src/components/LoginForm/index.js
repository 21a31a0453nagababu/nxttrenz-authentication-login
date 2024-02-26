// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
  }

  onSubmitsuccess = () => {
    const history = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  onSubmitform = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    if (response.ok === true) {
      this.onSubmitsuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="img"
        />
        <form onSubmit={this.onSubmitform}>
          <div className="login-details">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button className="login-button">Login</button>
            {showSubmitError && (
              <p className="error-message">*{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}
export default LoginForm
