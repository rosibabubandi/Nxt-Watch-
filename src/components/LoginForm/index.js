import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginMainContainer,
  FormContainer,
  FormLogoContainer,
  FormLogoImage,
  LoginLabelElement,
  FormInputElement,
  CheckBoxLabelCommonContainer,
  InputCheckBox,
  CheckBoxLabelElement,
  LoginButton,
  ErrorMessageText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onFailureLogin = errMsg => {
    this.setState({showErrorMessage: true, errorMessage: errMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const responseData = await response.json()

    if (response.ok) {
      this.onSuccessLogin(responseData.jwt_token)
    } else {
      this.onFailureLogin(responseData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMessage,
      errorMessage,
    } = this.state

    const passwordInputType = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    /* if (jwtToken !== undefined) {
      return <Redirect to="/" />
    } */

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const mainContainerBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const formContainerBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const logoImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const inputLabelColor = isDarkTheme ? '#ffffff' : '#383838'
          const inputBorderColor = isDarkTheme ? '#00306e' : '#383838'
          const checkBoxLabelColor = isDarkTheme ? '#ffffff' : '#000000'
          const errorMessageColor = isDarkTheme ? '#ff0000' : '#ff0b37'

          return (
            <LoginMainContainer bgColor={mainContainerBgColor}>
              <FormContainer
                bgColor={formContainerBgColor}
                onSubmit={this.onSubmitLogin}
              >
                <FormLogoContainer>
                  <FormLogoImage src={logoImage} alt="channel logo" />
                </FormLogoContainer>
                <LoginLabelElement color={inputLabelColor}>
                  USERNAME
                </LoginLabelElement>
                <FormInputElement
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                  borderColor={inputBorderColor}
                  placeholder="Username"
                />
                <LoginLabelElement color={inputLabelColor}>
                  PASSWORD
                </LoginLabelElement>
                <FormInputElement
                  type={passwordInputType}
                  value={password}
                  onChange={this.onChangePassword}
                  borderColor={inputBorderColor}
                  placeholder="Password"
                />
                <CheckBoxLabelCommonContainer>
                  <InputCheckBox
                    type="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckBoxLabelElement color={checkBoxLabelColor}>
                    Show Password
                  </CheckBoxLabelElement>
                </CheckBoxLabelCommonContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && (
                  <ErrorMessageText color={errorMessageColor}>
                    {errorMessage}
                  </ErrorMessageText>
                )}
              </FormContainer>
            </LoginMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
